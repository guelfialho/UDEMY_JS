'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Gnarby',
    'Gnarby',
    'Muller',
    'Muller',
    'Muller',
    'Muller',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const entries = Object.entries(game.scored);

// 1.
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${Number(index) + 1}: ${player}`);
}

// 2.

// const odds = Object.entries(game.odds);
// console.log(odds);

// let total = 0;
// let teamsOdd = [];

// for (const [team, odd] of odds) {
//   teamsOdd.push(Number(odd));
//   total += odd;
//   avarege = total / odds.length;
//   //   console.log(odd);
// }
// console.log(avarege);

let odds = Object.values(game.odds);
let avarege = 0;

for (const odd of odds) avarege += odd;
avarege = avarege / odds.length;
console.log(avarege);

// 3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team == 'x' ? 'Draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}

// 4.

const scores = {};

for (const i in game.scored) {
  if (!scores?.[game.scored[i]]) {
    scores[game.scored[i]] = 1;
  } else {
    scores[game.scored[i]] += 1;
  }
}

console.log(scores);
