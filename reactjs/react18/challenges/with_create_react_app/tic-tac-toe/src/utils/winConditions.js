const findWinRow = ({ rowIndex, board, symbol }) => {
  const row = board[rowIndex];
  return row.every((cellSymbol) => cellSymbol === symbol );
};

const findWinColumn = ({ colIndex, board, symbol }) => {
  return board.every((row) => row[colIndex] === symbol );
};

const findWinDiagonal = ({ rowIndex, colIndex, diagonalIndexes, board, symbol }) => {
  // If the current selection is not part of the diagonal, return false
  if (diagonalIndexes[rowIndex] !== colIndex) return false;

  // If only one of the symbols in the diagonal doesn't match, we return "false" immediately
  return diagonalIndexes.every((dColIndex, dRowIndex) => board[dRowIndex][dColIndex] === symbol);
};

export { findWinRow, findWinColumn, findWinDiagonal };
