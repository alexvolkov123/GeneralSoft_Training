const button = document.querySelector('#validate');

let users = [];

if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'));
}

function validateEmail(email) {
    let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern .test(email);
}

function validatePassword(pass) {
    let pattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return pattern.test(pass);
}

function validateUserName(name) {
    let pattern = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{3,}/g;
    return pattern.test(name);
}

function validate() {
    let name = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (validateUserName(name) && validateEmail(email) && validatePassword(password)) {
        isExist(name, email, password);
    } else {
        //модалька об ошибке данных
    }
}

function isExist(name, email, password) {

    if (localStorage.getItem(`${email}`) !== null) {
        //модальное окно о том, что пользователь уже существует
    } else {
        let newUser = new User (name, password, email);
        
        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem(`${email}`, JSON.stringify({}));
    }
}



button.addEventListener('click', validate);