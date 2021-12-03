let helper = (function() {

    return {
        redirect: (address) => {
            document.location.href = address;
        },
        distribution: (event) => {
            event.preventDefault();
            if(document.querySelector('#username') == null) {
                onAuthorization();
            } else {
                onRegistation();
            }
        },
        selectStatus: (id) => {
            switch(id) {
                case "All":   
                    todoList = database.getUserTasks(); 
                    displayMessages();
                    break;
                case "Dones":   
                    const searchSymbols = document.querySelector('#searching');
                    if (searchSymbols.value != "") {
                        todoList = database.getUserTasks(); 
                        tasks.searchForDones();
                    } else {
                        tasks.searchForDones();
                    }
                    break;
                case "In progress":   
                    todoList = database.getUserTasks(); 
                    tasks.searchForProgress();
                    break;
            }
        },
        selectColor: (color) => {
            switch(color) {
                case "Pink":   
                    tasks.changeColorTheme('#f564fe');
                    break;
                case "Dark":   
                    tasks.changeColorTheme('#555');
                    break;
                case "Violet":   
                    tasks.changeColorTheme('#6564fe');
                    break;
                case "Chrome":   
                    tasks.changeColorTheme('#aaf400')
                    break;
            }
        } 
        
    }
})();