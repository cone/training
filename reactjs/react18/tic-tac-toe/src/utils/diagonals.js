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

export { findLeftDiagonal, findRightDiagonal };
