const x = 100;

if (x > 20) {
	console.log(`${x} > 20`);
} else {
	console.log(`${x} < 20`);
}

x > 20 ? console.log(`${x} > 20`) : console.log(`${x} < 20`);

const isLoggedIn = true;

function loggedIn() {
	console.log('Użytkownik jest zalogowany');
}

function loggedOut() {
	console.log('Użytkownik nie jest zalogowany');
}

isLoggedIn ? loggedIn() : loggedOut();
