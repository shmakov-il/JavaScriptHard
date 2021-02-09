'use strict';

// Первая задача
const lang = prompt('Введите "en" или "ru"');
// С помощью if
if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
}

// С помощью switch
switch (lang) {
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
}

// С помощью многомерного массива
const week = [];
week['ru'] = ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'];
week['en'] = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
console.log(String(week[lang]));

// Вторая задача
const namePerson = prompt('Введите имя');

const result = namePerson === 'Артем' ? console.log('Директор') :
  namePerson === 'Максим' ? console.log('Преподаватель') :
  console.log('Студент');