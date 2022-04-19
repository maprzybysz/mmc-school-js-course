// const allCircles = document.getElementsByClassName('circle');
const allCircles = document.querySelectorAll('.circle');
const lime = document.querySelector('.lime');
const gold = document.querySelector('.gold');

const newCircle = document.createElement('div');
newCircle.classList.add('circle', 'purple');
gold.append(newCircle);

// allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)));

lime.addEventListener('click', e => {
	if (e.target.matches('.circle2')) {
		console.log(e.target);
		console.log('test');
	}
});
