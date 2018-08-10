// function add(x,y) {
//     return x+y;
// }

let add = (x,y) => x + y;

let square = (x) =>  x * x;

let giveMeAnswer = () => 42;

let _log = () => 'Logging'

let multiply = (x,y) => {
    let result = x*y; 
    return result;
}

let getPerson = () => ({ name:'John' });

// (() => console.log('IIFE'))();

// console.log(add(2,3));
// console.log(square(9));
// console.log(giveMeAnswer());
// console.log(_log());
// console.log(multiply(2,3));
// console.log(getPerson());

let numbers = [1,2,3,4,5,6,7,8,9];

let sum = 0;

numbers.forEach(((num) => sum+=num))

let squared = numbers.map((n) => n*n)

// console.log(squared);

let person = {
    name: 'Bob',
    greet: function () {
        setTimeout(() => {
            console.log(`Hello my name is ${this.name}`);
            console.log(this);
        },2000)
    }
}

// console.log(person.greet());

let Task = () => {console.log('CREATING TASK...')}

// let task = new Task();

