const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let sWidth = ctx.canvas.width;
let sHeight = ctx.canvas.height;
let cx = sWidth / 2;
let cy = sHeight / 2;

class Circle {
    constructor(x, y, vector, radius, color) {
        this.x = x;
        this.y = y;
        this.vector = {
            x: vector.x,
            y: vector.y,
        };
        this.accel = {
            x: 0,
            y: 0,
        };
        this.radius = radius;
        this.color = color;
        this.speedLimit = 10;
        this.fric = 0.97;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    gravity() {
        if (this.vector.y < 9.8) {
            this.vector.y += 0.05;
        }
    }

    checkWalls() {
        if (this.x - this.radius < 0) {
            this.vector.x = 0;
            this.x = this.radius;
        }
        if (this.x + this.radius > sWidth) {
            this.vector.x = 0;
            this.x = sWidth - this.radius;
        }

        if (this.y - this.radius < 0) {
            this.vector.y = 0;
            this.y = this.radius;
        }
        if (this.y + this.radius > sHeight) {
            this.vector.y = 0;
            this.y = sHeight - this.radius;
        }
    }

    velocityChecks() {
        if (this.vector.x < this.speedLimit) {
            this.vector.x += this.accel.x;
        }

        if (this.vector.y < this.speedLimit) {
            this.vector.y = this.vector.y + this.accel.y;
        }
        if (Math.abs(this.vector.x) < 0.03) {
            this.vector.x = 0;
        }
        if (Math.abs(this.vector.y) < 0.03) {
            this.vector.y = 0;
        }

        this.checkWalls();
        this.vector.y *= this.fric;
        this.vector.x *= this.fric;
    }

    update() {
        this.velocityChecks();
        this.gravity();

        this.x += this.vector.x;
        this.y += this.vector.y;

        this.draw();
    }
}

const onKeyPress = (e) => {
    e.preventDefault();
    if (e.keyCode === 39) {
        circle.accel.x = 0.3;
    }
    if (e.keyCode === 37) {
        circle.accel.x = -0.3;
    }
    if (e.keyCode == 38) {
        circle.accel.y = -0.3;
    }
    if (e.keyCode == 40) {
        circle.accel.y = 0.3;
    }
};

const onKeyUp = (e) => {
    e.preventDefault();
    if (e.keyCode == 39) {
        circle.accel.x -= 0.3;
    }
    if (e.keyCode == 37) {
        circle.accel.x += 0.3;
    }
    if (e.keyCode == 38) {
        circle.accel.y += 0.3;
    }
    if (e.keyCode == 40) {
        circle.accel.y -= 0.3;
    }
};

let circle = new Circle(cx, cy, { x: 0, y: 0 }, 5, 'yellow');

const animate = () => {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    window.onkeydown = onKeyPress;
    window.onkeyup = onKeyUp;

    circle.update();
};

animate();

//const circleArray = []

// for (let i = 0; i < 1000; i++) {
//     let radius = 3
//     let randX = (Math.random() * (window.innerWidth - radius * 2) + radius)
//     let randY = (Math.random() * (window.innerHeight - radius * 2) + radius)
//     let randDY = (Math.random() - 0.5) * 6
//     let randDX = (Math.random() - 0.5) * 6
//     let randColor = colors[Math.floor(Math.random() * (colors.length - 1))]

//     circleArray.push(new Circle(randX, randY, randDX, randDY, radius, randColor))
// }

// class Triangle {
//     constructor () {
//         //this.angle = Math.asin(.5 * 59 /  30);
//         this.center = {x: cx, y: cy}
//         this.x1 = cx;
//         this.y1 = this.center.y - 15 ;
//         this.x2 = this.center.x - 15;
//         this.y2 = this.center.y + 30;
//         this.x3 = this.center.x + 15;
//         this.y3 = this.center.y + 30;

//     }

//     // -10px from mouse pos
//     draw () {
//         ctx.strokeStyle = 'red'
//         ctx.beginPath()
//         ctx.moveTo(this.x1, this.y1)
//         ctx.lineTo(this.x2, this.y2)
//         ctx.lineTo(this.x3, this.y3)
//         ctx.closePath()
//         ctx.stroke()
//     }

//     update () {

//         this.center.x = mouseX;
//         this.center.y = mouseY - 5;
//         this.x1 = this.center.x;
//         this.y1 = this.center.y - 15 ;
//         this.x2 = this.center.x - 15;
//         this.y2 = this.center.y + 30;
//         this.x3 = this.center.x + 15;
//         this.y3 = this.center.y + 30;

//         this.draw()
//     }
// }
