const modalButton = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
let elementChangeId = -1;

const addButton = document.querySelector('.dashboard__add');
const task = document.querySelectorAll('.dashboard__task');
const todo = document.querySelector('.dashboard__todoList');
const logOut = document.querySelector('.header__button');
const cancel = document.querySelector('.modal__cancel');

let todoList = [];

const greeting = document.querySelector('.dashboard__greeting');
greeting.innerHTML = `Welcome, ${database.users[database.getUserId()].userName}, here are your tasks <br> if you don't see your tasks, just add them`;

if(database.getUserTasks() !== null) {
    todoList = database.getUserTasks();
    displayMessages();
} else {
    todoList = [];
}

tasks.changeColorTheme(database.user.theme);

addButton.addEventListener('click', dialog.showModalAdd);

modalButton.addEventListener('click', function() {

    let id = modalButton.getAttribute('id');
    if(id == 'save') {
        tasks.saveTask();
    }

    if(id == 'edit') {
        tasks.editTask();
    }

    if(id == 'out') {
        tasks.outTask();
    }
});


function displayMessages() {
    let displayMessage = '';
    if(todoList.length >= 1) {
        todoList.forEach(function(item, i) {
            displayMessage += `
            <li class="dashboard__task" id="${i}" onclick="elementChangeId = this.getAttribute('id'); dialog.showModalDescription()">
                <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
                <label class= 'dashboard__label'>${item.title}</label>
                <div class="dashboard__icons">
                    <div class="dashboard__icon pencil" id="edit_${i}" onclick="elementChangeId = this.getAttribute('id'); dialog.showModalEdit(event)"><img src="./img/pencil.png"></img></div>
                    <div class="dashboard__icon" id="backet_${i}" onclick="elementChangeId = this.getAttribute('id'); dialog.showModalDelete(event)"><img src="./img/backet.png"></img></div>
                </div>
            </li>
            `;
            todo.innerHTML = displayMessage;
        });
    } else {
        todo.innerHTML = '';
    }
}

logOut.addEventListener('click', function() {
    helper.redirect('sign-in.html');
})

cancel.addEventListener('click', () => {tasks.clearTask(); dialog.hideModal();})


//если в нашем списке задач что-то изменяется, то мы узнаем что изменилось
todo.addEventListener('change', function(event) {
    let idInput = event.target.getAttribute('id');
    let valueLabel = todo.querySelector('[for=' + idInput + ']').innerHTML;
    
    todoList.forEach(function(item) {
        if(item.title === valueLabel) {
            item.checked = !item.checked;
            database.setUserTasks(todoList);
            localStorage.setItem('users', JSON.stringify(database.users));
        }
    });
});


