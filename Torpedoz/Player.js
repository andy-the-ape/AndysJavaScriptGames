class Player {
    constructor({position, velocity, color, radius}) {
        this.position = position; // {x, y}
        this.velocity = velocity; // {x, y}
    };

    draw() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.position.x, this.position.y, 50, 50);
    };
}