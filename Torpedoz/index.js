const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const windowWidth = canvas.width = window.innerWidth;
const windowHeight = canvas.height = window.innerHeight;

ctx.fillStyle = '#004d99';
ctx.fillRect(0,0,windowWidth,windowHeight);


// Creating the player:
const player = new Player({
    position: {x: windowWidth/2, y: windowHeight/2}, 
    velocity: {x: 0, y: 0}
});

player.draw();


