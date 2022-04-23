function User(name, age) {
	this.name = name;
	this.age = age;
}

// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

const newUser = new User('Mateusz', 23);
const newUser2 = new User('Tomasz', 34);

console.log(newUser);
console.log(newUser2);
User.prototype.country = 'Polska';
User.prototype.hello = function () {
	console.log(`Cześć ${this.name}!`);
};
console.log(newUser.country);
newUser.hello();
