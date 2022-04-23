const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');

function Meal(name, price) {
	this.name = name;
	this.price = price;
}

const meal1 = new Meal('meal1', 100);
const meal2 = new Meal('meal2', 75);
const meal3 = new Meal('meal3', 50);

Meal.prototype.fn = function () {
	console.log(`${this.name} kosztuje ${this.price}`);
};

btn1.addEventListener('click', () => {
	meal1.fn();
});
btn2.addEventListener('click', () => {
	meal2.fn();
});
btn3.addEventListener('click', () => {
	meal3.fn();
});
