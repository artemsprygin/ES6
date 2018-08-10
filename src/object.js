let firstname = 'Bill';
let lastname = 'Gates';
email = 'billgates@microsoft.com';

let person = {
   firstname,
   lastname,
   email,
   sayHello: function( ) {
       console.log(`Hi, my name is ${firstname} ${lastname}`)
   },
   get fullname () {
    return this.firstname + ' ' + this.lastname;
   },
   set fullname (value) {
       this.firstname = value.split(' ')[0];
       this.lastname = value.split(' ')[1];
   }
};

// Object.defineProperty(person,'fullname', {
//     get: function() {
//         return this.firstname + ' ' + this.lastname;
//     },
//     set: function(value) {
//         this.firstname = value;
//     }
// });

console.log(person);
// person.sayHello()

// let property = 'firstname';
// console.log(person[property]);

// person = {
//     [property]: 'Bill'
// };

// function createCar(property, value) {
//     return {[property]:value,
//     [property.toUpperCase()]:value,
//     ['_'+property]:value}
// };

// console.log(createCar('vin',1));
