import colors from './colors.js';
const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d')
let sWidth = ctx.canvas.width;
let sHeight = ctx.canvas.height;

console.log(colors.length)


class Circle {
    constructor (x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color
    }

    draw () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill()
        
    }

    update () {

        if (this.x + this.radius > sWidth || this.x - this.radius < 0) {
        this.dx = -this.dx
        }

        if (this.y + this.radius > sHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy
        this.draw()
    }

}

const circleArray = []

for (let i = 0; i < 1000; i++) {
    let radius = 3
    let randX = (Math.random() * (window.innerWidth - radius * 2) + radius)
    let randY = (Math.random() * (window.innerHeight - radius * 2) + radius)
    let randDY = (Math.random() - 0.5) * 6
    let randDX = (Math.random() - 0.5) * 6
    let randColor = colors[Math.floor(Math.random() * (colors.length - 1))]

    circleArray.push(new Circle(randX, randY, randDX, randDY, radius, randColor))        
}

let bircle = new Circle(200, 200, 5, -5, 20)

const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update() 
    }
    

    
}

animate()