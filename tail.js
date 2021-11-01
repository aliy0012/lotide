const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays.js');

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;

