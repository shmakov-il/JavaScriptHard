'use strict';

// Создаем нужную по заданию переменную (тип данных - number)
const num = 266219;

// Меняем тип данных с number на string
const str = String(num);

// Cоздаем массив
const arrElement1 = str[0],
  arrElement2 = str[1],
  arrElement3 = str[2],
  arrElement4 = str[3],
  arrElement5 = str[4],
  arrElement6 = str[5];

let array = [arrElement1, arrElement2, arrElement3, arrElement4, arrElement5, arrElement6];

// С помощью метода перебора массива reduce() производим умножение всех элементов массива
const multiplication = array.reduce(function(accumulator, item) {
  return accumulator * item;
});
console.log(multiplication);

// Полученный результат возводим в степень = 3
const result = multiplication ** 3;

// Выводим в консоль первые две цифры полученного числа
console.log(result.toString().substring(0, 2));



