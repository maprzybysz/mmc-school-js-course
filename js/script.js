const pass = '2usdsadasd232sda!';

// if (pass.length > 10) {
// 	console.log('Masz dobre hasło');
// } else {
// 	console.log('Masz za krótkie hasło');
// }

// const color = 'blue';

// if (color == 'blue') {
// 	if (10 > 0) {
// 		console.log('true');
// 	} else {
// 		console.log('false');
// 	}
// } else {
// 	console.log('fasle');
// }

if (pass.length > 10 && pass.includes('!')) {
	console.log('Masz rewelacyjne hasło');
} else if (pass.length > 10) {
	console.log('Masz dobre hasło');
} else {
	console.log('Masz za krótkie hasło');
}
