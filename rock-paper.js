// script.js — логика игры Камень, Ножницы, Бумага
const options = ["камень", "ножницы", "бумага"];

const buttons = document.querySelectorAll('.choice-btn');
const resultEl = document.getElementById('result');
const userDisplay = document.getElementById('user-choice');
const compDisplay = document.getElementById('comp-choice');
const playAgainBtn = document.getElementById('play-again');

function getComputerChoice(){
  return options[Math.floor(Math.random()*options.length)];
}

function decide(user, comp){
  if(user === comp) return 'draw';
  if(
    (user === 'камень' && comp === 'ножницы') ||
    (user === 'ножницы' && comp === 'бумага') ||
    (user === 'бумага' && comp === 'камень')
  ) return 'win';
  return 'lose';
}

function showResult(user, comp, outcome){
  userDisplay.textContent = user;
  compDisplay.textContent = comp;

  if(outcome === 'draw'){
    resultEl.textContent = 'Ничья!';
    resultEl.className = 'result-draw';
  } else if(outcome === 'win'){
    resultEl.textContent = 'Вы победили!';
    resultEl.className = 'result-win';
  } else {
    resultEl.textContent = 'Вы проиграли!';
    resultEl.className = 'result-lose';
  }
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const userChoice = btn.getAttribute('data-choice');
    const compChoice = getComputerChoice();
    const outcome = decide(userChoice, compChoice);

    // мягкая анимация нажатия
    btn.animate([
      {transform: 'scale(1)'},
      {transform: 'scale(0.96)'}
    ], {duration:120, fill:'forwards'});

    showResult(userChoice, compChoice, outcome);
  });
});

playAgainBtn.addEventListener('click', () => {
  userDisplay.textContent = '-';
  compDisplay.textContent = '-';
  resultEl.textContent = 'Сделайте выбор!';
  resultEl.className = '';
});
