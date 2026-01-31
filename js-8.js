//Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//задание 2
function isPositive(num) {
   return num > 0;
}

function isMale(person) {
   return person.gender === 'male';
}

function filter(array, ruleFunction) {
   const result = [];
   for (let item of array) {
      if (ruleFunction(item)) {
         result.push(item);
      }
   }
   return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peoples, isMale));

//Задание 3
let counter = 0;

const interval = setInterval(() => {
   console.log(new Date());
   counter += 3;

   if (counter >= 30) {
      clearInterval(interval);
      console.log("30 секунд прошло");
   }
}, 3000);

//Задание 4
function delayForSecond(callback) {
   setTimeout(() => {
      callback();
   }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));