'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. my answer

// let auxiliar = [];
// let events;
// for (const [time, event] of [...gameEvents.entries()]) {
//   auxiliar.push(event);
// }

// events = [...new Set(auxiliar)];

// console.log(events);

//2.
// console.log('-----------------------------------------');
// gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// let sum = 0;

// for (const [time] of [...gameEvents.entries()]) {
//   sum += time;
// }
// let avarege = sum / 90;

// console.log(`An event happened, on average, every ${avarege} minutes`);

//4.

// for (const [time, event] of [...gameEvents.entries()]) {
//   if (time <= 45) {
//     console.log(`[FIRST HALF] ${time}: ${event}`);
//   } else {
//     console.log(`[SECOND HALF] ${time}: ${event}`);
//   }
// }

// ---------------------- jonas answer
//1.
const events = [...new Set(gameEvents.values())];

console.log(events);

//2.
gameEvents.delete(64);
//3.

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
