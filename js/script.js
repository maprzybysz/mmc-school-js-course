const colors = ['red'];

colors.unshift('gold');
colors.push('green');

for (let i = 0; i < colors.length; i++) {
	console.log(`Mój ulubiony kolor to: ${colors[i].toUpperCase()}`);
}

for (let i = 0; i < colors.length; i++) {
	console.log(`Mój ulubiony kolor to: ${colors[i].charAt(0).toUpperCase() + colors[i].slice(1)}`);
}
