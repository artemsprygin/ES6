// let languages = ['js','py','java','ruby'];

// let js = languages[0];
// let py = languages[1];
// let java = languages[2];
// let ruby = languages[3];

let [js,py,java,ruby] = ['js','py','java','ruby'];

// console.log(js,py,java,ruby);


// scorces = [3,4,[5,6]];

// let [low, mid, [high,higher]] = scorces;

// console.log(low,mid, high, higher);

function compScore([low,mid]) {
    console.log(low,mid);
}

compScore([3,4]);

function getScores() {
    return [3,4,5];
}

let scorces = getScores();
console.log(scorces);
let [low,mid,high] = getScores();

console.log(low,mid, high);

let yes = 'Yes'; 
let no = 'No';

[yes,no] = [no,yes]

console.log(yes,no);
