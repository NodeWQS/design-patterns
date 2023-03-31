// FlyWeight is design pattern that used for effective working with data. The example of is caching.

function factorial(n) {
    let num = 1;
    for (let index = 1; index <= n; index++) {
        num *= index;
    }
    return num;
}

function lru_cache(func) {
    this.data = [];
    return (n) => {
        const elem = this.data.find(e => e.param === n);
        if (elem) {
          return elem.value;
        }
        this.data.push({ param: n, value: func(n) });
        return func(n);
    }
}

const l = lru_cache(factorial);
console.log(l(10));
console.log(l(5));
console.log(l(10));
