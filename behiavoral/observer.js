// Observer is design pattern that used for controlling many objects in one time.

class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    desubscribe(observer) {
        this.observers = this.observers.filter(obs !== observer);
        return this;
    }
    
    fire(command, value) {
        this.observers.forEach(obs => {
          obs.update(command, value);
        });
        return this;
    }
}

class OBS {
    constructor(state) {
        this.state = state;
    }

    update(command, value) {
        switch (command) {
            case "ADD":
                this.state += value;
                break;
            case "MINUS":
                this.state -= value;
                break;
            default:
                this.state = this.state;
                break;
        }
    }
}

const o1 = new OBS(5);
const o2 = new OBS(33);
const stream = new Subject();
stream.subscribe(o1);
stream.subscribe(o2);

stream.fire("ADD", 5)

console.log(o1.state, o2.state);