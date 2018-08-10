'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('Hello ' + name).toUpperCase());
}

// greet('Bill');

function createEmail(to, from, sub, message) {
    console.log('\n    To: ' + to + '\n    From: ' + from + '\n    Subject: ' + sub + '\n    Message: ' + message + '\n    ');
}

createEmail('test@me.com', 'another@me.com', 'hello', 'world!');

function add(a, b) {
    console.log(a + ' + ' + b + ' = ' + (parseInt(a) + parseInt(b)));
}

add('5', '7');

var name = "Bill";

console.log(upperName(_templateObject, name));

function upperName(literals) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    // console.log(literals,value);
    return literals[0] + values;
}