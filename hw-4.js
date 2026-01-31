// Задание 1
for (let i = 0; i < 2; i++) {
    console.log("Привет")
}

// Задание 2 
for (let a = 1; a < 6; a++) {
    console.log(a)
}

// Задание 3
let i = 7;
while (i < 23) {
    console.log(i)
    i++
}

// Задание 4
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`)
}

// Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++
}

console.log("Результат", n)
console.log("Кол-во итераций:", num)

// Задание 6 
let firstFriday = 5;
let daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет`)
}