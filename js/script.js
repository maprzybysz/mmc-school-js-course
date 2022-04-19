const link = document.querySelector('a');
const img = document.querySelector('img');
const p = document.querySelector('p');

link.setAttribute('href', '#');
link.setAttribute('target', '_blank');

console.log(img.getAttribute('alt'));

console.log(p.hasAttribute('style'));

p.removeAttribute('style');
