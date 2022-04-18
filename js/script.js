const numbers = [1, 2, 3, 4, 5, 6];

function multiply(x) {
	return x * 2;
}

console.log(numbers);
const newNumbers = numbers.map(multiply);
console.log(newNumbers);

const abc = ['a', 'b', 'c'];
const newAbc = numbers.concat(abc);
console.log(newAbc);

console.log(abc);
console.log(...abc);

const drinks = ['pepsi', 'juice'];
const meals = ['soup'];

const menu = [...drinks, ...meals];
console.log(menu);
