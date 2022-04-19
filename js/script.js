const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');

// btn1.addEventListener('click', () => {
// 	console.log('click');
// });

// btn2.addEventListener('mouseover', () => {
// 	console.log('mouseover');
// });

// btn3.addEventListener('dblclick', () => {
// 	console.log('double click');
// });

const btns = document.querySelectorAll('button');
console.log(btns);

const smile = () => {
	console.log(':)');
};

btns.forEach(btn => btn.addEventListener('click', smile));
