const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

/* ========== SQUARES ========== */
const squareSize = 100;
ctx.fillStyle = "cyan";
ctx.fillRect(0, 0, squareSize, squareSize);
// Add contour
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, squareSize, squareSize);

/* ========== CIRCLES ========== */
ctx.beginPath();
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
// Add contour
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();

/* ========== LINES ========== */
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "yellow";
ctx.moveTo(0, 0);
ctx.lineTo(500, 500);
ctx.stroke();

/* ========== TRIANGLES ========== */
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(400, 300);
ctx.lineTo(350, 250);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
// Add contour
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();
