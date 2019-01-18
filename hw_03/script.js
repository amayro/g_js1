"use strict";

//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
console.log("------ Задание 1. ------");

let n = 0;

while (n < 100) {
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            if (i === n) {
                console.log(i);
            }
            break;
        }
    }
    n++;
}


//2. четное/нечетное

console.log("------ Задание 2. ------");

let i = 0;

do {
    if (i === 0) {
        console.log(i, "- это ноль");
    } else if (i % 2 === 0) {
        console.log(i, "- четное число");
    } else if (i % 2 !== 0) {
        console.log(i, "- нечетное число");
    }
    i++;
} while (i < 11);


//3. * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть
//выглядеть должно вот так:
//for(…){// здесь пусто}

console.log("------ Задание 3. ------");

for (i = 0; i <= 9; console.log(i++)) ;


//4. * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей
//пирамиды должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx
console.log("------ Задание 4. ------");

let piramid = "x";

for (let i = 1; i <= 20; i++) {
    console.log(piramid);
    piramid += "x";
}


//5. Дан массив (создать такой же, с такими же значениями):
/*
const arr = [
[2, 4, 6],
[1, 5, 10],
[7, 4, 1],
];

Задания:
1 Найти массив, у которого сумма всех чисел максимальна, вывести в console.log
индекс этого массива.
2 Получить и вывести в console.log минимальное значение найденное в массиве,
который мы получили в первом пункте.
*/

console.log("------ Задание 5. ------");

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];
const arr_sum = [];

for (let i = 0;  i < arr.length; i++) {
    arr_sum.push(arr[i].reduce(function (sum, current) {
        return sum + current;
    }));
}

let idxArrMaxSum = arr_sum.indexOf(Math.max.apply(null, arr_sum));
let minValArrSum = Math.min.apply(null, arr[idxArrMaxSum]);

console.log('Массив с максимальной суммой имеет индекс: ', idxArrMaxSum);
console.log('Минимальное значение в этом массиве ', minValArrSum);



//6. Создайте массив, любого размера (просто руками, с любыми значениями). Переберите массив в обратном порядке,
// т.е. с последнего элемента к первому с помощью цикла for.

console.log("------ Задание 6. ------");

let arr_num = [2, 6, 3, 9, 1];

for (let i = arr_num.length; i >= 0; console.log(arr_num[i]), i--);

