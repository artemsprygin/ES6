'use strict';

var person = {
    firstname: 'John',
    lastname: 'Doe',
    test: ''
};

var user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: {
            name: 'John Doe'
        },
        twitter: 'jde'
    }
};

var first = user.firstname,
    last = user.lastname,
    fb = user.social.facebook.name,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;
// console.log(first,last,fb ,age);

function post(url, _ref) {
    var _ref$data = _ref.data,
        firstname = _ref$data.firstname,
        lastname = _ref$data.lastname,
        cache = _ref.cache;

    console.log(firstname, lastname, cache);
}

var result = post('api/users', { data: user, cache: false });

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
    };
}

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastname = _getUserInfo.lastname,
    tw = _getUserInfo.social.twitter;

console.log(firstname, lastname, tw);