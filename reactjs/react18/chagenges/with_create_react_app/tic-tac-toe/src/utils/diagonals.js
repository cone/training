const findLeftDiagonal = (boardSize) => {
  let startIndex = 0;
  const diagonal = [];
  while (startIndex < boardSize) {
    diagonal.push(startIndex);
    startIndex += 1;
  }
  return diagonal;
}

const findRightDiagonal = (boardSize) => {
  let startIndex = boardSize - 1;
  const diagonal = [];
  while (startIndex >= 0) {
    diagonal.push(startIndex);
    startIndex -= 1;
  }
  return diagonal;
}

export { findLeftDiagonal, findRightDiagonal };
