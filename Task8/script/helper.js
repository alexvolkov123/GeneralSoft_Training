let helper = (function() {

    return {
        redirect: (address) => {
            document.location.href = address;
        },
        distribution: (event) => {
            event.preventDefault();
            if(document.querySelector('#username') == null) {
                let email = document.querySelector("#email").value;
                let password = document.querySelector("#password").value;

                if (validateEmail(email) && validatePassword(password)) {
                    if(database.verification(email, password)) {
                        helper.redirect('Dashboard.html');
                    } else {
                        dialog.showError();
                    }
                } else {
                    dialog.showError(email, password);
                }
            } else {
                let name = document.querySelector("#username").value;
                let email = document.querySelector("#email").value;
                let password = document.querySelector("#password").value;

                if (validateUserName(name) && validateEmail(email) && validatePassword(password)) {
                    database.addUser(name, email, password);
                } else {
                    dialog.showError(email, password, name);
                }
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