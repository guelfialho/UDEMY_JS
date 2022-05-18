'use strict';

// selecting elements from document

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// starting conditionss

score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

// rolling the dice functionalities

btnDice.addEventListener('click', function () {
  //1. generating a radom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. If the dice is 1 then switch to next player
});
