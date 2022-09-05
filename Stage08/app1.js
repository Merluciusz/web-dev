function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}
// add a prototype method
Person.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.lastName}`
}

const person = new Person('jack', 'slack');
console.log(person.greeting());


function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// inherit person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

Customer.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.lastName} wellcome`
}


const customer = new Customer('jane', 'dove', '088088', '304');
console.log(customer.membership);
//cstomer greeting after the prototype
console.log(customer.greeting());


//console.log(customer.greeting());