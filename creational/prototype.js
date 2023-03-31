// Prototype is Design pattern that used for cloning object using minimum resources and modify new object.

class Tesla {
    constructor(model, price, speed) {
        this.model = model;
        this.price = price;
        this.speed = speed;
    }

    reduce() {
        return new Tesla(this.model, this.price, this.speed);
    }
}

const ModelS = new Tesla('model S', '60000$', 350);
const ModifyTesla = ModelS.reduce();
ModifyTesla.autopilot = true;

console.log(ModelS);
console.log(ModifyTesla);