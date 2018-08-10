let symbol1 = Symbol.for('name');
let symbol2 = Symbol.for('name');

// console.log(symbol1);

console.log(symbol1 === symbol2);

let password = Symbol();

let user = {
    username: 'r2d2',
    [password]: 'c3Po',
    password: 'pass'
};

// let password = user[Symbol.for('password')];

console.log(user.password);
console.log(Object.keys(user));
console.log(password);

console.log(Object.getOwnPropertySymbols(user));

// let obj = {
//     iterator: 0,
//     [Symbolmbol.iterator]() {}
// }