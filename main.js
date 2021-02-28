'use strict';

const divFirst = document.createElement('div');
const divSecond = document.createElement('div');

divFirst.classList.add('first');
divSecond.classList.add('second');

document.body.append(divFirst);
document.body.append(divSecond);


function getFormatA() {
  
  const data = new Date();

  // Получение дня недели с заглавной буквы
  let nowDayWeek = data.toLocaleString('ru', {weekday: 'long'});
  nowDayWeek = nowDayWeek[0].toUpperCase() + nowDayWeek.slice(1);
  // Получение числа дня
  let nowDayNumber = data.toLocaleString('ru', {day: 'numeric'});
  // Получение месяца с нужным окончанием
  let nowMonth = data.toLocaleString('ru', {month: 'long'});
  if (nowMonth.slice(-1) === 'ь' || nowMonth.slice(-1) === 'й') {
    nowMonth = nowMonth.slice(0, -1) + 'я';
  } else {
    nowMonth = nowMonth + 'a';
  }
  // Получение года
  let nowYearNumber = data.toLocaleString('ru', {year: 'numeric'});
  // Получение часа в нужном склонении
  let hours = function getHours() {
    let today = data.getHours();
    if (today === 1 || today === 21) {
      return zeroPre() + ' час';
    } else if (today === 0 || today > 4 && today < 21) {
      return zeroPre() + ' часов';
    } else if (today > 1 && today < 5 || today > 21 && today < 24) {
      return zeroPre() + ' часа';
    }
  // Добавление 0 к числу, которое меньше 10
    function zeroPre() {
      if (today > -1 && today < 10) {
        return '0' + today;
      } else if (today > 9 && today < 24) {
        return today;
      }
    }
  };
  // Получение минут в нужном склонении
  let minutes = function getMinutes() {
    let today = data.getMinutes();
    if (today === 1 || today === 21 || today === 31 || today === 41 || today === 51){
      return zeroPre() + ' минута';
    } else if (today === 0 || today > 4 && today < 21 || today > 24 && today < 31 || today > 34 && today < 41 || today > 44 && today < 51 || today > 54 && today < 60) {
      return zeroPre() + ' минут';
    } else if (today > 1 && today < 5 || today > 21 && today < 25 || today > 31 && today < 35 || today > 41 && today < 45 || today > 51 && today < 55) {
      return zeroPre() + ' минуты';
    } 
    // Добавление 0 к числу, которое меньше 10
    function zeroPre() {
      if (today > -1 && today < 10){
        return '0' + today;
      } else if (today > 9 && today < 60) {
        return today;
      }
    }
  };
  // Получение секунд в нужном склонении
  let seconds = function getSeconds(){
    let today = data.getSeconds();
    if (today === 1 || today === 21 || today === 31 || today === 41 || today === 51){
      return zeroPre() + ' секунда';
    } else if (today === 0 || today > 4 && today < 21 || today > 24 && today < 31 || today > 34 && today < 41 || today > 44 && today < 51 || today > 54 && today < 60) {
      return zeroPre() + ' секунд';
    } else if (today > 1 && today < 5 || today > 21 && today < 25 || today > 31 && today < 35 || today > 41 && today < 45 || today > 51 && today < 55) {
      return zeroPre() + ' секунды';
    } 
    // Добавление 0 к числу, которое меньше 10
    function zeroPre() {
      if (today > -1 && today < 10){
        return '0' + today;
      } else if (today > 9 && today < 60) {
        return today;
      }
    }
  };
  // Вывод результата
  let resultFirst = document.querySelector('.first');
  resultFirst.innerHTML = (`Сегодня ${nowDayWeek}, ${nowDayNumber} ${nowMonth} ${nowYearNumber} года, ${hours()} ${minutes()} ${seconds()}`);

} 

function getFormatB(){

  const data = new Date();
  // Задаем переменные с датой и временем
  let yearMonthDay = data.toLocaleDateString();
  let hoursMinutesSeconds = data.toLocaleTimeString();
  // Выводим результат на экран
  let resultSecond = document.querySelector('.second');
  resultSecond.innerHTML = (`${yearMonthDay} - ${hoursMinutesSeconds}`);

}


setInterval(getFormatA, 1000);
setInterval(getFormatB, 1000);