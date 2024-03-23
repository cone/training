import { BOARD_SIZE } from "./constants";
const findWinRow = ({ rowIndex, board, symbol }) => {
  const startIndex = BOARD_SIZE * (rowIndex - 1);
  const endIndex = (BOARD_SIZE * rowIndex) - 1;
  const row = board.slice(startIndex, endIndex + 1);
  return row.every((cellSymbol) => cellSymbol === symbol );
}

const findWinColumn = ({ colIndex, board, symbol }) => {
  let startIndex = colIndex - 1;
  const endIndex = startIndex + (BOARD_SIZE * (BOARD_SIZE - 1));
  while (startIndex <= endIndex) {
    if (board[startIndex] !== symbol) return false;
    startIndex += BOARD_SIZE;
  }
  return true;
}

const findLeftDiagonal = () => {
  let startIndex = 0;
  const endIndex = (BOARD_SIZE ** 2) - 1;
  const diagonal = [];
  while (startIndex <= endIndex) {
    diagonal.push(startIndex);
    startIndex += BOARD_SIZE + 1;
  }
  return diagonal;
}

const findRightDiagonal = () => {
  let startIndex = BOARD_SIZE - 1;
  const endIndex = (BOARD_SIZE ** 2) - BOARD_SIZE;
  const diagonal = [];
  while (startIndex <= endIndex) {
    diagonal.push(startIndex);
    startIndex += BOARD_SIZE - 1;
  }
  return diagonal;
}

export { findWinRow, findWinColumn, findLeftDiagonal, findRightDiagonal };
