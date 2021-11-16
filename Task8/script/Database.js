class Database {
    constructor() {
        this.users = this.getUsers();
        this.userId = this.getUserId();
        this.user = this.users[this.userId];
    }

    getUsers() {
        if(localStorage.getItem('users') !== null) {
            return JSON.parse(localStorage.getItem('users'));
        } else {
            return [];
        }
    }

    getUserId() {
        if(localStorage.getItem('userId') !== null) {
            this.userId = localStorage.getItem('userId');
        } else {
            return -1;
        }
        return this.userId;
    }

    addUser(name, email, pass) {
        if(!this.includes(email)) {
            let newUser = {
                userName: name,
                email: email,
                password: pass,
                tasks: [],
                theme: '#444',
            };
            this.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(this.users));
            localStorage.setItem('userId', JSON.stringify(this.users.length -1));
            helper.redirect('Dashboard.html');

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

    verification(email, pass) {
        for(let i = 0 ; i < this.users.length ; i++) {
            if(this.users[i].email == email && this.users[i].password == pass && this.users !== []) {
                localStorage.setItem('userId', i);
                return true;
            }
        }
        return false;
    }

    getUserTasks() {
        return this.user.tasks;
    }

    setUserTasks(array) {
        this.user.tasks = array;

    }

    verificateTaskTitle(name) {
        for(let i = 0 ; i < this.user.tasks.length ; i++) {
            if(this.user.tasks !== []) {
                if(this.user.tasks[i].title == name) {
                    return false;
                }
            } 
        }
        return true;
    }
}