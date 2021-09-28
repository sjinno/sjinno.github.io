'use strict';

function setCurrentYear(currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function toggleMenu(btn, menu, patty1, patty2, openState) {
  // Cross 1
  // top: 2.1rem;
  // left: 1rem;
  // right: 1rem;
  // transform: rotate(45deg);

  // Cross 2
  // top: 2.1rem;
  // bottom: auto;
  // left: 1rem;
  // right: 1rem;
  // transform: rotate(-45deg);

  btn.addEventListener('click', (_evt) => {
    btn.blur();

    if (!openState) {
      menu.style.transform = 'translateY(0%)';
      openState = true;

      // Cross 1
      patty1.style.top = '2.75rem';
      patty1.style.left = '1.5rem';
      patty1.style.right = '1.5rem';
      patty1.style.transform = 'rotate(45deg)';
      // Cross 2
      patty2.style.top = '2.75rem';
      patty2.style.bottom = 'auto';
      patty2.style.left = '1.5rem';
      patty2.style.right = '1.5rem';
      patty2.style.transform = 'rotate(-45deg)';
    } else {
      menu.style.transform = 'translateY(-100%)';
      openState = false;

      // Cross 1
      patty1.style.top = '2.25rem';
      patty1.style.left = '1.5rem';
      patty1.style.right = '1.5rem';
      patty1.style.transform = 'rotate(0deg)';
      // Cross 2
      patty2.style.top = 'auto';
      patty2.style.bottom = '2.25rem';
      patty2.style.left = '1.5rem';
      patty2.style.right = '1.5rem';
      patty2.style.transform = 'rotate(0deg)';
    }
  });
}

function main() {
  const currentYear = document.querySelector('#currentYear');
  setCurrentYear(currentYear);

  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav__menu');
  const patty1 = document.querySelector('.hamburger__patty1');
  const patty2 = document.querySelector('.hamburger__patty2');
  let openState = false;
  toggleMenu(btn, menu, patty1, patty2, openState);

  // Hide header on scroll-down, and show on scroll-up
  const header = document.querySelector('.nav');
  const body = document.body;
  let scrollingDown = false;
}

main();
