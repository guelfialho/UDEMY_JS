'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype); // linking prototypes

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 1990, 'Computer Science');

// mike.introduce();
// mike.calcAge();

/////////////////////////////////////////////////

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear); // parent call
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

// const martha = new StudentCl('Martha Jones', 2002);
const martha = new StudentCl('Martha Jones', 2002, 'Computer Science');
/////////////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   // Intance properties

//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   //   this.calcAge = function () {
//   //     console.log(2022 - this.birthYear);
//   //   }; // using like this we have the same function(method) stored in each intance of the Person. Is cases like this we use Person.prototype and use prototype inheritance and chain to store in only one place.
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// }; // with propotype inheritance we only have one function that all intances of a class (Person) have access to use, whithout have to create the same method  for each class instance in the constructor.

// const jonas = new Person('Jonas', 1991);
// const miguel = new Person('Miguel', 1998);
// const luna = new Person('Luna', 2021);

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
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

// method will be added to the propotype, not to intances
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     return console.log(`Hello, ${this.fullName}!`);
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a fullName!`);
//   }

//   // get fullName() {
//   //   return this._fullName;
//   // }
// }

// const jessica = new PersonCl('Jessica', 1996);

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
