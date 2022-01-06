const modalButton = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
let elementChangeId = -1;
let tasks = new Tasks();

const addButton = document.querySelector('.dashboard__add');

const todo = document.querySelector('.dashboard__todoList');
const logOut = document.querySelector('.header__button');
const cancel = document.querySelector('.modal__cancel');
const selectStatus = document.querySelector('#status');
const searchText = document.querySelector('#searching');
const selectColor = document.querySelector('#theme');

let todoList = [];


const greeting = document.querySelector('.dashboard__greeting');
greeting.innerHTML = `Welcome, ${database.users[database.getUserId()].userName}, here are your tasks <br> if you don't see your tasks, just add them`;

if(database.getUserTasks() !== null) {
    todoList = database.getUserTasks();
    tasks.displayMessages();
} else {
    todoList = [];
}

tasks.changeColorTheme(database.user.theme)
selectColor.value = tasks.setColorTheme(database.user.theme);

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

logOut.addEventListener('click', function() {
    helper.redirect('sign-in.html');
})
cancel.addEventListener('click', () => {tasks.clearTask(); dialog.hideModal();})
searchText.addEventListener('input', (event) => tasks.searchTasks(`${event.target.value}`))
selectStatus.addEventListener('change', (event) => {
    if(event.target.value == 'All') {
        todoList = database.getUserTasks();
        searchText.value = '';
        tasks.displayMessages();
    };
    if(event.target.value == 'Dones') tasks.searchFor(true);
    if(event.target.value == 'In progress') tasks.searchFor(false);
});
selectColor.addEventListener('change', (event) => helper.selectColor(event.target.value))


const list = document.querySelectorAll('.dashboard__task');
todo.addEventListener('click', (event) => {
    list.forEach((li) => {
        if(li === event.target) {
            dialog.showModalDescription();
        }
    })
});

//если в нашем списке задач что-то изменяется, то мы узнаем что изменилось
list.forEach((li) => li.addEventListener('change', (event) => {
    event.stopPropagation();
    let idInput = event.target.getAttribute('id');
    let valueLabel = event.target.parentElement.querySelector('[for=' + idInput + ']').innerHTML;
    
    todoList.forEach(function(item) {
        if(item.title == valueLabel) {
            item.checked = !item.checked;
            database.setUserTasks(todoList);
            localStorage.setItem('users', JSON.stringify(database.users));
        }
    });
}))
