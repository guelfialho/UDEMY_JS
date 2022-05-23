'use strict';

// teste database 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

//test database 2
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (array1, array2) {
  let julia = [...array1];
  julia.splice(0, 1);
  julia.splice(-2, 2);

  const data = julia.concat(array2);

  data.forEach(function (value, index) {
    if (value >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${value} years old`
      );
    } else if (value >= 0) {
      console.log(
        `Dog number ${index + 1} is still a puppy, and is ${value} years old`
      );
    }
  });
};

checkDogs(dogsJulia, dogsKate);
