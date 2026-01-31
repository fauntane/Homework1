document.getElementById("playBtn").addEventListener("click", playGame);

function playGame() {
  const userChoice = prompt("Введите: камень, ножницы или бумага").toLowerCase();
  const options = ["камень", "ножницы", "бумага"];      
  const computerChoice = options[Math.floor(Math.random() * 3)];

  if (!options.includes(userChoice)) {
    document.getElementById("result").innerText = "Ошибка: неправильный выбор!";
    return;
  }

  let outcome = "";

  if (userChoice === computerChoice) {
    outcome = "Ничья!";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    outcome = "Вы победили!";
  } else {
    outcome = "Вы проиграли!";
  }

  document.getElementById("result").innerHTML =
    `Ваш выбор: <b>${userChoice}</b><br>Выбор компьютера: <b>${computerChoice}</b><br><br>${outcome}`;
}
