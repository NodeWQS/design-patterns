// Command is design pattern that used for controlling another class simple

class MyMath {
    constructor(n) {
        this.n = n;
    }  

    factorial() {
        let sum = 1;
        for (let index = 1; index <= this.n; index++) {
            sum *= index;
        }
        return sum;
    }

    sum() {
        let sum = 0;
        for(let index = 1; index <= this.n; index++) {
            sum += index;
        }
        return sum;
    }
}

class MathCommand {
    constructor(n) {
        this.math = new MyMath(n);
    }

    do(command) {
        switch (command) {
            case "sum":
                return this.math.sum();
                break;
            case "factorial":
                return this.math.factorial();
            default:
                return "command not correct.";
                break;
        }
    }
}

const mathCommand = new MathCommand(10);
console.log(mathCommand.do("factorial"));
console.log(mathCommand.do("sum"));