const img = document.querySelector('img');
console.log(img);

img.setAttribute(
	'src',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Herb_Legii_1343x1343.png/800px-Herb_Legii_1343x1343.png'
);

img.setAttribute('alt', 'herb');

setTimeout(() => console.log('late'), 2000);
