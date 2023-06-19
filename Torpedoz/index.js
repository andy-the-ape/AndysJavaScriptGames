const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const windowWidth = canvas.width = window.innerWidth;
const windowHeight = canvas.height = window.innerHeight;

// Creating the player:
const player = new Player({
    position: {x: windowWidth/2, y: windowHeight/2}, 
    velocity: {x: 0, y: 0}
});

const keys = {
    w: { pressed: false },
    s: { pressed: false },
    a: { pressed: false },
    d: { pressed: false }
}

function animate() {
    window.requestAnimationFrame(animate);
    
    ctx.fillStyle = '#004d99';
    ctx.fillRect(0,0,windowWidth, windowHeight);
    
    player.update();

    player.velocity.x = 0;
    player.velocity.y = 0;
    if (keys.w.pressed) {
        player.velocity.x = Math.cos(player.rotation) * 3;
        player.velocity.y = Math.sin(player.rotation) * 3;
    }
    if (keys.s.pressed) {
        player.velocity.x = Math.cos(player.rotation) * -2;
        player.velocity.y = Math.sin(player.rotation) * -2;
    }
    if (keys.a.pressed) player.rotation -= 0.04;
    if (keys.d.pressed) player.rotation += 0.04;
   
}

animate();

// Event listeners:
window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyW':
            keys.w.pressed = true;
            break;
        case 'KeyS':
            keys.s.pressed = true;
            break;
        case 'KeyA':
            keys.a.pressed = true;
            break;
        case 'KeyD':
            keys.d.pressed = true;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyW':
            keys.w.pressed = false;
            break;
        case 'KeyS':
            keys.s.pressed = false;
            break;
        case 'KeyA':
            keys.a.pressed = false;
            break;
        case 'KeyD':
            keys.d.pressed = false;
            break;
    }
});