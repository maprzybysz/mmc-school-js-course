const x = 50;
let text;

if (x >= 100) {
	text = 'X > 100';
} else if (x < 100 && x > 30) {
	text = 'X jest średniakiem';
} else {
	text = 'X jest mały';
}

console.log(text.toUpperCase());
