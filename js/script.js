const wrapper = document.querySelector('.wrapper');
const ulList = document.createElement('ul');

for (let i = 0; i < 10; i++) {
	const liItem = document.createElement('li');
	liItem.textContent = i;
	ulList.append(liItem);
}

wrapper.append(ulList);

const lastElement = ulList.lastChild;
lastElement.textContent = 'Jestem ostatnim elementem';
lastElement.style.backgroundColor = 'royalblue';
lastElement.style.padding = '20px 40px';
lastElement.style.fontSize = '48px';
