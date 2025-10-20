// Задание 1
let arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  if (arr1[i] === 10) break;
}

// Задание 2
let arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

// Задание 3
let arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

// Задание 4
let arr4 = [];
for (let i = 0; i < 3; i++) {
  let inner = [];
  for (let j = 0; j < 3; j++) {
    inner.push(1);
  }
  arr4.push(inner);
}
console.log(arr4);

// Задание 5
let arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

// Задание 6
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6 = arr6.sort().filter(item => typeof item === 'number');
console.log(arr6);

// Задание 7
let arr7 = [9, 8, 7, 6, 5];
let guess = Number(prompt("Угадай число"));
if (arr7.includes(guess)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

// Задание 8
let str = 'abcdef';
console.log(str.split('').reverse().join(''));

// Задание 9
let arr9 = [[1, 2, 3], [4, 5, 6]];
console.log(arr9.flat());

// Задание 10
let arr10 = [1, 4, 7, 2, 9, 5];
for (let i = 0; i < arr10.length - 1; i++) {
  console.log(arr10[i] + arr10[i + 1]);
}

// Задание 11
function squareArray(arr) {
  return arr.map(num => num ** 2);
}
console.log(squareArray([1, 2, 3, 4]));

// Задание 12
function getWordLengths(words) {
  return words.map(word => word.length);
}
console.log(getWordLengths(['apple', 'banana', 'kiwi']));

// Задание 13
function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0);
}
console.log(getNegativeNumbers([1, -2, 3, -4, 5]));

// Задание 14
let arr14 = Array.from({length: 10}, () => Math.floor(Math.random() * 11));
let evens = arr14.filter(num => num % 2 === 0);
console.log(arr14);
console.log(evens);

// Задание 15
let arr15 = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);
let average = arr15.reduce((sum, num) => sum + num, 0) / arr15.length;
console.log(arr15);
console.log(average);
