const user = {
	name: 'Mateusz',
	age: 23
};

for (const data in user) {
	console.log(data + ': ' + user[data]);
}
