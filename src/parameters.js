function greet(greeting='Hello',name='friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('hi');

// function sum() {
//     var sum=0;
//     Array.prototype.forEach.call(arguments,function(value) {
//         sum+=value
//     });
//     console.log(sum);
// } 

// function sum(...values) {
//     let sum = 0;
//     values.forEach(function(value) {
//         sum+=value;
//     });
//     console.log(sum);
// }

function sum(...values) {
    console.log(values.reduce(function(prevValue,currentValue) {
        return prevValue + currentValue;
    }));
}

sum(2,4,5,2,2)