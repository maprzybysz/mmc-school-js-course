const div = document.querySelector('.square');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

const helloFn = () => {
	console.log('cześć');
};

const blueFn = () => {
	div.style.backgroundColor = 'blue';
};

const redFn = () => {
	div.style.backgroundColor = 'red';
};

const toggleFn = () => {
	p1.classList.toggle('show');
	p2.classList.toggle('show');
};

btn1.addEventListener('dblclick', helloFn);

div.addEventListener('mouseover', redFn);
div.addEventListener('mouseout', blueFn);

btn2.addEventListener('click', toggleFn);
