// Adapater is design pattern that used for adapting objects.

class Auto {
    constructor(engine) {
        this.engine = engine;
    }

    start() {
        this.engine.simpleStart();
    }
}

class V4 {
    simpleStart() {
        console.log('v4 started');
    }
}

class V8 {
    hardStart() {
        setTimeout(() => {
            console.log('v8 started');
        }, 1000);
    }
}

class V4toV8 {
    constructor(engine) {
        this.engine = engine;
    }
    simpleStart() {
        this.engine.hardStart();
    }
}

const bmw = new Auto(new V4());
bmw.engine = new V4toV8(new V8());

bmw.start()