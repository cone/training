const getLeftMostX = (squares) => {
  return squares.reduce((min, square) => {
    return Math.min(min, square.x);
  }, Infinity) / SQUARE_SIZE;
}

const getRightMostX = (squares) => {
  return squares.reduce((max, square) => {
    return Math.max(max, square.x);
  }, 0) / SQUARE_SIZE;
}

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
    this.minX = getLeftMostX(this.squares);
    this.maxX = getRightMostX(this.squares);
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

  moveDown() {
    this.y++;
    this.draw();
  }

  leftMostX() {
    return this.minX + this.x;
  }

  rightMostX() {
    return this.maxX + this.x;
  }
}
