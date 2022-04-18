const numbers = [1, 2, 3, 4, 5, 6];

const arr = [true, 123, 'abcd', [1, 2, 3]];

const btn1 = document.querySelector('button:nth-of-type(1)');
console.log(btn1);

const btns = document.querySelectorAll('button');
console.log(btns);

function btnMsg(e) {
	console.log(`kliknięto ${e.target.textContent}`);
}

btns.forEach(btn => btn.addEventListener('click', btnMsg));
