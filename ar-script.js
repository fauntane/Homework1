document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
  const operators = ['+', '-', '*', '/'];
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = +(num1 / num2).toFixed(2);
      break;
  }

  const userAnswer = prompt(`Решите пример: ${question}`);
  let message;

  if (userAnswer === null) {
    message = "Игра отменена.";
  } else if (parseFloat(userAnswer) === correctAnswer) {
    message = `✅ Правильно! ${question} = ${correctAnswer}`;
  } else {
    message = `❌ Ошибка. Правильный ответ: ${correctAnswer}`;
  }

  document.getElementById('result').textContent = message;
}
