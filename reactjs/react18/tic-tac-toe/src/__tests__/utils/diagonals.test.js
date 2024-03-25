import {
  findLeftDiagonal,
  findRightDiagonal,
} from "../../utils/diagonals";

describe('diagonals', function() {
  describe('findLeftDiagonal', () => {
    it('should return the correct indexes for the left main diagonal', () => {
      const boardSize = 3;
      const expected = [0, 1, 2];
      const result = findLeftDiagonal(boardSize);
      expect(result).toEqual(expected);
    });
  });

  describe('findRightDiagonal', () => {
    it('should return the correct indexes for the left main diagonal', () => {
      const boardSize = 3;
      const expected = [2, 1, 0];
      const result = findRightDiagonal(boardSize);
      expect(result).toEqual(expected);
    });
  });
});
