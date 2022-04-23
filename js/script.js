// const myObject = {
// 	key: value
// };

const newUser = {
	name: 'Lisa',
	age: 23,
	car: {
		brand: 'BMW',
		model: 'M5',
		// sound: () => {
		// 	console.log('brum brum');
		// }
		sound() {
			console.log('brum brum');
		}
	}
};

newUser.car.sound();
