const btns = document.querySelectorAll('button');

btns.forEach(btn =>
	// btn.addEventListener('click', function () {
	// 	console.log(this);
	// })
	// btn.addEventListener('click', function (e) {
	// 	console.log(e.target);
	// })
	btn.addEventListener('click', e => {
		console.log(this.textContent);
		console.log(e.target.textContent);
	})
);

const ob = {
	number: 123,
	showNumber() {
		console.log(this.number);
	},
	showNumber2() {
		const test = () => {
			console.log(this.number);
		};
		test();
	}
};

ob.showNumber();
ob.showNumber2;
