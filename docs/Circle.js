export default class Circle {
    constructor (x, y, dx, dy, radius, color, ctx) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill()

    }

    // checkMouse() {
    //     let distance = Math.hypot((mouseX - this.x), (mouseY - this.y))
    //     if (distance < 30) {
    //         this.dx = -this.dx
    //         this.dy = -this.dy
    //     }
    // }

    update() {

        if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }

        if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        //this.checkMouse()

        this.x += this.dx
        this.y += this.dy
        this.draw()
    }


}