class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Creating task');
    }

    complete() {
        this.done = true;
        console.log(`Task ${this.title} done`);
        
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return 'Task';
    }

}

Task.count = 0;


class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this._parent = parent;
        console.log('Creating subtask');
        
    }

    complete() {
        super.complete;
        console.log(`Subtask ${this.title} done`);
        
    }
}

let task = new Task('Do smth');
let subtask = new SubTask('Learnign es6', task);

console.log(SubTask.getDefaultTitle());
console.log(Task.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

// console.log(subtask instanceof SubTask);
// console.log(task instanceof Task);
