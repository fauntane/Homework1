    const quiz = [
      {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
      },
      {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
      },
      {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
      },
      {
        question: "Сколько колес имеет стандартный легковой автомобиль?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 1
      }
    ];

    function startQuiz() {
      let correct = 0;
      for (let i = 0; i < quiz.length; i++) {
        const answer = prompt(`${quiz[i].question}\n${quiz[i].options.join('\n')}`);
        if (Number(answer) === quiz[i].correctAnswer) {
          correct++;
        }
      }
      alert(`Вы ответили правильно на ${correct} из ${quiz.length} вопросов!`);
    }