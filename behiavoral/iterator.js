// Iterator is design pattern that used for get Info from object successively.

class MyIterator {
    constructor(data) {
        this.index  = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

const my = new MyIterator([1, 2, 3]);
for (const val of my) {
    console.log(val);
}