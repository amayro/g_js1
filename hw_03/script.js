//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
console.log("------ Задание 1. ------");

var n = 0;

while (n < 100) {
    for (let i = 2;  i <= n; i++) {
        if (n % i == 0) {
            if (i == n) {
                console.log(i);
            }
            break;
        }
    }
    n++;
}



//2. четное/нечетное

console.log("------ Задание 2. ------");

var i = 0;

do {
    if (i == 0) {
        console.log(i, "- это ноль");
    } else if (i % 2 == 0 ) { 
        console.log(i, "- четное число");
    } else if (i % 2 != 0 ) { 
        console.log(i, "- нечетное число");
    }
    i++;
} while (i < 11)



//3. * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть
//выглядеть должно вот так:
//for(…){// здесь пусто}

console.log("------ Задание 3. ------");

for (i = 0; i <= 9; console.log(i++));
    
    
    
    
//4. * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей
//пирамиды должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx
console.log("------ Задание 4. ------");

var piramid = "x";
for (let i = 1; i <= 20; i++) {
    console.log(piramid);
    piramid += "x";
};


//5. Начиная с этого урока, мы начинаем работать с функционалом интернет-магазина.
//Предположим, что у нас есть сущность корзины. Нужно реализовать функционал подсчета
//стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в
//массиве.
//5.1. Организуйте такой массив для хранения товаров в корзине
//5.2. Организуйте функцию countBasketPrice, которая будет считать стоимость корзины.
