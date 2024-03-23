const findWinRow = ({ rowIndex, board, symbol, boardSize }) => {
  const startIndex = boardSize * (rowIndex - 1);
  const endIndex = (boardSize * rowIndex) - 1;
  const row = board.slice(startIndex, endIndex + 1);
  return row.every((cellSymbol) => cellSymbol === symbol );
}

const findWinColumn = ({ colIndex, board, symbol, boardSize }) => {
  let startIndex = colIndex - 1;
  const endIndex = startIndex + (boardSize * (boardSize - 1));
  while (startIndex <= endIndex) {
    if (board[startIndex] !== symbol) return false;
    startIndex += boardSize;
  }
  return true;
}

const findLeftDiagonal = (boardSize) => {
  let startIndex = 0;
  const endIndex = (boardSize ** 2) - 1;
  const diagonal = [];
  while (startIndex <= endIndex) {
    diagonal.push(startIndex);
    startIndex += boardSize + 1;
  }
  return diagonal;
}

const findRightDiagonal = (boardSize) => {
  let startIndex = boardSize - 1;
  const endIndex = (boardSize ** 2) - boardSize;
  const diagonal = [];
  while (startIndex <= endIndex) {
    diagonal.push(startIndex);
    startIndex += boardSize - 1;
  }
  return diagonal;
}

export { findWinRow, findWinColumn, findLeftDiagonal, findRightDiagonal };
