"use strict";

//1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве firstDigit)
// - десятки (в свойстве secondDigit)
// - сотни (в свойстве thirdDigit)
// Например, для числа 45 мы должны получить следующий объект:
// ```
// firstDigit: 5,
// secondDigit: 4,
// thirdDigit: 0,
// ```
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const numInfo = {
    firstDigit: 0,
    secondDigit: 0,
    thirdDigit: 0,
};

/**
 * Функция, преобразующая число в объект (единицы, десятки, сотни).
 * @param {number} num введенное число
 * @returns {{firstDigit: number, secondDigit: number, thirdDigit: number}}
 */
function getNumInfo(num) {
    const numReverseStr = num.toString().split("").reverse().join("");
    switch (numReverseStr.length) {
        case 3:
            numInfo.thirdDigit = +numReverseStr[2];
        case 2:
            numInfo.secondDigit = +numReverseStr[1];
        case 1:
            numInfo.firstDigit = +numReverseStr[0];
            break;
        default:
            for (const i in numInfo) delete numInfo[i];
    }
    return numInfo
}

let num = +prompt('Введите число в диапазоне 0..999');

if (!Number.isInteger(num) || num < 0 || num > 999) {
    console.log('Необходимо ввести целое число в диапазоне 0..999');
    num = '';
}
console.log(getNumInfo(num));


// Вариант 2

function getNumInfo_2(num) {
    const obj = {};
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Необходимо ввести целое число в диапазоне 0..999');
        return {};
    }

    obj.firstDigit = num % 10;
    obj.secondDigit = Math.floor(num / 10) % 10;
    obj.thirdDigit = Math.floor(num / 100);
    return obj;
}

console.log(getNumInfo_2(num));