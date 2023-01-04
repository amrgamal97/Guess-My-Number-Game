'use strict';

const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');
let score = document.querySelector('.score');
const again = document.querySelector('.again');
const highScore = document.querySelector('.highscore');

let randomNum = Math.floor(Math.random() * 20) + 1;

function messageChange() {
  if (guess.value <= 20 && guess.value >= 1) {
    if (guess.value === randomNum.toString()) {
      message.innerHTML = 'Winner!!!!';
      body.style.backgroundColor = 'green';
      check.setAttribute('disabled', '');
      guess.setAttribute('disabled', '');
      check.style.cursor = 'no-drop';
      number.innerHTML = guess.value;
      if (score.innerHTML > highScore.innerHTML) {
        highScore.innerHTML = score.innerHTML;
      }
    } else if (guess.value > randomNum) {
      message.innerHTML = 'Too High';
      score.innerHTML--;
      checkWinner();
    } else if (guess.value < randomNum) {
      message.innerHTML = 'Too Low';
      score.innerHTML--;
      checkWinner();
    }
  } else {
    message.innerHTML = 'Please enter number between 1 to 20';
  }
}

function checkWinner() {
  if (score.innerHTML === '0') {
    message.innerHTML = 'GAME OVER !';
    body.style.backgroundColor = 'darkred';
    check.setAttribute('disabled', '');
    guess.setAttribute('disabled', '');
    check.style.cursor = 'no-drop';
  }
}

function newGame() {
  message.innerHTML = 'Start guessing...';
  score.innerHTML = '20';
  body.style.backgroundColor = '#222';
  guess.value = '';
  check.removeAttribute('disabled', '');
  check.style.cursor = 'pointer';
  guess.removeAttribute('disabled', '');
  number.innerHTML = '?';
}

check.addEventListener('click', messageChange);
guess.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    messageChange();
  }
});
again.addEventListener('click', newGame);
