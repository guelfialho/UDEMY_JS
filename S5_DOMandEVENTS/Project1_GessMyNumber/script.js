'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number inserted';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    score -= 1;
    document.querySelector('.score').textContent = score;
  }
});

console.log(score);
