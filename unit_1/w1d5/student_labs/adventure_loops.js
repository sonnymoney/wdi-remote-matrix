var hitpoints = 10;
var hoard = ['ghoul', 'goblin', 'vampire', 'demon', 'eyeball'
];
for (var i=0; i < hoard.length; i++) {
  console.log(hoard[i]);
}
if (Math.random() > .5) {
        console.log('The player has struck the ' + hoard[i]);
        hoard[i] = null;
    }
else {
  console.log(hoard[i] + 'struck the player');
}
