import colors from "./colors.js";
import Circle from "./Circle.js";

function paused(ctx) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
  const center = { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 };
  ctx.fillRect(center.x - 150, center.y - 75, 275, 100);
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.fillText("Paused", center.x - 150, center.y);
}

function main() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let animationSubscription = null;

  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  ctx.font = "75px sans";

  window.addEventListener("resize", (e) => {
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
  });

  window.addEventListener("keypress", (e) => {
    // handle pause
    if (e.key === "p") {
      if (animationSubscription) {
        cancelAnimationFrame(animationSubscription);
        animationSubscription = null;
        paused(ctx);
      } else {
        animate();
      }
    }
  });

  // canvas.addEventListener('mousemove', (e) => {
  //     mouseX = e.offsetX;
  //     mouseY = e.offsetY;
  //     console.log(mouseX, mouseY)
  // })

  const circleArray = [];

  for (let i = 0; i < 1000; i++) {
    let radius = 3;
    let randX = Math.random() * (window.innerWidth - radius * 2) + radius;
    let randY = Math.random() * (window.innerHeight - radius * 2) + radius;
    let randDY = (Math.random() - 0.5) * 6;
    let randDX = (Math.random() - 0.5) * 6;
    let randColor = colors[Math.floor(Math.random() * (colors.length - 1))];

    circleArray.push(
      new Circle(randX, randY, randDX, randDY, radius, randColor, ctx)
    );
  }

  const animate = () => {
    animationSubscription = requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    for (const element of circleArray) {
      element.update();
    }
  };

  animate();
}

main();
