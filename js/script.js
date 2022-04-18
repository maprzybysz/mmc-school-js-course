const arr = [1, 2, 3, 4];

console.log(arr);
console.log(...arr);

const numbers = (x, y, ...z) => {
	console.log(x, y, z);
};

numbers(13, 14, 16, 17, 18);
