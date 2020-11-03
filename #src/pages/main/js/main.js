//burger menu
const burger = document.querySelector('.header__burger'),
	nav = document.querySelector('.nav'),
	logo = document.querySelector('.main-logo'),
	body = document.querySelector('body'),
	navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
	body.classList.toggle('lock');
	burger.classList.toggle('active');
	logo.classList.toggle('active');
	nav.classList.toggle('active');
});

for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener('click', function () {
		burger.classList.remove('active');
		nav.classList.remove('active');
		body.classList.remove('lock');
		logo.classList.remove('active');
	})
};

nav.addEventListener('click', function () {
	if (nav.classList.contains('active') && !event.target.classList.contains('nav__list')) {
		burger.classList.remove('active');
		nav.classList.remove('active');
		body.classList.remove('lock');
		logo.classList.remove('active');
	};
});
