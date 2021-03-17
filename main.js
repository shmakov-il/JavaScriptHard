'use strict';

const isNumber = n => !isNaN(parseFloat(n) && isFinite(n));

const gameBot = () => {
    let chance = 10;
    const misteryNumber = Math.floor(Math.random() * 100);
    const giveChance = number => {
        if (chance > 0) {
            number = prompt('Угадайте число от 1 до 100!');
            if (isNumber(+number)) {
                if (number === null) {
                alert('Игра окончена');
                return;
            } else if (+number < 1 || +number > 100) {
                alert('Введите число от 1 до 100!');
                giveChance();
            } else if (!isNumber(number) || number === '') {
                alert('Введите число!');
                giveChance();
            } else if (+number > misteryNumber) {
                chance--;
                alert(`Загаданное число меньше, осталось ${chance} попыток`);
                giveChance();
            } else if (+number < misteryNumber) {
                chance--;
                alert(`Загаданное число больше, осталось ${chance} попыток`);
                giveChance();
            } else if (+number === misteryNumber) {
                if (confirm('Вы угадали. Хотите сыграть еще?')) {
                    gameBot();
                }
            }
            } else {
                alert('Введите число!');
                giveChance();
            }
        } else {
            let gameOver = confirm('Попытки закончились, хотите сыграть ещё?');
            if (gameOver === true) {
                gameBot();
            } else {
                return;
            }
        }
    };
    giveChance();
};
gameBot();