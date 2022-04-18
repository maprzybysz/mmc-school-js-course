const cars = 'Audi,Mercedes,BMW,Nissan,Dodge';
console.log(cars);

const carsArray = cars.split(',');
console.log(carsArray);

carsArray.length > 3 ? console.log('Jest OK') : console.log('Nie jest OK');

if (carsArray.includes('Audi')) {
	carsArray.push('Mazda');
} else {
	carsArray.pop();
}
