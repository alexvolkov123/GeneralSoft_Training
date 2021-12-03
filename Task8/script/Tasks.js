class Tasks {

    addTask() {
        const text = document.querySelector('.modal__text');
        const button = document.querySelector('.modal__button');
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');

        title.value = "";
        description.value = "";
        button.setAttribute('id', 'save');
        button.innerHTML = 'Save';
        text.innerHTML = 'Add this task';
    }

    saveTask() {
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
    
        if(database.verificateTaskTitle(title)) {
            if(title != '' && description != '') {
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
                console.log('You cannot create a task with an empty field');
                dialog.hideModal();
            }
        } else {
            console.log('Error, task is exist');
            dialog.hideModal();
        }
        
        this.clearTask();
    }

    loadTask() {
        const text = document.querySelector('.modal__text');
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const button = document.querySelector('.modal__button');

        let elem = document.getElementById(elementChangeId);
        let parentId= elem.parentElement.parentElement.getAttribute('id');
        
        title.value = database.user.tasks[parentId].title;
        description.value = database.user.tasks[parentId].description;

        button.setAttribute('id', 'edit');
        button.innerHTML = 'Edit';
        text.innerHTML = 'Edit this task';
    }

    editTask() {
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;

        let elem = document.getElementById(elementChangeId);
        let parentId = elem.parentElement.parentElement.getAttribute('id');

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

        title.value = database.user.tasks[elementChangeId].title;
        description.value = database.user.tasks[elementChangeId].description;

        title.setAttribute('readonly', 'readonly');
        description.setAttribute('readonly', 'readonly');

        button.setAttribute('id', 'out');
        button.innerHTML = 'Out';
        text.innerHTML = 'Description of this task';
    }

    outTask() {
        this.clearTask();
        dialog.hideModal();
    }

    clearTask() {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const text = document.querySelector('.modal__text');
        const button = document.querySelector('.modal__button');
        text.innerHTML = "";
        button.innerHTML = "";
        title.value = "";
        description.value = "";
        title.removeAttribute('readonly');
        description.removeAttribute('readonly');
    }

    searchTasks(sorting) {

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

    searchForDones() {
        todoList.forEach(function(item) {
            if(item.checked == true) {
                newTodoList.push(item);
            }
        });
        todoList = newTodoList;
        displayMessages();
    }

    searchForProgress() {
        let newTodoList = [];
        todoList.forEach(function(item) {
            if(item.checked == false) {
                newTodoList.push(item);
            }
        });
        todoList = newTodoList;
        displayMessages();
    }

    searchForTextAndDones() {
        let newTodoList = [];
        todoList.forEach(function(item) {
            if(item.checked == true) {
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