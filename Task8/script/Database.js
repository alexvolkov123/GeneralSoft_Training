class Database {
    constructor() {
        this.users = this.getUsers();
    }

    getUsers() {
        if(localStorage.getItem('users') !== null) {
            this.users = JSON.parse(localStorage.getItem('users'));
        } else {
            return [];
        }
        return this.users;
    }

    addUser(name, email, pass) {
        if(!this.includes(email)) {
            let newUser = {
                userName: name,
                email: email,
                password: pass,
                tasks: [],
                theme: 'Dark',
            };
            this.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(this.users));

            helper.redirect('Dashboard.html');
            //сообщение об успешности входа
        } else {
            console.log('Error, user is exist');
            helper.redirect('sign-in.html');
        }
    }

    includes(email) {
        for(let i = 0 ; i < this.users.length ; i++) {
            if(this.users[i].email == email) {
                return true;
            }
        }
        return false;
    }

    verification(pass) {
        for(let i = 0 ; i < this.users.length ; i++) {
            if(this.users[i].password == pass) {
                localStorage.setItem('userId', i);
                return true;
            }
        }
        return false;
    }
}