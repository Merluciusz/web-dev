const getSum1 = function (x, y) {
    return x + y;
}

console.log('sum 1 ' + getSum1(5, 5));

const getSum2 = new Function('x', 'y', 'return x + y');

console.log('sum 2 ' + getSum2(25, 7));

const pers1 = new Person('John', 1970);
console.log(pers1.sayHello());
console.log(pers1.howOld());

Person.prototype.getDetails = function () {
    return `the full name is ${this.name} doe`
}// order matters

Person.prototype.surname = 'slow';

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
}
Person.prototype.isEmployeed = function () {
    return this.employeed;
}

Person.prototype.setEmployeed = function (emp) {
    this.employeed = emp;
}

console.log(pers1.getDetails());
console.log(pers1.surname);
console.log(pers1.getFullName());

console.log(pers1.isEmployeed());
pers1.setEmployeed(true);
console.log(pers1.isEmployeed());



// the full name prototype



function Person(name, yob) {
    this.name = name;
    this.age = yob;

    this.sayHello = function () {
        return `Hello ${this.name}`;
    }

    this.howOld = function () {
        return 2022 - this.age;
    }

}