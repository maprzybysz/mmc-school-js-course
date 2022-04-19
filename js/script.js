const lime = document.querySelector('.lime');
const blue = document.querySelector('.blue');
const gold = document.querySelector('.gold');

const infoLime = () => {
	console.log('%clime', 'color: lime; text-transform: uppercase');
};

const infoBlue = () => {
	console.log('%cblue', 'color: blue; text-transform: uppercase');
};

const infoGold = e => {
	e.stopPropagation();
	console.log('%cgold', 'color: gold; text-transform: uppercase');
};

blue.addEventListener('click', infoBlue);
gold.addEventListener('click', infoGold);
