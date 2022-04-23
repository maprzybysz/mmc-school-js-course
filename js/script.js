function User(name, age) {
	this.name = name;
	this.age = age;

	this.hello = function () {
		console.log(`Cześć ${this.name}!`);
	};
}

// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

const newUser = new User('Mateusz', 23);

console.log(newUser);

newUser.hello();
