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

function getData(url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var json = JSON.parse(xhr.response);
            console.log(json);
            done(json.Search);
        } else {
            console.error(xhr.statusText);
        };
    };

    xhr.onerror = function (error) {
        console.error(error);
    };

    xhr.send();
}

var search = 'spider man';

getData('http://www.omdapi.com/?s=' + search, function (movies) {
    movies.forEach(function (movie) {
        addMovieToList(movie);
    });
});