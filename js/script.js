const btn = document.querySelector('button');

const test = e => {
	console.log(e.target.classList);
};

btn.addEventListener('click', test);
