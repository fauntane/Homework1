const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("check");
const message = document.getElementById("message");

checkBtn.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Введите ваше число от 1 до 100!";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "Поздравляю, ты угадал число!";
        checkBtn.disabled = true;
    } else if (userGuess > randomNumber) {
        message.textContent = "Ваше число больше загаданного!"
    } else {
        message.textContent = "Ваше число меньше загаданного!"
    }
});