'use strict';

// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 1;
// document.querySelector('.guess').value = 14;

const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// take in date when the button is clicked  the Name of This Event is '.clikc'
document.querySelector('.check').addEventListener('click', function () {
  const gussedName = Number(document.querySelector('.guess').value);

  if (!gussedName) {
    document.querySelector('.message').textContent = '⛔No Number!';
  } else if (gussedName > 20) {
    document.querySelector('.message').textContent =
      '⛔Number Out of Range Guess Between 1 and 20!⛔';
  } else if (gussedName === secretNum) {
    document.querySelector('.message').textContent = '👌Correct Number!';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = 'rgb(96, 179, 71)';
    // document.querySelector('number').style.width = '35rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (gussedName > secretNum) {
    document.querySelector('.message').textContent =
      '☝️Your Guessed Number is High Try Again!';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost😒!';
    }
  } else if (gussedName < secretNum) {
    document.querySelector('.message').textContent =
      '👇Your Guessed Number is Low Try Again!';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost😒!';
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNum;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(8, 8, 8)';
  // document.querySelector('number').style.width = '15rem';
});
