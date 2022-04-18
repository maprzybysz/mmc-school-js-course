let celsius;
let temp;

const fahrenheit = c => {
	celsius = c;
	temp = celsius * 1.8 + 32;

	console.log(`${celsius}°C = ${temp}°F`);
};

fahrenheit(20);
