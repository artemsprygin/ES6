function greet(name) {
    console.log(`Hello ${name}`.toUpperCase());
}

// greet('Bill');

function createEmail(to,from,sub,message) {
    console.log(`
    To: ${to}
    From: ${from}
    Subject: ${sub}
    Message: ${message}
    `);
}

createEmail('test@me.com','another@me.com','hello','world!')

function add(a,b) {
    console.log(`${a} + ${b} = ${parseInt(a)+parseInt(b)}`);
}

add('5','7');

let name="Bill"

console.log(upperName`Hello ${name}`);

function upperName(literals,...values) {
    // console.log(literals,value);
    return literals[0] + values;
}