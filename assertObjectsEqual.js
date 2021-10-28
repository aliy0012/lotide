const eqArrays = function(arr1, arr2) {
  for( firstArrayElement of arr1){
    for( secondArrayElement of arr2){
      if(firstArrayElement === secondArrayElement){
        continue;
      }
      else if (firstArrayElement === secondArrayElement){
        return false;
      }
    }
  }
  return true;

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keysOfObject1 = Object.keys(object1);
  let keysOfObject2 = Object.keys(object2);
  if(keysOfObject2.length !== keysOfObject1.length){
    return false;
  }
  for( let key of keysOfObject1) {
    if(eqArrays(keysOfObject1, keysOfObject2)){
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (typeof(object1[key]) === "object" || typeof(object2[key]) === "object") {
        return eqObjects(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]){
        return false
      }
      }
    } 
  return false;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)){
    return (console.log(`🛑 🛑 🛑  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  } 
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
};


