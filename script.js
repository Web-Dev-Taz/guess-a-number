'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!! 🥳 ';
console.log((document.querySelector('.number').textContent = 13));
console.log((document.querySelector('.score').textContent = 55));

document.querySelector('.guess').value = 0;
console.log(document.querySelector('.guess').value);
