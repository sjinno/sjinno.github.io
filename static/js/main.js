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

function applyRippleEffectToRippleBtn(rippleBtn, rippleSource) {
  rippleBtn.addEventListener('click', async (evt) => {
    const absXPos = evt.pageX;
    const absYPos = evt.pageY;
    const btnOffsetLeft = evt.target.offsetLeft;
    const btnOffsetTop = evt.target.offsetTop;
    const posX = absXPos - btnOffsetLeft;
    const posY = absYPos - btnOffsetTop;
    // console.log(evt);
    console.log(posX, posY);
    rippleSource.style.top = `${posY}px`;
    rippleSource.style.left = `${posX}px`;

    // console.log(rippleSource.classList);
    // console.log(rippleSource.style.top);
    // console.log(rippleSource.style.left);
    // rippleSource.classList.add('btn--ripple__animate');

    setTimeout(() => {
      // console.log(evt.clientX);
      rippleSource.classList.add('btn--ripple__animate');
    });
    // await rippleSource.classList.add('btn--ripple__animate');

    rippleSource.classList.remove('btn--ripple__animate');
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
  let scrollingDown = false;

  window.onscroll = function (_evt) {
    if (this.scrollY > 80) {
      header.style.visibility = 'hidden';
      header.style.opacity = '0';
      header.style.height = '0';
      btn.style.visibility = 'hidden';
      btn.style.opacity = '0';
    }

    if (!scrollingDown) {
      header.style.visibility = 'visible';
      header.style.opacity = '1';
      header.style.height = '6.4rem';
      btn.style.visibility = 'visible';
      btn.style.opacity = '1';
    }

    scrollingDown = this.oldScroll < this.scrollY;
    this.oldScroll = this.scrollY;
  };

  // Ripple effect
  const rippleBtn = document.querySelector('.btn--ripple');
  const rippleSource = document.querySelector('.btn--ripple__source');
  if (rippleBtn) applyRippleEffectToRippleBtn(rippleBtn, rippleSource);
}

main();
