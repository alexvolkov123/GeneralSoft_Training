const registration = document.querySelector('#registration');

function errors(login, email, password) {

    lowerCaseLatters = /(?=.*[a-z])/g;
    upperCaseLatters = /(?=.*[A-Z])/g;
    numbers = /(?=.*[0-9])/g;

    if(login == '' || password == '' || email == '') {
        return 'field is empty';
    }
    if(validateEmail(email) == false) {
        return 'Incorrect email address';
    }
    if(lowerCaseLatters.test(password) == false) {
        return 'There is no lower case in the password';
    }
    if(upperCaseLatters.test(password) == false) {
        return 'There is no upper case in the password';
    }
    if(numbers.test(password) == false) {
        return 'There is a digit missing in the password';
    }
    return null;
}

function validateEmail(email) {
    let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

function validatePassword(pass) {
    let pattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return pattern.test(pass);
}

function validateUserName(name) {
    let pattern = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{3,}/g;
    return pattern.test(name);
}

function onRegistation() {
    let name = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (validateUserName(name) && validateEmail(email) && validatePassword(password)) {
        database.addUser(name, email, password);
    } else {
        alert(errors(name, email, password));
    }
}


registration.addEventListener('click', onRegistation);