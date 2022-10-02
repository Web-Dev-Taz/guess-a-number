'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '<--Type a number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Correct!! You are a gold star member of the number game club 🥳 ';

    document.querySelector('body').style.backgroundColor = '#005555';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Oh no you lost! Just try again after you hang your head and cry for a bit!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'black';
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Oh no you lost! Just try again after you hang your head and cry for a bit!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'black';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#eff0f3';

  document.querySelector('.number').style.width = '15rem';
});
