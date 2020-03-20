// DOM Elements
const menuToggle = document.querySelector('.toggler');
const nav = document.querySelector('#nav');
const droplink = document.querySelector('.droplink');
const navDropdown = document.querySelector('#nav-dropdown-wrapper');
const less = document.querySelector('.less');
const more = document.querySelector('.more');

// Toggle navbar on smaller devices
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

// Toggle the dropdown menu smaller devices
let dropdownActive = false;
droplink.addEventListener('click', () => {
	if (dropdownActive) {
		navDropdown.setAttribute('class', 'nav-dropdown');
		dropdownActive = false;
	} else {
		navDropdown.setAttribute('class', 'nav-dropdown small-nav-dropdown');
		dropdownActive = true;
	}
});
