const checkAge = age => {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			resolve();
		} else {
			reject();
		}
	});
};

const doubleCheck = () => {
	return new Promise((resolve, reject) => {
		console.log('Sprawdzam jeszcze raz...');
		setTimeout(() => {
			resolve('Faktycznie, wiek się zgadza.');
		}, 1000);
	});
};

// checkAge(18)
// 	.then(() => {
// 		console.log('Chyba możesz wejść');
// 		return doubleCheck();
// 	})
// 	.then(res => console.log(res))
// 	.then(() => console.log('Weryfikacja zakończona'))
// 	.catch(err => console.error(err));

async function test() {
	try {
		await checkAge(2);
		console.log('Chyba możesz wejść');
		await doubleCheck();
	} catch {
		console.error('Masz za mało lat!');
	}
}

test();
