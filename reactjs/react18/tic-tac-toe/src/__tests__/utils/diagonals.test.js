import {
  findLeftDiagonal,
  findRightDiagonal,
} from "../../utils/winConditions";

describe('diagonals', function() {
  describe('findLeftDiagonal', () => {
    it('should return the correct indexes for the left main diagonal', () => {
      const boardSize = 3;
      const expected = [0, 4, 8];
      const result = findLeftDiagonal(boardSize);
      expect(result).toEqual(expected);
    });
  });

  describe('findRightDiagonal', () => {
    it('should return the correct indexes for the left main diagonal', () => {
      const boardSize = 3;
      const expected = [2, 4, 6];
      const result = findRightDiagonal(boardSize);
      expect(result).toEqual(expected);
    });
  });
});
