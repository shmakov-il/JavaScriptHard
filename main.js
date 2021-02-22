'use strict';

let text;
function myFunction (text) {
  text = prompt('Напишите что-нибудь...');
  while (!text.trim() || /[0-9]/.test(text)) {
    alert('Введите строку!');
    text = prompt('Напишите что-нибудь...');
  }
  text = text.trim();

  if (text.length > 30) {
    return text.slice(0, 30) + '...';
  } else {
    return text;
  } 
}
console.log(myFunction(text));
