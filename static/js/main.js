'use strict';
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function (evt) {
    var nav = document.querySelector('.nav');
    var hamburgerClose =
        '<a href="#" class="hamburger__btn hamburger--close"><span class="hamburger__btn__icon">&times;</span></a>';
    var hamburgerOpen =
        '<a href="#" class="hamburger__btn hamburger--open"><span class="hamburger__btn__icon">三</span></a>';
    var target = evt.target;
    if (target.classList[1] === 'hamburger--open') {
        hamburger.innerHTML = hamburgerClose;
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
    } else if (target.classList[1] === 'hamburger--close') {
        hamburger.innerHTML = hamburgerOpen;
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
    }
});
window.onclick = function (evt) {
    var nav = document.querySelector('.nav');
    var hamburgerOpen =
        '<a href="#" class="hamburger__btn hamburger--open"><span class="hamburger__btn__icon">三</span></a>';
    var target = evt.target;
    if (target.className === 'nav') {
        hamburger.innerHTML = hamburgerOpen;
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
    }
};
