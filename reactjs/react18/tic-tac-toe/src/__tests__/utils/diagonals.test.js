import {
  findLeftDiagonal,
  findRightDiagonal,
} from "../../utils/diagonals";

describe('diagonals', function() {
  describe('findLeftDiagonal', () => {
    it('should return the correct indexes for the left main diagonal', () => {
      const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      const expected = [0, 1, 2];
      const result = findLeftDiagonal(board);
      expect(result).toEqual(expected);
    });
  });

  describe('findRightDiagonal', () => {
    it('should return the correct indexes for the left main diagonal', () => {
      const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      const expected = [2, 1, 0];
      const result = findRightDiagonal(board);
      expect(result).toEqual(expected);
    });
  });
});
