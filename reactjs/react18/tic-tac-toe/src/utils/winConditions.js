const findConsecutiveEquals = (params) => {
  const {
    index,
    board,
    symbol,
    increment,
    stopIndex,
  } = params;
  const winRow = [];
  let nextIndex = index + increment;
  let prevIndex = index - increment;

  while (
    board[nextIndex] &&
    board[nextIndex] === symbol &&
    nextIndex <= stopIndex
  ) {
    winRow.push(nextIndex);
    nextIndex += increment;
  }

  while (
    board[prevIndex] &&
    board[prevIndex] === symbol &&
    prevIndex >= index
  ) {
    winRow.push(prevIndex);
    prevIndex -= increment;
  }

  if (winRow.length) {
    winRow.push(index);
    return winRow.sort();
  }

  return false;
}

const findWinRows = ({ index, board, symbol }) => {
  let stopIndex;

  if (index <= 2) index = 0; stopIndex = 2;
  if (index > 2 && index <= 5) index = 3; stopIndex = 5;
  if (index > 5) index = 6; stopIndex = 8;
  
  return findConsecutiveEquals({
    index, board, symbol, stopIndex, increment: 1
  });
}

export { findConsecutiveEquals, findWinRows };
