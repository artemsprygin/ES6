'use strict';

var _user;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var symbol1 = Symbol.for('name');
var symbol2 = Symbol.for('name');

// console.log(symbol1);

console.log(symbol1 === symbol2);

var password = Symbol();

var user = (_user = {
    username: 'r2d2'
}, _defineProperty(_user, password, 'c3Po'), _defineProperty(_user, 'password', 'pass'), _user);

// let password = user[Symbol.for('password')];

console.log(user.password);
console.log(Object.keys(user));
console.log(password);

console.log(Object.getOwnPropertySymbols(user));

// let obj = {
//     iterator: 0,
//     [Symbolmbol.iterator]() {}
// }