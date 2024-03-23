const findLeftDiagonal = (board) => {
  let startIndex = 0;
  const diagonal = [];
  board.forEach(() => {
    diagonal.push(startIndex);
    startIndex += 1;
  });
  return diagonal;
}

const findRightDiagonal = (board) => {
  let startIndex = board.length - 1;
  const diagonal = [];
  board.forEach(() => {
    diagonal.push(startIndex);
    startIndex -= 1;
  });
  return diagonal;
}

export { findLeftDiagonal, findRightDiagonal };
