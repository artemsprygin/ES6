'use strict';

// function add(x,y) {
//     return x+y;
// }

var add = function add(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};

var _log = function _log() {
    return 'Logging';
};

var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};

var getPerson = function getPerson() {
    return { name: 'John' };
};

// (() => console.log('IIFE'))();

// console.log(add(2,3));
// console.log(square(9));
// console.log(giveMeAnswer());
// console.log(_log());
// console.log(multiply(2,3));
// console.log(getPerson());

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;

numbers.forEach(function (num) {
    return sum += num;
});

var squared = numbers.map(function (n) {
    return n * n;
});

// console.log(squared);

var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            console.log('Hello my name is ' + _this.name);
            console.log(_this);
        }, 2000);
    }

    // console.log(person.greet());

};var Task = function Task() {
    console.log('CREATING TASK...');
};

// let task = new Task();