const person = {
	name: 'Mateusz',
	age: 23,
	job: 'Programmer',
	car: {
		brand: 'Mazda',
		model: '3'
	}
};

const showInfo = ({ name, job, age }) => {
	// const { name: firstName, job, age } = person;
	// const { name, job, age } = person;
	// console.log(`${person.name} pracuje jako ${person.job} i ma ${person.age} lata.`);
	console.log(`${name} pracuje jako ${job} i ma ${age} lata.`);
	// console.log(`${firstName} pracuje jako ${job} i ma ${age} lata.`);
};

showInfo(person);

const showInfo2 = ({ car: { brand, model } }) => {
	// console.log(car);
	console.log(`Mój samochód to ${brand} ${model}.`);
};

const showInfo3 = () => {
	const {
		car: { brand, model }
	} = person;
	console.log(`Mój samochód to ${brand} ${model}.`);
};

showInfo2(person);
showInfo3(person);
