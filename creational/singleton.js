// Singleton is design patten that used when we want to have 1 instance of class.

class Database {
    constructor(type, host, port, db) {
        if (typeof Database.instance === 'object') return Database.instance   
    
        this.type = type;
        this.host = host;
        this.port  = port;
        this.db = db;
        Database.instance = this;
    }

    init() {
        return 'you are connected.'
    }
}

const db1 = new Database('mysql', 'localhost', 4521, 'Server');
const db2 = new Database('postgres', 'localhost', 1221, 'App');

console.log(db1);
console.log(db2);