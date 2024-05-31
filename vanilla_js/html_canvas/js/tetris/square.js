class Square {
  constructor(options) {
    this.ctx = options.ctx;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.color = options.color || "cyan";
  }

  draw(x = null, y = null) {
    const newX = x || this.x;
    const newY = y || this.y;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(newX, newY, SQUARE_SIZE, SQUARE_SIZE);
    this.ctx.lineWidth = SQUARE_LINE_WIDTH;
    this.ctx.strokeStyle = SQUARE_STROKE_STYLE;
    this.ctx.strokeRect(newX, newY, SQUARE_SIZE, SQUARE_SIZE);
  }
}
