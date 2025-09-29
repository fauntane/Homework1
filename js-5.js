// Zadanie 1
function getMin(a, b) {
    return a < b ? a : b;
}

// Примеры:
console.log(getMin(8, 4)); // 4
console.log(getMin(6, 6)); // 6


// Zadanie 2
function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

// Примеры:
console.log(checkEvenOdd(4)); // Число четное
console.log(checkEvenOdd(7)); // Число нечетное


//Zadanie 3
// 1) Выводит квадрат числа в консоль
function printSquare(n) {
    console.log(n * n);
}

// 2) Возвращает квадрат числа
function getSquare(n) {
    return n * n;
}

// Примеры:
printSquare(5); // 25
console.log(getSquare(6)); // 36

//Zadanie 4
function checkAge() {
    const age = prompt("Сколько вам лет?");

    if (age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    } else if (age >= 13) {
        alert("Добро пожаловать!");
    }
}


//ZAdanie 5
function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Одно или оба значения не являются числом";
    }
    return a * b;
}

// Примеры:
console.log(multiply(3, 4)); // 12
console.log(multiply("abc", 4)); // Одно или оба значения не являются числом

//Zadanie 6
function cubeNumber() {
    const n = prompt("Введите число");

    if (isNaN(n)) {
        return "Переданный параметр не является числом";
    } else {
        const num = Number(n);
        return `${num} в кубе равняется ${num ** 3}`;
    }
}

// Пример:
console.log(cubeNumber());

//Zadanie 7
const circle1 = {
    radius: 5,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

// Примеры:
console.log("Circle1 площадь:", circle1.getArea());
console.log("Circle1 периметр:", circle1.getPerimeter());
console.log("Circle2 площадь:", circle2.getArea());
console.log("Circle2 периметр:", circle2.getPerimeter()); 
