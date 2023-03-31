// Proxy is pattern that used for getting access to another class.

class Access {
    open() {
        console.log('door opened.');
    }
    
    close() {
        console.log('door closed.');
    }
}


class Sign {
    constructor() {
        this.access = new Access();
        this.login = false;
    }

    login(code) {
        if (code === '121') {
            this.access.open();
            this.login = true;
        }else {
            console.log('password not correct.');
        }
    }

    logout() {
        this.login = false;
        this.access.close();
    }
}

const Auth = new Sign();
Auth.login('121');
Auth.logout();