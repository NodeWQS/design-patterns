// Constructor is design pattern that used for creating objects.

class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    getUrl() {
        return `http://${this.ip}:${this.port}`;
    }
}


const example = new Server('12.21.22.112', 80);
console.log(example.getUrl());