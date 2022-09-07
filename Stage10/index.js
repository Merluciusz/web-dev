const sayHello = function(){
  console.log('Hello All');
}

const sayHy = () => console.log('Hy All');

const saysHy = () =>({fname:'john',says:'hy there'});

const sayWhat = (word) => console.log(`he says ${word}`);

sayHello();
sayHy();
person = saysHy();
console.log(`Mr ${person.fname} says ${person.says}`);
sayWhat('f#ck');

const users = ['john','jack','joe','jill'];

const greet = users.map((user) => `hello ${user}`);
greet.forEach(user => console.log(user));