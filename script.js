'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click',);
document.querySelector('.again').addEventListener('click', function(){
  let score = 20;
  document.querySelector('.score').textContent = 20;
   document.querySelector('.message').textContent =
      'Start guessing...';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor='#222';
})
const number = Math.random();
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

   if (guess < 0) {
    document.querySelector('.message').textContent =
      '❌ Negitive number not allowed!';
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score -= 1;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      document.querySelector('.message').textContent =
        '😥😟😟😒 You lost the game';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low';
    score -= 1;

    document.querySelector('.score').textContent = score;
    if (score == 0) {
      document.querySelector('.message').textContent =
        '😥😟😟😒 You lost the game';
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✔️💯🎉 Correct Number';
    document.querySelector('.score').textContent = score;
    

    document.querySelector('body').style.backgroundColor='#60b347';
  }
});
