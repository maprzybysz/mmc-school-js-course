const numbers = [0, 10, 23, 100, 252, 258, 2000];

function isEven(x) {
	return x % 2 === 0;
}

console.log(numbers.filter(isEven));

numbers.forEach(number => console.log(number));
console.log(numbers.includes(0));

console.log(numbers.indexOf(23));
