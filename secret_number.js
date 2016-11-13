'use strict';
module.exports = function secretNumber() {
  let secretNumberGenerator = Math.random() * 100000; //0 (function() {
    return function num(){
      return secretNumberGenerator;
    };
};


// var generatedNumber = secretNumber();

// console.log(generatedNumber);


// var anotherSecret = secretNumber();
// console.log(anotherSecret + ' <-- this should be the same');
// console.log(anotherSecret + ' <-- as this');
// console.log(secretNumber.num);