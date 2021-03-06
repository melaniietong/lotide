const eqArrays = function(arrOne, arrTwo) {
  let output = true;

  // Is arrays arent' the same length, false.
  if (arrOne.length !== arrTwo.length) {
    output = false;
  }

  // Compares each array's index to make sure they're the same, else false.
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      output = false;
    }
  }

  return output;
}

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let output;

  if (keys1.length === keys2.length) {
    for (let k1 of keys1) {
      for (let k2 of keys2) {
        // If the value is an array.
        if (Array.isArray(object1[k1]) && Array.isArray(object2[k1])){
          if (eqArrays(object1[k1], object2[k1])) {
            output = true;
          } else {
            return false;
          }
        } else { // If not an array, compare as primitive values.
          if (object1[k1] === object2[k1]){
            output = true;
          } else {
            return false;
          }
        }
      } 
    }
  } else {
    return false;
  }

  return output;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};