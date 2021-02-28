'use strict';

const title = document.getElementById('color'),
  btn = document.getElementById('change');

const random = (x, y) => {
  return Math.round(Math.random() * (y - x) + x);
};

const randomColor = () => {
  let red = random(0, 255).toString(16);
  let green = random(0, 255).toString(16);
  let blue = random(0, 255).toString(16);
  return '#' + red + green + blue;
};

btn.addEventListener('click', () => {
  const color = randomColor();
  document.body.setAttribute('style', `background-color: ${color}`);
  title.textContent = color;
});