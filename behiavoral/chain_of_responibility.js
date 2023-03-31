// chain of responibility is design patten that used for doing operation many times

class FetchData {
    constructor(url) {
        this.url = url;
        this.data = null;
    }

    request() {
        this.data = { name: "Mesrop", lastname: "Araqelyan" };
        return this;
    }

    getData() {
        return this.data;
    }
}

const fetch = new FetchData('https://google.com').request();

console.log(fetch.getData());