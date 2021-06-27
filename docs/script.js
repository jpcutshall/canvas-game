import colors from './colors.js';
const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d')
let sWidth = ctx.canvas.width;
let sHeight = ctx.canvas.height;
let cx = sWidth / 2
let cy = sHeight / 2

let mouseX = 0
let mouseY = 0

canvas.addEventListener('mousemove', (e) => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    console.log(mouseX, mouseY)
})

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



class Circle {
    constructor (x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill()
        
    }

    // checkMouse() {
    //     let distance = Math.hypot((mouseX - this.x), (mouseY - this.y))
    //     if (distance < 30) {
    //         this.dx = -this.dx
    //         this.dy = -this.dy
    //     }
    // }

    update() {

        if (this.x + this.radius > sWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }

        if (this.y + this.radius > sHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        //this.checkMouse()

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



const animate = () => {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update() 
    }


    
}

animate()