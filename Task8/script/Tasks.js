class Tasks {

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

    loadTask() {
        const text = document.querySelector('.modal__text');
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const button = document.querySelector('.modal__button');

        let elem = document.getElementById(elementChangeId);
        let parentElem = elem.parentElement.parentElement;
        
        title.innerHTML = database.user.tasks[parentElem.getAttribute('id')].title;
        description.innerHTML   = database.user.tasks[parentElem.getAttribute('id')].description;

        button.setAttribute('id', 'edit');
        button.innerHTML = 'Edit';
        text.innerHTML = 'Edit this task';
    }

    editTask() {
        const text = document.querySelector('.modal__text');
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const button = document.querySelector('.modal__button');

        let elem = document.getElementById(elementChangeId);
        let parentId = elem.parentElement.parentElement.getAttribute('id');

        text.innerHTML = 'Add new task';
        button.setAttribute('id', 'save');
        button.innerHTML = 'Save';

        if(database.verificateTaskTitle(title)) {
            
            todoList[parentId].title = title;
            todoList[parentId].description = description;
            database.setUserTasks(todoList);
            localStorage.setItem('users', JSON.stringify(database.users));
            displayMessages();
            dialog.hideModal();

        } else {

            todoList[parentId].description = description;
            database.setUserTasks(todoList);
            localStorage.setItem('users', JSON.stringify(database.users));
            displayMessages();
            dialog.hideModal();
        }
    }
    
    deleteTask() {
        if(todoList.length > 1) {
            let elem = document.getElementById(elementChangeId);
            let parentId = elem.parentElement.parentElement.getAttribute('id');

            todoList.splice(parentId, 1);
            
            database.setUserTasks(todoList);
            localStorage.setItem('users', JSON.stringify(database.users));
            displayMessages();
            dialog.hideModalDelete();
        } else {
            todoList = [];

            database.setUserTasks(todoList);
            localStorage.setItem('users', JSON.stringify(database.users));
            displayMessages();
            dialog.hideModalDelete();
        }
    }

    showTask() {
        const text = document.querySelector('.modal__text');
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const button = document.querySelector('.modal__button'); 

        title.innerHTML = database.user.tasks[elementChangeId].title;
        description.innerHTML = database.user.tasks[elementChangeId].description;

        title.setAttribute('readonly', 'readonly');
        description.setAttribute('readonly', 'readonly');

        button.setAttribute('id', 'out');
        button.innerHTML = 'Out';
        text.innerHTML = 'Description of this task';
    }

    outTask() {
        const text = document.querySelector('.modal__text');
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const button = document.querySelector('.modal__button'); 
        dialog.hideModal();

        title.innerHTML = "";
        description.innerHTML = "";

        title.removeAttribute('readonly');
        description.removeAttribute('readonly');

        button.setAttribute('id', 'save');
        button.innerHTML = 'Save';
        text.innerHTML = 'Add new task';
    }

    sortTasks(sorting) {

        if(sorting.value !== "") {
            let newTodoList = [];
            todoList.forEach(function(item) {
                if(item.title.includes(sorting.value)) {
                    newTodoList.push(item);
                }
            });
            todoList = newTodoList;
            displayMessages();
        } else {
            todoList = database.getUserTasks();
            displayMessages();
        }
    }

    sortForDones() {
        let newTodoList = [];
        todoList.forEach(function(item) {
            if(item.checked == true) {
                newTodoList.push(item);
            }
        });
        todoList = newTodoList;
        displayMessages();
    }

    sortForProgress() {
        let newTodoList = [];
        todoList.forEach(function(item) {
            if(item.checked == false) {
                newTodoList.push(item);
            }
        });
        todoList = newTodoList;
        displayMessages();
    }

    changeColorTheme(color) {
        document.documentElement.style.setProperty('--theme', color);
        database.user.theme = color;
        localStorage.setItem('users', JSON.stringify(database.users));
    }
}