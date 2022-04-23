const user = {
	name: 'Mateusz',
	age: 23
};

const pet = {
	name: 'Drops',
	type: 'dog'
};

const userInfo = Object.assign({}, user, pet);
console.log(user);
console.log(pet);
console.log(userInfo);

const userCopy = Object.assign({}, user);
userCopy.age = 25;
console.log(userCopy);
console.log(user);
