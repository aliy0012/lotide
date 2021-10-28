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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);


assertArraysEqual(words, ['g', 'c', 't', 'm', 't']);