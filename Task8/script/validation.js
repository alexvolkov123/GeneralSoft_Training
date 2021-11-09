const button = document.querySelector('#button');

function errors(email, password, login) {

    lowerCaseLatters = /(?=.*[a-z])/g;
    upperCaseLatters = /(?=.*[A-Z])/g;
    numbers = /(?=.*[0-9])/g;

    if(login == '' || password == '' || email == '' && login !== null) {
        return 'field is empty';
    } else { 
        if(validateEmail(email) == false) {
            return 'Incorrect email address';
        } else { 
            if(lowerCaseLatters.test(password) == false) {
                return 'There is no lower case in the password';
            } else {
                if(upperCaseLatters.test(password) == false) {
                    return 'There is no upper case in the password';
                } else { 
                    if(numbers.test(password) == false) {
                        return 'There is a digit missing in the password';
                    }
                }
            }
        }
    }

    if(password == '' || email == '') {
        return 'field is empty';
    } else { 
        if(validateEmail(email) == false) {
            return 'Incorrect email address';
        } else { 
            if(lowerCaseLatters.test(password) == false) {
                return 'There is no lower case in the password';
            } else {
                if(upperCaseLatters.test(password) == false) {
                    return 'There is no upper case in the password';
                } else { 
                    if(numbers.test(password) == false) {
                        return 'There is a digit missing in the password';
                    }
                }
            }
        }
    }
    
    return;
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
    let pattern = /(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{3,}/g;
    return pattern.test(name);
}

button.addEventListener('click', helper.distribution);