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

export { findWinRow, findWinColumn };
