class Student{
    constructor(name, age){
        this.name = name;
        this.age=age;
    }

    greeting(){
        return `Hello there ${this.name}`;
    }

    getAge(){
        return this.age;
    }

    static getClass(){
        return 'Student class';
    }
}

const stud = new Student('Gigi',26);

console.log(stud.greeting());

console.log(stud.getAge());

console.log(Student.getClass());

