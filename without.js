
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


const without = function (source, itemsToRemove) {
  
  for(let i = 0; i < itemsToRemove.length; i++){
    for(let z = 0; z < source.length; z++){
      if(source[z] === itemsToRemove[i]){
        source.splice(z, 1);
        break;
      }
    }
  }
  return source;

};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]