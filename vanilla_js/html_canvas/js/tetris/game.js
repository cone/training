const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

const shape = new Shape(ctx);
shape.draw(10, 10);
