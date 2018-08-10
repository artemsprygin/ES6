'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// let languages = ['js','py','java','ruby'];

// let js = languages[0];
// let py = languages[1];
// let java = languages[2];
// let ruby = languages[3];

var js = 'js',
    py = 'py',
    java = 'java',
    ruby = 'ruby';

// console.log(js,py,java,ruby);


// scorces = [3,4,[5,6]];

// let [low, mid, [high,higher]] = scorces;

// console.log(low,mid, high, higher);

function compScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    console.log(low, mid);
}

compScore([3, 4]);

function getScores() {
    return [3, 4, 5];
}

var scorces = getScores();
console.log(scorces);

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low = _getScores2[0],
    mid = _getScores2[1],
    high = _getScores2[2];

console.log(low, mid, high);

var yes = 'Yes';
var no = 'No';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];


console.log(yes, no);