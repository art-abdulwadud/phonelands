// Animation DOM Elements
const first = document.querySelector('.first');
const second = document.querySelector('.second');

let display = 0;
const animate = () => {
	AOS.init({ disable: true });
	if (display === 0) {
		AOS.init();
		display = 1;
		second.setAttribute('class', 'second d-none');
		first.setAttribute('class', 'two-secs first');
	} else {
		display = 0;
		AOS.init();
		first.setAttribute('class', 'first d-none');
		second.setAttribute('class', 'two-secs second');
	}
};

setTimeout(animate, 1000);
setInterval(animate, 5000);
