class Animal {
	constructor(name) {
		this.name = name;
	}

	sound() {
		console.log(`Zwierzak robi "hau hau.`);
	}
}

class Dog extends Animal {
	constructor(name, age) {
		super(name);
		this.age = age;
	}

	test() {
		console.log('test');
	}
}

class Cat extends Animal {
	sound() {
		console.log('miau');
	}
}

const dog = new Dog('puszek', 6);

console.log(dog);
dog.sound();

const cat = new Cat('okruszek');
cat.sound();
