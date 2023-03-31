// factory method is design pattern that used for creating objects with help of superclass.

// class constructor
class SimpleMembership {
    constructor(name) {
        this.price = 500;
        this.name = name;
    }
}

// class constructor
class PremiumMembership {
    constructor(name) {
        this.price = 1000;
        this.name = name;
    }
}

// superclass

class MemberFactory {
    list = {
        simple: SimpleMembership,
        premium: PremiumMembership
    }

    create(type, name) {
        const Member = this.list[type] || this.list.simple;
        return (new Member(name));
    }
}

const factory = new MemberFactory();
const dataList = [
    factory.create('simple', 'Ivan'),
    factory.create('premium', 'Mesrop')
];

dataList.forEach(e => console.log(e));