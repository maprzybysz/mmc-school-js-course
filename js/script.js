const name = 'something';

const user = {
	name: 'Mateusz',
	showName() {
		console.log(this);
		console.log(this.name);
	}
};

user.showName();
