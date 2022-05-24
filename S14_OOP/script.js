'use strict';

const Person = function (firstName, birthYear) {
  // Intance properties

  this.firstName = firstName;
  this.birthYear = birthYear;
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   }; // using like this we have the same function(method) stored in each intance of the Person. Is cases like this we use Person.prototype and use prototype inheritance and chain to store in only one place.
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
}; // with propotype inheritance we only have one function that all intances of a class (Person) have access to use, whithout have to create the same method  for each class instance in the constructor.

const jonas = new Person('Jonas', 1991);
const miguel = new Person('Miguel', 1998);
const luna = new Person('Luna', 2021);

console.log(jonas);
console.log(miguel);
console.log(luna);

console.log(miguel instanceof Person);
console.log(miguel.hasOwnProperty('calcAge'));
console.log(miguel.hasOwnProperty('firstName'));
console.log(miguel.__proto__);
console.log(miguel.__proto__.__proto__);
