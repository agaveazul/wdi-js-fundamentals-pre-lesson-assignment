var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

console.log(ghosts.inky);
console.log(ghosts.blinky);

console.log(ghosts['inky']);
console.log(ghosts['blinky']);

var ghostName = 'clyde';
console.log(ghosts[ghostName]);

// console.log(ghosts.ghostName); this does not work when you have a variable you want to call
