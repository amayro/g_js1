//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные
//значения. Затем написать скрипт, который работает по следующему принципу:
//o если a и b положительные, вывести их разность;
//o если а и b отрицательные, вывести их произведение;
//o если а и b разных знаков, вывести их сумму;
//ноль можно считать положительным числом.

console.log("------ Задание 3. ------");

var a = -2;
var b = 3;

if (a > 0 && b > 0) {
    console.log("a - b = ", a - b)
} else if (a > 0 || b > 0) {
    console.log("a + b = ", a + b)
} else {
    console.log("a * b = ", a * b)
}

//4. Присвоить переменной а значение в промежутке [0..10]. С помощью оператора switch
//организовать вывод чисел от a до 10.

console.log("------ Задание 4. ------");
console.log("------ через switch ------");


var a = 6;
switch (a) {
    case 0: 
        console.log(0);
    case 1: 
        console.log(1);
    case 2: 
        console.log(2);
    case 3: 
        console.log(3);
    case 4: 
        console.log(4);
    case 5: 
        console.log(5);
    case 6: 
        console.log(6);
    case 7: 
        console.log(7);
    case 8: 
        console.log(8);
    case 9: 
        console.log(9);
    case 10: 
        console.log(10);
        break;
    default:
        console.log("Число должно быть в диапазоне 0..10");       
}

console.log("------ без switch ------");

var b = a;
if (b > 0 && b < 10) {
    while (b <= 10) {
        console.log(b++);
    };
} else {
    console.log("Число должно быть в диапазоне 0..10");
}


//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
//Обязательно использовать оператор return.

console.log("------ Задание 5. ------");
var a;
var b;

function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

console.log("a + b =", sum(2, 3));
console.log("a - b =", subtract(5, 4));
console.log("a * b =", multiply(3, 3));
console.log("a / b =", division(8, 3));


//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где
//arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
//переданного значения операции выполнить одну из арифметических операций (использовать
//функции из пункта 3) и вернуть полученное значение (использовать switch).

console.log("------ Задание 6. ------");

function mathOperation(arg1, arg2, operation) {
    var arg1;
    var arg2;
    switch (operation) {
        case "+":
            result = sum(arg1, arg2);
            break;
        case "-":
            result = subtract(arg1, arg2);
            break;
        case "*":
            result = multiply(arg1, arg2);
            break;
        case "/":
            result = division(arg1, arg2);
            break;
        default:
            result = "Проверьте название операции";
    };
    return result;
};

console.log(mathOperation(2, 3, "+"));
console.log(mathOperation(5, 4, "-"));
console.log(mathOperation(3, 3, "*"));
console.log(mathOperation(8, 3, "/"));
console.log(mathOperation(2, 3, "summa"));


//7. * Сравнить null и 0. Попробуйте объяснить результат.

console.log("------ Задание 7. ------");
var aNull = null;
var aZero = 0;

//Вывод типа переменных
console.log(typeof(aNull));
console.log(typeof(aZero));

//Проверка равенства
if (aNull == aZero) {
    console.log("Они равны");
} else {
    console.log("Они разные");
};

//Проверка на жесткое равенство
if (aNull === aZero) {
    console.log("Равны");
} else {
    console.log("не равны");
};

//8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
//power(val, pow), где val – заданное число, pow – степень.

console.log("------ Задание 8. ------");

console.log('*** Рекурсия ***');
function power(val, pow) {
	if (pow == 0) {
		return 1;
	} else if (pow < 0) { // Провекра на отрицательную степень
		//4^-5: 1 / 4 / 4 / 4 / 4 / 4
		return 1 / power(val, -pow);
	} else {
		return val * power(val, pow - 1);
	}
}

console.log(power(2, 6));
