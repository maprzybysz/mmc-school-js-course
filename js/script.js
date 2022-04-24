// setTimeout(() => {
// 	console.log(1);
// 	setTimeout(() => {
// 		console.log(2);
// 		setTimeout(() => {
// 			console.log(3);
// 			setTimeout(() => {
// 				console.log(4);
// 				setTimeout(() => {
// 					console.log(5);
// 				}, 300);
// 			}, 300);
// 		}, 300);
// 	}, 300);
// }, 300);

// const newPromise = () => {};

// newPromise()
// 	.then(() => {
// 		console.log('1');
// 		return newPromise();
// 	})
// 	.then(() => {
// 		console.log('1');
// 		return newPromise();
// 	})
// 	.catch(err => console.log(err));

const test = new Promise((resolve, reject) => {
	if (true) {
		resolve('jest ok');
	} else {
		reject('blad');
	}
});

test.then(info => console.log(info)).catch(err => console.log(err));
