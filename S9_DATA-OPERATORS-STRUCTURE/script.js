'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  adress: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// destructurin an Array
// let [a, b] = [5, 6, 7];
// console.log(a, b);

// I can junp to the next index putting a blank space between commas
// indexes: 0,1, ,3
// let [x, y, , z] = restaurant.categories;
// console.log(x, y, z);
// I can destructurin an Array inside a destructuring:
// let array = ['miguel', 1998, ['Mirela', 'Beatriz']];
// const [miguel, , [amiga1, amiga2]] = array;

// console.log(miguel, amiga1, amiga2);

// destructuring an Object
// console.log(restaurant.adress);

// const { name, openingHours, mainMenu, adress } = restaurant;

// console.log(name, openingHours, mainMenu, adress);
