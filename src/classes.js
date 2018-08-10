class  Task {

    constructor(title='') 
    {
        this.title = title;
        this._done = false;
        Task.count+=1;
        console.log('Creating tasks...');
        
    }

    get done() {
       return this._done === true ? 'Done' : 'Not done'
    }

    set done(value) {
    if (value !== undefined && typeof value === 'boolean' ) {
         this._done = value; }   
    else {
        console.error('Not boolean');
    }
    }

    complete() {
        this._done = true;
        console.log(`Task ${this.title} done`);   
    }

    static getDefaultTitle() {
        return 'Task'
    }
}

Task.count = 0;

let task = new Task('Make smth important');
console.log(task.done,task._done);
task.complete();
console.log(task.done,task._done);

// let task2 = new Task('Another title')
// let task3 = new Task()

// console.log(typeof task);
// console.log(task instanceof Task);
// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);



// console.log(Task.count);

// task2.compelte();