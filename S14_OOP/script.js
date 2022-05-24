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

// console.log(jonas);
// console.log(miguel);
// console.log(luna);

// console.log(miguel instanceof Person);
// console.log(miguel.hasOwnProperty('calcAge'));
// console.log(miguel.hasOwnProperty('firstName'));
// console.log(miguel.__proto__);
// console.log(miguel.__proto__.__proto__);

//////////////////////////////////////////
// USING CLASSES ES6
/////////////////////////////////////////

// class expression =
// const PersonCl = class {}

// class declaration =
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // method will be added to the propotype, not to intances
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    return console.log(`Hello, ${this.fullName}!`);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a fullName!`);
  }

  // get fullName() {
  //   return this._fullName;
  // }
}

const jessica = new PersonCl('Jessica', 1996);

// console.log(jessica);

// // jessica.fullName = 'Jessica Daves';

// console.log(jessica);
// console.log(`_name: ${jessica._fullName}`);
// console.log(`name: ${jessica.fullName}`);

// jessica.greet();

// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// const account = {
//   owner: 'Miguel',
//   movements: [200, 50, 247, 193, -20, 130],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.movements);
// console.log(account.latest);
// account.latest = 100;
// console.log(account.movements);
// console.log(account.latest);
