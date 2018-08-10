let xmen = ['Cyclops','Wolverine','Rogue'];

// console.info('for')
// for (let index=0;index<xmen.length;index++) {
//     console.log(xmen[index]);
// }

// console.info('for...in')
// for (let index in xmen) {
//     console.log(xmen[index]);
// }

// console.info('for...of')
// for (let index of xmen) {
//     console.log(index);
// }

// console.info('forEach')
// xmen.forEach(elem => console.log(elem))

let iterator = xmen[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

let next = iterator.next();


// while (!next.done) {
//     console.log(next.value);
//     next  = iterator.next();
// }

// let idGenerator = {
//     [Symbol.iterator]() {
//         let id=1;
//         return {
//             next() {
//                 let value = id > 100 ? undefined : id++;
//                 let done = !value;
//             return {value, done};
//         }
//         };
//     }
// };

// for (let id of idGenerator) {
//     console.log(id);
//     if (id>100) {
//         break;
//     }
    
// }

// let RandomGenerator = {
//     generate() {
//         return this[Symbol.iterator]();
//     },
//     [Symbol.iterator]() {
//         let count=0;
//         return {
//             next() {
//                 let value = Math.ceil(Math.random()*100);
//                 let done = count > 9;
//                 count += 1;
//                 return {value, done};
//         }
//         };
//     }
// };

// let random = RandomGenerator.generate();
// console.log(random.next().value);

class ArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }
    next() {
        let result = { value: 'undefined', done: true};
        
        if (this.index < array.length) {
            result.value = array[this.index];
            result.done = false;
            this.index += 1;
        }
    
        return result;
    }

}

class TaskList {
    constructor() {
        this.tasks=[];
    }

    addTasks(...tasks) {
            this.tasks = this.tasks.concat(tasks);
    }
        [Symbol.iterator]() {
            return new ArrayIterator(this.tasks);
        }
}

let tasklist = new TaskList();
tasklist.addTasks('z','a','s');

for (let task of tasklist.tasks.sort()) {
    console.log(task);
}