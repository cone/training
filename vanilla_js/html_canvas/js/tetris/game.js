const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

const shape = new Shape({ctx, x: 15});
shape.draw();

const allowedEvents = ["ArrowLeft", "ArrowRight"];
window.addEventListener("keydown", event => {
  if (!allowedEvents.includes(event.key)) return;
  event.preventDefault();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (event.key === "ArrowLeft") {
    shape.moveLeft();
  }
  if (event.key === "ArrowRight") {
    shape.moveRight();
  }
});
