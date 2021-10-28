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

const assertArraysEqual = function (arr1 , arr2){
  if(eqArrays(arr1, arr2)){
    console.log('✅✅✅ Assertion Passed: ${arr1} === ${arr2}');
    return true;
  }
  console.log('🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}');
  return false;
};


const takeUntil = function(array, callback) {
  let newArray = [];
  for(let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 3, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);

