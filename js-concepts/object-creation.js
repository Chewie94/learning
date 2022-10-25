function User(name, surname) {
    this.name = name
    this.surname = surname
}
const user = new User('Bob', 'Dylan');

const User2 = {
    name: 'Bob',
    surname: 'Dylan'
};

class User3 {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
}
const user3 = new User3('Bob', 'Dylan');