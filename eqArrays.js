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

module.exports = eqArrays;
