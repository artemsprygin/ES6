// function Task() {

// }

// let Task = new function Task() {

// }

// class Task {
//     constructor() {
//         console.log('Creating task...');
//     }
// }

let Task = class {
    constructor() {
        console.log('Creating task...');
    }
}

let SubTask = class extends Task {
    constructor() {
        super();
        console.log('Creating subtask...');
    }
}

let task = new Task();
let subtask = new SubTask();

console.dir(task);
console.dir(subtask);