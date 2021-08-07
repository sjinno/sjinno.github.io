// console.log('Hello, world!');

const hamburger = document.querySelector('.hamburger');
const hamburgerBtn = document.querySelector('.hamburger__btn');
// console.log(hamburgerBtn);
const nav = document.querySelector('.nav');

const hamburgerClose =
    '<a href="#" class="hamburger__btn hamburger--close"><span class="hamburger__btn__icon">&times;</span></a>';
const hamburgerOpen =
    '<a href="#" class="hamburger__btn hamburger--open"><span class="hamburger__btn__icon">三</span></a>';

hamburger.addEventListener('click', (e) => {
    if (e.target.classList[1] === 'hamburger--open') {
        hamburger.innerHTML = hamburgerClose;
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
    } else if (e.target.classList[1] === 'hamburger--close') {
        hamburger.innerHTML = hamburgerOpen;
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
    }
});
