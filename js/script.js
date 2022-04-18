const numbers = [5, 8, 10, 23, 48, 60];

for (const number of numbers) {
	console.log(number / 5);
}

for (const number of numbers) {
	if (number % 2 === 0) {
		console.log(`Liczba ${number} jest parzysta`);
	} else {
		console.log(`Liczba ${number} nie jest parzysta`);
	}
}
