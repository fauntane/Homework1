// 1
const str = 'js';
console.log(str.toUpperCase());

// 2
function filterByStart(arr, startStr) {
  return arr.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
}
const words = ['JavaScript', 'java', 'Python', 'JS', 'Json'];
console.log(filterByStart(words, 'ja'));

// 3
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// 4
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// 5
function randomOneToTen() {
  console.log(Math.floor(Math.random() * 10) + 1);
}
randomOneToTen();

// 6
function randomArray(n) {
  const arr = [];
  const length = Math.floor(n / 2);
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (n + 1)));
  }
  return arr;
}
console.log(randomArray(10));

// 7
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(5, 15));

// 8
console.log(new Date());

// 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);

// 10
function formatDate(date) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const days = [
    'воскресенье', 'понедельник', 'вторник',
    'среда', 'четверг', 'пятница', 'суббота'
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = days[date.getDay()];
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `Дата: ${day} ${month} ${year} — это ${weekday}.
Время: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));
