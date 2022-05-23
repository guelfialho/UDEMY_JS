'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // cleaning the default values
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//////////////////////////////////////////
// teoric classes

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited R$ ${movement}`);
//   } else {
//     console.log(`You withdrew R$ ${Math.abs(movement)}`);
//   }
// }

// console.log('-----------FOR EACH METHOD------------');

// movements.forEach(movement => {
//   if (movement > 0) {
//     console.log(`You deposited R$ ${movement}`);
//   } else {
//     console.log(`You withdrew R$ ${Math.abs(movement)}`);
//   }
// });

// let a = movements;
// console.log(a);
// for (const [index, value] of movements.entries()) {
//   if (value > 0) {
//     console.log(`Movement ${index + 1}: You deposited R$ ${value}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew R$ ${Math.abs(value)}`);
//   }
// }

// console.log('-----------FOR EACH METHOD------------');

// movements.forEach(function (value, index) {
//   if (value > 0) {
//     console.log(`Movement ${index + 1}: You deposited R$ ${value}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew R$ ${Math.abs(value)}`);
//   }
// });

//
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice - > returns a new array only with the selected elements ( does nor mutate the original array)

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); // the end parameter is not included in slice method
// console.log(arr.slice(-2));
// console.log(arr.slice(-2));
// console.log(arr.slice(2, -1));
// console.log(arr.slice(-4, -1));
// console.log(arr.slice(2));

// console.log(arr);

// // splice -> similar to Slice, it's returns a new array with the selected items, but it indeed mutate the original arary removing these itens from it.

// console.log('I remove: ', arr.splice(-1)); // removing the last item from the array
// console.log(arr);

// // reverse -> This method reverse the elements in the array ( notice that it mutate the orignal array)

// console.log(arr.reverse());
// console.log(arr);

// // array.at() method

// console.log(arr.at(0));
