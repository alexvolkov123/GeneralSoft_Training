const button = document.querySelector('#validate');


function validateEmail(email) {
    let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern .test(email);
}

function validatePassword(pass) {
    let pattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return pattern.test(pass);
}

function validate() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (validateEmail(email) && validatePassword(password)) {
        console.log('Ураа, правильно');
    } else {
        console.log('Пробуй ещё');
    }
    return false;
}

button.addEventListener('click', validate);