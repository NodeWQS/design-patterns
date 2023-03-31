// Decorator is design pattern that used for adding functional without changing source code.

class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `http://${this.ip}:${this.port}`;
    }
}

function addAws(server) {
    server.aws = true;
    server.awsLink = function () {
        return 'https://aws.com';
    }
    return server;
}

const server = addAws(new Server('22.33.44.121', 8080));
console.log(server.awsLink());