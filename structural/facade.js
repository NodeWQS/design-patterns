// Facade is design patten that used for hiding hard proccess.

class CPU {
  constructor(params) {
    for (const key in params) {
        this[key] = params[key];
    }
  }
}

class Memory {
  constructor(params) {
    for (const key in params) {
        this[key] = params[key];
    }
  }
}

class NoteBook {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  create(cpu, memory) {
    this.cpu = new CPU(cpu);
    this.memory = new Memory(memory);
    return this;
  }
}

const lenovo = new NoteBook("Lenovo", "ideapad l3").create({
  yadro: 4,
  brand: "Intel",
  type: 'I7 Core',
}, {
    type: 'SSD',
    size: '256gb'
});


console.log(lenovo);