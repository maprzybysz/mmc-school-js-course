const arrowFunction = () => {};

const test = name => {
	console.log(`Mam na imię ${name}.`);
};

test('Mateusz');

const test3 = name => console.log(`Mam na imię ${name}.`);

test3('Mateusz');

function add(num1, num2) {
	return num1 + num2;
}

const add2 = (num1, num2) => num1 + num2; //return
console.log(add2(5, 5));

