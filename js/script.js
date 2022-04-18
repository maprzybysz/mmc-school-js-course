const numbers = [1, 5, 13, 26, 48];

const newNumbers = numbers.map(number => number * 5);
console.log(newNumbers);

for (const number of newNumbers) {
	if (number % 2 === 0) {
		console.log(`Liczba parzysta: ${number}`);
	} else {
		console.log(`Liczba nieparzysta: ${number}`);
	}
}
