'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = document.querySelector('body');

    week.forEach((item, i) => {

        const newDay = document.createElement('ul'); 

        if (i === ((6 + new Date().getDay()) % 7)) { 
            newDay.style.fontWeight = 'bold'; 
            newDay.textContent = week[i]; 
        }
        if (item === week[5] || item === week[6]) { 
            newDay.style.fontStyle = 'italic'; 
            newDay.textContent = week[i]; 
        } else {
            newDay.textContent = week[i]; 
        }
        day.appendChild(newDay); 

    });