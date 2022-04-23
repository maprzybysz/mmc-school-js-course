function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHi = function () {
	console.log(`Cześć, jestem ${this.name}.`);
};

const person1 = new Person('Mateusz', 23);
person1.sayHi();

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log(`Cześć, jestem ${this.name}.`);
	}
}

const person2 = new Person2('Mefiu', 24);

person2.sayHi();
console.log(person2);
