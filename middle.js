
const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function (someArray) {
  let arr = [];
  let index;
  if(someArray.length === 1 || someArray.length === 2){
    return arr;
  }

  if(someArray.length % 2 === 0){
    index = someArray.length / 2 - 1;
    arr.push(someArray[index]);
    arr.push(someArray[index + 1]);
    return arr;
  } else {
    index = Math.ceil(someArray.length / 2) - 1;
    arr.push(someArray[index]);
    return arr;
  }

};

module.exports = middle;