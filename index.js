// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const findKey = require('./findKey');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  eqArrays: eqArrays,
  findKey: findKey,
  map: map,
  takeUntil: takeUntil,
  without: without

};