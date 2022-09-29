'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '<--Type a number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You did it!! 🥳 ';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
  }
});
