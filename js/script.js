let score;

const fnOdd = x => console.log(`${x} jest nieparzysta`);
const fnEven = x => console.log(`${x} jest parzysta`);
const add = (x, y) => {
	score = x + y;
	if (score % 2 === 0) {
		fnOdd(score);
	} else {
		fnEven(score);
	}
};

add(2, 8);
add(2, 9);
