let person = {
    firstname: 'John',
    lastname: 'Doe',
    test: ''
};

let user = {
    firstname: 'John', 
    lastname: 'Doe',
    social: {
        facebook: {
            name: 'John Doe'
        },
        twitter: 'jde'
    }
}

let {firstname:first, lastname:last, social: { facebook: {name:fb} }, age=25} = user;
// console.log(first,last,fb ,age);

function post(url,{data: { firstname, lastname},cache}) {
    console.log(firstname, lastname, cache);
}

let result = post('api/users', {data:user,cache:false});

function getUserInfo() {
    return {
        firstname: 'John', 
        lastname: 'Doe',
        social: {
            facebook: {
              name: 'John Doe'
        },
            twitter: 'jde'
    }
    }
}

let { firstname, lastname, social: { twitter:tw } } = getUserInfo();

console.log(firstname,lastname, tw);
