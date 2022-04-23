function test() {
	console.log(this);
	console.log(this.name);
}

const car1 = {
	name: 'Audi'
};

const car2 = {
	name: 'Doge'
};

const car3 = {
	name: 'BMW'
};

test.bind(car1)();
