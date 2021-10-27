const addMessage = document.querySelector('.message');
const addButton = document.querySelector('.add');
const todo = document.querySelector('.todo');

let todoList = [];

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

const greeting = document.querySelector('.dashboard__greeting');
greeting.innerHTML = `Welcome, ${database.users[id].userName}, here are your tasks`;

addButton.addEventListener('click', function(){

    let newTask = {
        title: addMessage.value,
        checked: false,
        important: false,
    };

    todoList.push(newTask);
    displayMessages();
    localStorage.setItem(`${user.email}`, JSON.stringify(todoList));
});

function displayMessages(){
    let displayMessage = '';
    todoList.forEach(function(item, i) {
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}'>${item.title}</label>
            <p class=""></p>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}



//если в нашем списке задач что-то изменяется, то мы узнаем что изменилось
todo.addEventListener('change', function(event) {
    let idInput = event.target.getAttribute('id');
    let valueLabel = todo.querySelector('[for=' + idInput + ']').innerHTML;
    
    todoList.forEach(function(item) {
        if(item.title === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});