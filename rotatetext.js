function reverseText() {
      const text = document.getElementById('textInput').value;
      const reversed = text.split('').reverse().join('');
      document.getElementById('result').textContent = reversed || "Введите текст!";
    }