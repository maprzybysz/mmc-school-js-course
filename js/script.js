// console.log(this);

// function test() {
// 	console.log(this);
// }

// test();

const person = {
	name: 'Mefiu',
	// showInfo() {
	// 	console.log(this);
	// 	console.log(this.name);
	// }
	address: {
		city: 'Kraków',
		showCity: function () {
			console.log(this);
		}
	}
};
person.address.showCity();

function Food(name) {
	this.name = name;
}

const meal1 = new Food('schabowy');
const meal2 = new Food('pepsi');

console.log(meal1, meal2);
