const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const URL = 'https://dog.ceo/api/breeds/image/random';

axios.get(URL).then(res => two.setAttribute('src', res.data.message));

async function showImage() {
	const res = await axios.get(URL);
	three.setAttribute('src', res.data.message);
}

showImage();
