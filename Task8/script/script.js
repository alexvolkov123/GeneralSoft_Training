const saveButton = document.querySelector('#save');
const modal = document.querySelector('.modal');

const addButton = document.querySelector('.dashboard__add');
const todo = document.querySelector('.dashboard__todoList');
const logOut = document.querySelector('.header__button');

let todoList = [];

const greeting = document.querySelector('.dashboard__greeting');
greeting.innerHTML = `Welcome, ${database.users[database.getUserId()].userName}, here are your tasks`;

if(database.getUserTasks() !== null) {
    todoList = database.getUserTasks();
    displayMessages();
} else {
    todoList = [];
}

addButton.addEventListener('click', function(){
    modal.style.display = "block";
});

saveButton.addEventListener('click', addNewTask);

function addNewTask() {

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;

    if(database.verificateTaskTitle(title)) {
        let newTask = {
            title: title,
            description: description,
            checked: false,
        };

        todoList.push(newTask);
        database.setUserTasks(todoList);
        localStorage.setItem('users', JSON.stringify(database.users));
        displayMessages();
        modal.style.display = 'none';
    } else {
        console.log('Error, task is exist');
        modal.style.display = 'none';
    }
}

function displayMessages() {
    let displayMessage = '';
    todoList.forEach(function(item, i) {
        displayMessage += `
        <li class="dashboard__task">
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}'>${item.title}</label>
            <div class="dashboard__icons">
                <div class="dashboard__icon pencil" id="edit_${i}" ><img src="./img/pencil.png"></img></div>
                <div class="dashboard__icon" id="backet_${i}" ><img src="./img/backet.png"></img></div>
            </div>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}

logOut.addEventListener('click', function() {
    helper.redirect('sign-in.html');
})


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