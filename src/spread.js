let staticlanguages = ['C','Java','C++'];
let dynamiclanguages = ['JS','Ruby','PHP'];

let languages = [...staticlanguages,'C#', ...dynamiclanguages,'Python'];

console.log(languages);

function add(x,y,z) {
    console.log(x+y+z);
}

let numbers = [1,2,3];

add(...numbers);
