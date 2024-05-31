const SQUARE_LINE_WIDTH = 1;
const SQUARE_STROKE_STYLE = "black";
const SQUARE_SIZE = 30;

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

const CANVAS_MAX_WIDTH_SQUARES = 32;
const CANVAS_MAX_HEIGHT_SQUARES = 16;
