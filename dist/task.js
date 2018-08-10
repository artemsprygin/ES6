'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function Task() {

// }

// let Task = new function Task() {

// }

// class Task {
//     constructor() {
//         console.log('Creating task...');
//     }
// }

var Task = function Task() {
    _classCallCheck(this, Task);

    console.log('Creating task...');
};

var SubTask = function (_Task) {
    _inherits(SubTask, _Task);

    function SubTask() {
        _classCallCheck(this, SubTask);

        var _this = _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this));

        console.log('Creating subtask...');
        return _this;
    }

    return SubTask;
}(Task);

var task = new Task();
var subtask = new SubTask();

console.dir(task);
console.dir(subtask);