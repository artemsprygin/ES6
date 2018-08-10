// require("babel-polyfill");
// function applyForVisa(documents) {
//     console.log('Processing...');
//     let promise = new Promise(function(resolve,reject){
//         setTimeout(function() {
//             Math.random() > .5 ? resolve({}) : reject('Dont like you')
//             let visa = {}
//         },0 )
//     })
//     return promise;
// }

// function getVisa(visa) {
//     console.info('Visa has got!');
//     return new Promise(function(resolve,reject) {
//         setTimeout(()=> resolve(visa),2000)
//     })
// }

// function bookHotel(visa) {

//     // setTimeout(function() {
//         console.log('Booking Hotel...');
//         console.log(visa);
//         return new Promise(function(resolve,reject) {
//             setTimeout(()=> resolve(visa),2000)
//         })
//     // },0)

// }

// function buyTickets(booking) {
//     // setTimeout(function() {
//         console.log('Buying tickets...')
//         console.log(booking);
//     // },0)
// }

// applyForVisa({})
//     .then(getVisa)
//     .then(bookHotel)
//     .then(buyTickets)
//     .catch(error => console.error(error))
//     // .then(() => console.log('I am here'))


// // applyForVisa({}, function(visa) {
// //     console.info('Visa has got!');
// //     BookHotel(visa, function({reservation}) {
// //         BuyTickets(reservation,function () {
// //             console.log('Yeah!')
// //         },function (){
// //             console.log('Have no ticket!')
// //         })
// //     }, function(error) {
// //         console.log(error);
// //     });
// // }, function(reason) {
// //     console.error(reason);
// // });


'use strict';

var movieList = document.getElementById('movies');

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.response);
                // console.log(json);
                // done(json.Search);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            };
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    });
}

var spiderman = getData('http://www.omdbapi.com/?apikey=730993d6&s=spider man');;
var superman = getData('http://www.omdbapi.com/?apikey=730993d6&s=superman');

spiderman.then(function (movies) {
    return movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
});
superman.then(function (movies) {
    return movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
});

// getData(`http://www.omdbapi.com/?apikey=730993d6&s=${search}`)
//     .then(movies => 
//         movies.forEach((movie) => 
//             addMovieToList(movie)))

function go(num) {
    return new Promise(function (resolve, reject) {
        var delay = Math.ceil(Math.random() * 3000);
        console.log(delay);
        setTimeout(function () {
            if (delay > 2000) reject(num);else resolve(num), delay;
        });
    });
}

// let p1 = go(1);
// let p2 = go(2);
// let p3 = go(3);

// Promise.race([p1,p2,p3])
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => 
//         console.error(error))

Promise.race([spiderman, superman]).then(function (movies) {
    return movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
});