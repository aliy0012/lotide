
const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function (someArray) {
  let arr = [];
  if(someArray.length < 3){
    return arr;
  }

  if(someArray.length % 2 === 0){
    arr.push(someArray[Math.floor(someArray.length / 2) - 1]);
    arr.push(someArray[Math.floor(someArray.length / 2)]);
  
  } else {
    arr.push(someArray[Math.floor(someArray.length / 2)]);
  }
  return arr;

};

module.exports = middle;