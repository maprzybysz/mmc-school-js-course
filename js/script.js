const numbers = [0.5, 4, 'abc'];
const names = ['Lisa', 'Lily', 'Adam'];

numbers.forEach(num => console.log(num * num));

const bigNames = names.map(name => name.toUpperCase());
console.log(bigNames);

const showBignames = name => {
	return name.toUpperCase();
};

const newNames = names.map(showBignames);
console.log(newNames);
