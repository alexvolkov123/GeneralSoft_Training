class Tasks {
    constructor() {
        this.tasks = database.user.tasks;
    }

    addNewTask() {
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
            dialog.hideModal();
        } else {
            console.log('Error, task is exist');
            dialog.hideModal();
        }
    }

    loadTask(id) {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const button = document.querySelector('.modal__button');

        let elem = document.getElementById(id);
        let parentElem = elem.parentElement.parentElement;
        
        title.innerHTML = database.user.tasks[parentElem.getAttribute('id')].title;
        description.innerHTML   = database.user.tasks[parentElem.getAttribute('id')].description;

        button.setAttribute('id', 'edit');
        button.innerHTML = 'Edit';
    }

    editTask(id) {

        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const button = document.querySelector('.modal__button');

        let elem = document.getElementById(id);
        let parentId = elem.parentElement.parentElement.getAttribute('id');
    
        if(database.verificateTaskTitle(title)) {
            
            todoList[parentId].title = title;
            todoList[parentId].description = description;
            database.setUserTasks(todoList);
            localStorage.setItem('users', JSON.stringify(database.users));
            displayMessages();
            button.setAttribute('id', 'save');
            button.innerHTML = 'Save';
            dialog.hideModal();
        } else {
            console.log('Error, task is exist');
        }
    }
    deleteTask() {

    }

    showTask() {

    }
}