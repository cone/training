import { findConsecutiveEquals } from "../../utils/winConditions";

describe('winConditions', () => {
  describe('findConsecutiveEquals', () => {
    it('should return an object with the correct structure when given valid input', () => {
      const params = {
        index: 1,
        board: ['X', 'X', 'X', '', '', '', '', '', ''],
        symbol: 'X',
        increment: 1,
        stopIndex: 2,
      }

      const result = findConsecutiveEquals(params);

      expect(result).toEqual([0, 1, 2]);
    });
  });

  describe('findWinRows', () => {
    it('should return the indexes of the only row that has three of the same characters', () => {
      const params = {
        index: 4,
        board: ['O', 'X', 'X', 'X', 'X', 'X', 'O', 'X', 'X'],
        symbol: 'X',
        increment: 1,
      }

      const result = findConsecutiveEquals(params);

      expect(result).toEqual([3, 4, 5]);
    });
  });
});
