const eqArrays = function(arr1, arr2) {
  for ( firstArrayElement of arr1) {
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

const assertArraysEqual = function (arr1 , arr2){
  if(eqArrays(arr1, arr2)){
    console.log('✅✅✅ Assertion Passed: ${arr1} === ${arr2}');
    return true;
  }
  console.log('🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}');
  return false;
};

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

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
