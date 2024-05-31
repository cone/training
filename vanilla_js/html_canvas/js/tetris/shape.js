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
const COLORS = ["cyan", "red", "green", "yellow", "pink", "blue"];

class Shape {
  constructor(options) {
    this.ctx = options.ctx;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.x = options.x || 0;
    this.y = options.y || 0;
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    this.squares = shape.map(([dx, dy]) => {
      const options = {
        ctx: this.ctx,
        x: dx * SQUARE_SIZE,
        y: dy * SQUARE_SIZE,
        color: this.color
      };
      return new Square(options);
    });
  }

  draw() {
    this.squares.forEach((square) => {
      square.draw(
        square.x + (this.x * SQUARE_SIZE),
        square.y + (this.y * SQUARE_SIZE)
      );
    });
  }

  moveLeft() {
    this.x--;
    this.draw();
  }

  moveRight() {
    this.x++;
    this.draw();
  }
}
