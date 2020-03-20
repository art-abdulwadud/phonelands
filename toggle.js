// DOM Elements
const menuToggle = document.querySelector('.toggler');
const smallNav = document.querySelector('.small-nav');
const nav = document.querySelector('#nav');
const less = document.querySelector('.less');
const more = document.querySelector('.more');

// Toggle navbar for smaller devices
let smallNavActive = false;

menuToggle.addEventListener('click', () => {
	if (smallNavActive) {
		nav.setAttribute('class', 'navlist');
		smallNavActive = false;
	} else {
		nav.setAttribute('class', 'small-nav');
		smallNavActive = true;
	}
});
