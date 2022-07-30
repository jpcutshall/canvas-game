import colors from './colors.js';
import Circle from "./Circle.js";


function main() {

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    let animationSubscription = null;

    let mouseX = 0
    let mouseY = 0

    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    let sWidth = ctx.canvas.width;
    let sHeight = ctx.canvas.height;
    let cx = sWidth / 2;
    let cy = sHeight / 2;

    window.addEventListener("resize", (e) => {
        ctx.canvas.height = window.innerHeight;
        ctx.canvas.width = window.innerWidth;
    })

    window.addEventListener("keypress", (e) => {
        console.log(e.key)
        if (e.key === "c") {
            cancelAnimationFrame(animationSubscription)
        }
    })

    // canvas.addEventListener('mousemove', (e) => {
    //     mouseX = e.offsetX;
    //     mouseY = e.offsetY;
    //     console.log(mouseX, mouseY)
    // })

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


    const circleArray = []

    for (let i = 0; i < 1000; i++) {
        let radius = 3
        let randX = (Math.random() * (window.innerWidth - radius * 2) + radius)
        let randY = (Math.random() * (window.innerHeight - radius * 2) + radius)
        let randDY = (Math.random() - 0.5) * 6
        let randDX = (Math.random() - 0.5) * 6
        let randColor = colors[Math.floor(Math.random() * (colors.length - 1))]

        circleArray.push(new Circle(randX, randY, randDX, randDY, radius, randColor, ctx))
    }


    const animate = () => {
        animationSubscription = requestAnimationFrame(animate)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

        for (const element of circleArray) {
            element.update()
        }

    }

    animate()
}

main()


