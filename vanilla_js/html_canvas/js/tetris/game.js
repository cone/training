const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

const shape = new Shape({ctx, x: 15});
shape.draw();

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const allowedEvents = ["ArrowLeft", "ArrowRight"];
window.addEventListener("keydown", event => {
  if (!allowedEvents.includes(event.key)) return;
  event.preventDefault();

  if (event.key === "ArrowLeft" && shape.leftMostX() - 1 >= 0) {
    clearCanvas();
    shape.moveLeft();
  }
  if (event.key === "ArrowRight" && shape.rightMostX() + 1 <= CANVAS_MAX_WIDTH_SQUARES) {
    clearCanvas();
    shape.moveRight();
  }
});

const moveDown = () => {
  if (shape.downMostY() + 1 > CANVAS_MAX_HEIGHT_SQUARES) return;

  clearCanvas();
  shape.moveDown();
};

setInterval(moveDown, 1000);
