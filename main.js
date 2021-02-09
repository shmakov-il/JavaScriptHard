'use strict';

// Первая задача
const arr = ['593121', '24421', '290032', '465', '357', '112', '422332',];

arr.forEach(function(number) {
  if (number.startsWith('2') || number.startsWith('4')) {
    console.log(number);
  }
});

// Вторая задача
// Создаем вложенный цикл с меткой
nextNumber:
for (let i = 2; i <= 100; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j === 0) {
      continue nextNumber; 
    } 
  }
  console.log( i + '. Делители этого числа ' + 1 + ' и ' + i );
}
