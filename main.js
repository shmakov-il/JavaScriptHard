window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  function DomElement(height = '250px', width = '250px', bg = 'blue', position = 'absolute') {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.position = position;
  }

  DomElement.prototype.createElement = function () {

    let element = document.createElement('div');

    const createElement = () => {
      document.body.append(element);
      element.classList.add('block'); 
    };

    createElement(); 
    
    DomElement.prototype.cssText = function () {
      let styleForElement = document.querySelector('.block');
      styleForElement.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background-color: ${this.bg};
      position: ${this.position};
      `;
    };
  };
    
  const newElement = new DomElement ('100px', '100px', 'tomato');
  newElement.createElement();
  newElement.cssText();

  window.addEventListener('keydown', event => {
    const element = document.querySelector('.block');
    const styleElement = getComputedStyle(element);
    console.log(event.key);
    if (event.key === 'ArrowRight') {
      element.style.left = parseInt(styleElement.left) + 10 + 'px';
    } else if (event.key === 'ArrowLeft') {
      element.style.left = parseInt(styleElement.left) - 10 + 'px';
    } else if (event.key === 'ArrowUp') {
      element.style.top = parseInt(styleElement.top) - 10 + 'px';
    } else if (event.key === 'ArrowDown') {
      element.style.top = parseInt(styleElement.top) + 10 + 'px';
    }
  });

});
