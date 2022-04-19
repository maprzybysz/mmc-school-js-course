const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('.remove');
const toggleBtn = document.querySelector('.toggle');
const text = document.querySelector('p');

const addClass = () => {
	text.classList.add('test');
};

const removeClass = () => {
	text.classList.remove('test');
};
addBtn.addEventListener('click', addClass);
removeBtn.addEventListener('click', removeClass);

const toggleClass = () => {
	text.classList.toggle('test');
};

toggleBtn.addEventListener('click', toggleClass);
