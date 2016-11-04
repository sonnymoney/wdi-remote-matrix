var hoard = ['ghoul', 'goblin', 'zebra', 'human'];
var hitpoints = 1;

for (var i=0; i < hoard.length; i++) {
	console.log('the ' + hoard[i] + ' is attacking!');

	if (Math.random() > .5) {
		console.log('The player has struck the ' + hoard[i]);
		hoard[i] = null;
	} else {
		console.log('The ' + hoard[i] + ' has struck the player!');
		hitpoints--;
		console.log('remaining hitpoints: ' + hitpoints);
		if (hitpoints == 0) {
			console.log('You have succumbed');
			// break;
		}
	}
}

console.log('These are the remaining monsters: ');
for (var i=0; i < hoard.length; i++) {
	if (hoard[i]) {
		console.log(hoard[i]);
	}
}
