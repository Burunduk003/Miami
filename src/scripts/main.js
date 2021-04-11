'use strict';

const menu = document.querySelector('.menu');
const openButton = document.querySelector('.header__menu-toggler');
const closeButton = document.querySelector('.nav_close');

openButton.addEventListener('click', () => {
  menu.classList.add('menu--move');
}
);

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--move');
}
);
