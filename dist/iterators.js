'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var xmen = ['Cyclops', 'Wolverine', 'Rogue'];

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

var iterator = xmen[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

var next = iterator.next();

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

var ArrayIterator = function () {
    function ArrayIterator(array) {
        _classCallCheck(this, ArrayIterator);

        this.array = array;
        this.index = 0;
    }

    _createClass(ArrayIterator, [{
        key: 'next',
        value: function next() {
            var result = { value: 'undefined', done: true };

            if (this.index < array.length) {
                result.value = array[this.index];
                result.done = false;
                this.index += 1;
            }

            return result;
        }
    }]);

    return ArrayIterator;
}();

var TaskList = function () {
    function TaskList() {
        _classCallCheck(this, TaskList);

        this.tasks = [];
    }

    _createClass(TaskList, [{
        key: 'addTasks',
        value: function addTasks() {
            for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
                tasks[_key] = arguments[_key];
            }

            this.tasks = this.tasks.concat(tasks);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            return new ArrayIterator(this.tasks);
        }
    }]);

    return TaskList;
}();

var tasklist = new TaskList();
tasklist.addTasks('z', 'a', 's');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = tasklist.tasks.sort()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var task = _step.value;

        console.log(task);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}