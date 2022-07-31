export default class Triangle {
        constructor () {
            //this.angle = Math.asin(.5 * 59 /  30);
            this.center = {x: cx, y: cy}
            this.x1 = cx;
            this.y1 = this.center.y - 15 ;
            this.x2 = this.center.x - 15;
            this.y2 = this.center.y + 30;
            this.x3 = this.center.x + 15;
            this.y3 = this.center.y + 30;

        }

        // -10px from mouse pos
        draw () {
            ctx.strokeStyle = 'red'
            ctx.beginPath()
            ctx.moveTo(this.x1, this.y1)
            ctx.lineTo(this.x2, this.y2)
            ctx.lineTo(this.x3, this.y3)
            ctx.closePath()
            ctx.stroke()
        }

        update () {

            this.center.x = mouseX;
            this.center.y = mouseY - 5;
            this.x1 = this.center.x;
            this.y1 = this.center.y - 15 ;
            this.x2 = this.center.x - 15;
            this.y2 = this.center.y + 30;
            this.x3 = this.center.x + 15;
            this.y3 = this.center.y + 30;


            this.draw()
        }
    }