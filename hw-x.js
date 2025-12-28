const title = document.querySelector('#main-title');
const toggleBtn = document.querySelector('#toggle-title');

toggleBtn.addEventListener('click', () => {
  if (title.style.display === 'none') {
    title.style.display = 'block';
    toggleBtn.textContent = 'Скрыть';
  } else {
    title.style.display = 'none';
    toggleBtn.textContent = 'Показать';
  }
});

//Задание 2
const paragraph = document.querySelector('#text');
const colorBtn = document.querySelector('#change-color');

colorBtn.addEventListener('click', () => {
  paragraph.style.color = 'blue';
});

//Задание 3
const changeTitleBtn = document.querySelector('#change-title');

changeTitleBtn.addEventListener('click', () => {
  title.textContent = 'Привет, мир!';
});

//Задание 4
const descriptions = document.querySelectorAll('.description');

descriptions.forEach(item => {
  item.textContent = 'Измененный текст';
});

//Задание 5
const changeDescriptionsBtn = document.querySelector('#change-descriptions');

changeDescriptionsBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.description');
  items.forEach(item => {
    item.textContent = 'Новый текст';
  });
});

//Задание 6
const addBtn = document.querySelector('#add-element');

addBtn.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Новый абзац';
  document.body.appendChild(newParagraph);
});

//Задание 7
const removeBtn = document.querySelector('#remove-element');

removeBtn.addEventListener('click', () => {
  const firstDescription = document.querySelector('.description');
  if (firstDescription) {
    firstDescription.remove();
  }
});
