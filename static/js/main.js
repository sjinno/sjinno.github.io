"use strict";
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', (evt) => {
        const nav = document.querySelector('.nav');
        const hamburgerClose = '<a href="#" class="hamburger__btn hamburger--close"><span class="hamburger__btn__icon">&times;</span></a>';
        const hamburgerOpen = '<a href="#" class="hamburger__btn hamburger--open"><span class="hamburger__btn__icon">三</span></a>';
        const target = evt.target;
        if (target.classList[1] === 'hamburger--open') {
            hamburger.innerHTML = hamburgerClose;
            nav.style.visibility = 'visible';
            nav.style.opacity = '1';
        }
        else if (target.classList[1] === 'hamburger--close') {
            hamburger.innerHTML = hamburgerOpen;
            nav.style.opacity = '0';
            nav.style.visibility = 'hidden';
        }
    });
    window.onclick = (evt) => {
        const nav = document.querySelector('.nav');
        const hamburgerOpen = '<a href="#" class="hamburger__btn hamburger--open"><span class="hamburger__btn__icon">三</span></a>';
        const target = evt.target;
        if (target) {
            if (target.className === 'nav') {
                hamburger.innerHTML = hamburgerOpen;
                nav.style.opacity = '0';
                nav.style.visibility = 'hidden';
            }
        }
    };
}
