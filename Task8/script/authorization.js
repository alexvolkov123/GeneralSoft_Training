function onRegistation() {
    let name = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (validateUserName(name) && validateEmail(email) && validatePassword(password)) {
        database.addUser(name, email, password);
    } else {
        dialog.showError(email, password, name);
    }
}

function onAuthorization() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (validateEmail(email) && validatePassword(password)) {
        if(database.verification(email, password)) {
            helper.redirect('Dashboard.html');
        } else {
            dialog.showError(email, password, name);
        }
    } else {
        dialog.showErrorVerificate();
    }
}