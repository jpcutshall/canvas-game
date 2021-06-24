const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let sWidth = ctx.canvas.width;
let sHeight = ctx.canvas.height;

console.log((sWidth / 2))

ctx.fillStyle = 'green';
// let triangle = new Path2D();
// triangle.moveTo((sWidth / 2)+10, (sHeight / 2))
// triangle.lineTo((sWidth / 2), (sHeight / 2)-20)
// triangle.lineTo((sWidth / 2)-10, (sHeight / 2))
// ctx.fill(triangle)

class Player {
    constructor(){
        this.triangle = new Path2D();
        this.triangle.moveTo((sWidth / 2)+10, (sHeight / 2))
        this.triangle.lineTo((sWidth / 2), (sHeight / 2)-20)
        this.triangle.lineTo((sWidth / 2)-10, (sHeight / 2))
        ctx.fill(this.triangle)
                      
    }



    
}
let player = new Player()

function init(){
    
    setInterval(draw, 100)
}


function draw(){
    player.triangle.transform(1, 0, 0, 1, 1, 1)
}