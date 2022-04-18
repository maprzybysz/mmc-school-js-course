const ulList = document.createElement('ul');
const liItem = document.createElement('li');
liItem.textContent = 'cześć';

document.body.appendChild(ulList);
ulList.appendChild(liItem);

const myDiv = document.querySelector('#myDiv');
const pItem = document.createElement('p');
pItem.textContent = 'myP';
myDiv.appendChild(pItem);
