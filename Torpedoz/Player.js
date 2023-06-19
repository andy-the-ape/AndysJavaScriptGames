class Player {
    constructor({position, velocity}) {
        this.position = position; // {x, y}
        this.velocity = velocity; // {x, y}
        this.rotation = 0;
    }

    draw() {
        // Drawing ship:
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.rotation);
        ctx.translate(-this.position.x, -this.position.y);
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x+20, this.position.y);
        ctx.lineTo(this.position.x+50, this.position.y-10);
        ctx.lineTo(this.position.x+15, this.position.y-25);
        ctx.lineTo(this.position.x-10, this.position.y-20);
        ctx.lineTo(this.position.x-20, this.position.y);
        ctx.lineTo(this.position.x-10, this.position.y+20);
        ctx.lineTo(this.position.x+15, this.position.y+25);
        ctx.lineTo(this.position.x+50, this.position.y+10);
        ctx.lineTo(this.position.x+20, this.position.y);
        ctx.closePath();

        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.restore();
    }

    update() {

       
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw();
    }

}