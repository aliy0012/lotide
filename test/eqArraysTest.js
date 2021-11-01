const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual');




assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS