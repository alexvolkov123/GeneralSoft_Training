function onRegistation() {
    let name = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (validateUserName(name) && validateEmail(email) && validatePassword(password)) {
        database.addUser(name, email, password);
    } else {
        alert(errors(email, password, name));
    }
}

function onAuthorization() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (validateEmail(email) && validatePassword(password)) {
        if(database.includes(email) && database.verification(password)) {
            helper.redirect('Dashboard.html');
            database.changeName("name");
            
        }
    } else {
        alert(errors(email, password));
    }
}