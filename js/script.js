// const test = document.querySelector('ul li');
// console.log(test);

const test2 = document.getElementsByTagName('li');

const ulList = document.querySelector('ul');
console.log(ulList);

const liItem = ulList.querySelector('li');
console.log(liItem);

const liItems = document.querySelectorAll('li');
console.log(liItems);

const newLi = document.createElement('li');
ulList.appendChild(newLi).textContent = 'new';

console.log(liItems.length);
console.log(test2.length);
