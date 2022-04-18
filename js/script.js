const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);

numbers.unshift(100, 200);

console.log(numbers);

numbers.shift(numbers);
console.log(numbers);

const colors = ['red', 'green'];
console.log(colors);

colors.push('gold');
console.log(colors);

colors.pop();
console.log(colors);
