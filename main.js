'use strict';

// Создаем нужную по заданию переменную (тип данных - number)
const num = 266219;

// Меняем тип данных с number на string, создаем массив
const array = num.toString().split('')
console.log('array: ', array);

// С помощью метода перебора массива reduce() производим умножение всех элементов массива
const multiplication = array.reduce(function(accumulator, item) {
  return accumulator * item;
});
console.log(multiplication);

// Полученный результат возводим в степень = 3
const result = multiplication ** 3;

// Выводим в консоль первые две цифры полученного числа
console.log(result.toString().substring(0, 2));



