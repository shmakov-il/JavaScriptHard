'use strict';
function gameBot(){

  const chance = 10;
  function giveChance(chance) {
    const misteryNumber = Math.ceil(Math.random()*100);

    let isNumber = function(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let personNumber; 

    function guessTheNumber(){
      personNumber = prompt('Угадайте число от 1 до 100');

      function numberLess(){
        alert(`Загаданное число меньше, осталось ${chance--} попыток`);
      }
      function numberMore(){
        alert(`Загаданное число больше, осталось ${chance--} попыток`);
      }
      function notNumber() {
        alert('Введите число');    
      }
      function enterNumber() {
        alert('Введите число от 0 до 100');    
      }
      function cancelGame(){
        alert('Игра окончена');
        gameBot();
      }
      function winGame(){
        const question = confirm('Вы угадали. Хотите сыграть еще?');
        if (question) {
          gameBot();
        } else {
          alert('Игра окончена');
        }
      }
      function chanceEnd() {
        const question = confirm('Попытки закончились, хотите сыграть еще?');
        if (question) {
          gameBot();
        } else {
          alert('Игра окончена');
        }
      }
      if (isNumber(+personNumber)){
              if (personNumber === null) {
                cancelGame();
              } else if (personNumber === '' || personNumber.trim() === '') {
                notNumber();
              } else if (Number(personNumber) < 1 || Number(personNumber) > 100) {
                enterNumber();
              } else if (chance <= 0) {
                chanceEnd();
                gameBot();
              } else if (Number(personNumber) > misteryNumber) {
                numberLess();
              } else if (Number(personNumber) < misteryNumber){
                numberMore();
              } else if (Number(personNumber) === misteryNumber){
                winGame();
                gameBot();
              }
      } else {
        notNumber();
      }
      return guessTheNumber();
    }
    guessTheNumber();
    if(chance > 0) {
      giveChance(chance);
    }
  }
  giveChance(chance);
}  
gameBot();
