class Tasks {
    constructor() {

    }

    editTask(index) {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');

        title.innerHTML = database.user.tasks[index].title;
        description.innerHTML = database.user.tasks[index].description;
        
        modal.style.display = "block";


    }

    deleteTask() {

    }

    showTask() {

    }
}