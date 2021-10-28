const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}');
  }
};

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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
