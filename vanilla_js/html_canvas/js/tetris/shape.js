const SHAPES = [
  [[0,0], [0,1], [1,0], [1,1]], // square
  [[0,0], [0,1], [0,2], [0,3]], // line
  [[0,0], [1,0], [2,0], [3,0]], // horizontal line
  [[0,0], [1,0], [2,0], [3,0]], // L
  [[0,0], [1,0], [2,0], [2,1]], // inverted L
  [[0,0], [1,0], [2,0], [2,-1]], // T
  [[0,0], [1,0], [1,1], [2,0]], // Right side T
  [[0,0], [1,0], [1,1], [2,1]], // S shaped shape
];

class Shape {
  constructor(ctx, color = "cyan") {
    this.ctx = ctx;
    this.color = color;
    this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  }

  draw(x = 0, y = 0) {
    this.shape.forEach(([dx, dy]) => {
      const options = {
        ctx: this.ctx,
        x: (x * SQUARE_SIZE) + (dx * SQUARE_SIZE),
        y: (y * SQUARE_SIZE) + (dy * SQUARE_SIZE),
        color: this.color
      };
      const square = new Square(options);
      square.draw();
    });
  }
}
