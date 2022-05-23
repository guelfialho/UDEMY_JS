'use strict';

const bookings = [];

const createBookings = function (flightNum, numPassengers = 1, price = 199) {
  //ES5
  //numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBookings('LH123');

// aula 2

// const flight = 'LH234';
// const miguel = {
//   name: 'Miguel Fialho',
//   passport: 7595870518,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 7595870518) {
//     alert('Check In');
//   } else {
//     alert('Wrong Passport!');
//   }
// };

// checkIn(flight, miguel);
// console.log(flight);
// console.log(miguel);

// is the same as
// const flightNum = flight;
// const passenger = miguel;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000000);
// };

// newPassport(miguel);

// checkIn(flight, miguel);
// console.log(flight);
// console.log(miguel);

// high order functions

// const greet = () => console.log('Hey Miguel');

// btn.addEventListener('click', greet);
// btn.addEventListener is the high order function and the greet function is a Call Back Function

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// console.log(oneWord('Miguel Fialho SANTANA'));

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// class 132 - Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Miguel');
// greeterHey('Solange');

// greet('Hello')('Miguel!');

// const greet2 = greeting => name => console.log(`${greeting} ${name}`);
// greet2("What's up!?")('Miguel');

// class 133

const luftthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
luftthansa.book(239, 'Jonas Smith');
luftthansa.book(635, 'Miguel Fialho');
// console.log(luftthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = luftthansa.book;

// book(23, 'Jonas Smith'); // errado

// call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(luftthansa, 238, 'Mary Cooper');
console.log(luftthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// apply method
const flightData = [583, 'George Rollins']; // recieves an array of arguments

book.apply(swiss, flightData);
console.log(swiss);

// apply method is an old ES5 method, with modern javascript we can use the call method and spread the content of the array with the spread operetor ...
book.call(swiss, ...flightData);

// class 134

// the bind method is used to create a new function with the .this keyword set to the object

const bookLX = book.bind(swiss);
const bookEW = book.bind(eurowings);

bookEW(857, 'Doctor Strange');

// we specified the object with bind, but we can also set others parameters

const bookEW23 = book.bind(eurowings, 23); // means that the only parameter left to set is the name, because the book function is already set to swiss object and the flightNum (flight number to 23)

bookEW23('Hercules Copper');
bookEW23('Justin Timberlake');
bookEW23('Anitta');

// with event listeners

luftthansa.planes = 300;
luftthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', luftthansa.buyPlane.bind(luftthansa));

// partial aplication

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTax2 = value => rate => value + value * rate;
console.log(addTax2(100)(0.23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
