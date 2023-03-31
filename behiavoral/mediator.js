// Mediator is design pattern that used for connecting many objects and get centrilazed interface.
let index = 0;

class User {
    constructor(name, lastname) {
        this.id = index++;
        this.name = name;
        this.lastname = lastname;
        this.messages = [];
        this.room = null;
    }
    
    sendMessage(to, message) {
        this.room.send(to, message, this.name);
    }

    recive(from, message) {
        this.messages.push({ from, message });
    }

    getMessages() {
        return this.messages;
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        user.room = this;
        this.users[user.id] = user;
    }

    send(to, message, from) {
        this.users[to].recive(from, message);
    }
}

const room1 = new ChatRoom();
const Mesrop = new User('Mesrop', 'Araqelyan');
const Vahe = new User('Vahe', 'Martirosyan');

room1.register(Mesrop);
room1.register(Vahe);

Mesrop.sendMessage(Vahe.id, 'get my money');
Vahe.sendMessage(Mesrop.id, 'yes');

console.log(Mesrop.getMessages());
console.log(Vahe.getMessages());