const movie = {
	title: 'Avengers'
};

function showMovie(price, cinema) {
	console.log(`Film ${this.title}, cena: ${price}, kino: ${cinema}.`);
}

showMovie(30, 'SuperKINO');

showMovie.call(movie, 35, 'SUperKINO2');
showMovie.apply(movie, [35, 'SuperKINO2']);
