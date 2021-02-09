'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let text = prompt('Напишите что-нибудь...');

function myFunction (text) {
  // проверяем на строка/не строка
  if (isNumber(text)) {
    alert('Напишите строку!');
  } 

  // убираем пробелы в начале и конце строки
  text = text.trim();

  // вводим ограниченеие по символам
  if (text.length > 30) {
    return text.slice(0, 30) + '...';
  } else {
    return text;
  } 
}

alert(myFunction(text));

