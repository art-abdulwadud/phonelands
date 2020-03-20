// DOM Elements
const menuToggle = document.querySelector('.toggler');
const smallNav = document.querySelector('.small-nav');
const less = document.querySelector('.less');
const more = document.querySelector('.more');

// Toggle navbar for smaller devices
let smallNavActive = false;

menuToggle.addEventListener('click', () => {
	if (smallNavActive) {
		smallNavActive = false;
		smallNav.style.display = 'none';
	} else {
		smallNavActive = true;
		smallNav.style.display = 'block';
	}
});
