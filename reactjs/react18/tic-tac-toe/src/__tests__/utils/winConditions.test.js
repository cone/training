import {
  findWinRow,
  findWinColumn,
  findWinDiagonal,
} from "../../utils/winConditions";

describe('winConditions', () => {
  describe('findWinRow', () => {
    it('should return true when all cells in the row have the same symbol', () => {
      const rowIndex = 1;
      const board = [
        ['X', 'X', 'X'],
        ['O', 'O', ''],
        ['', '', ''],
      ];
      const symbol = 'X';

      const result = findWinRow({ rowIndex, board, symbol });

      expect(result).toBe(true);
    });

    it('should return true when all cells in the row have the same symbol in other rows as well', () => {
      const rowIndex = 2;
      const board = [
        ['X', '', 'X'],
        ['O', 'O', 'O'],
        [ '', '', ''],
      ];
      const symbol = 'O';

      const result = findWinRow({ rowIndex, board, symbol });

      expect(result).toBe(true);
    });

    it('should return false when there is only one cell with a different symbol in the row', () => {
      const rowIndex = 1;
      const board = [
        ['X', 'X', 'O'],
        ['O', '', ''],
        [ '', '', ''],
      ];
      const symbol = 'X';

      const result = findWinRow({ rowIndex, board, symbol });

      expect(result).toBe(false);
    });

    it('should return false for an empty row', () => {
      const rowIndex = 2;
      const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      const symbol = 'X';

      const result = findWinRow({ rowIndex, board, symbol });

      expect(result).toBe(false);
    });
  });

  describe('findWinColumn', () => {
    it('should return true when all elements in the column are equal to the given symbol', () => {
      const colIndex = 1;
      const board = [
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
      ];
      const symbol = 'X';

      const result = findWinColumn({ colIndex, board, symbol });

      expect(result).toBe(true);
    });

    it('should return true when all elements in the column are equal to the given symbol in other columns as well', () => {
      const colIndex = 2;
      const board = [
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
      ];
      const symbol = 'O';

      const result = findWinColumn({ colIndex, board, symbol });

      expect(result).toBe(true);
    });

    it('should return false for an empty column', () => {
      const colIndex = 1;
      const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      const symbol = 'X';

      const result = findWinColumn({ colIndex, board, symbol });

      expect(result).toBe(false);
    });

    it('should return false when at least one element in the column is not equal to the given symbol', () => {
      const colIndex = 1;
      const board = [
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['O', 'O', 'O'],
      ];
      const symbol = 'X';

      const result = findWinColumn({ colIndex, board, symbol });

      expect(result).toBe(false);
    });
  });

  describe("findWinDiagonal", () => {
    it('should return true when all the symbols in the diagonal are the same (left diagonal)', () => {
      const rowIndex = 2
      const colIndex = 2;
      const diagonalIndexes = [0, 1, 2];
      const board = [
        ['X', '', ''],
        ['', 'X', ''],
        ['', '', 'X'],
      ];
      const symbol = 'X';

      const result = findWinDiagonal({ rowIndex, colIndex, diagonalIndexes, board, symbol });

      expect(result).toBe(true);
    });

    it('should return true when all the symbols in the diagonal are the same (right diagonal)', () => {
      const rowIndex = 2
      const colIndex = 2;
      const diagonalIndexes = [2, 1, 0];
      const board = [
        ['', '', 'X'],
        ['', 'X', ''],
        ['X', '', ''],
      ];
      const symbol = 'X';

      const result = findWinDiagonal({ rowIndex, colIndex, diagonalIndexes, board, symbol });

      expect(result).toBe(true);
    });

    it('should return false when all the symbols in the diagonal are not the same', () => {
      const rowIndex = 2
      const colIndex = 2;
      const diagonalIndexes = [0, 1, 2];
      const board = [
        ['O', '', ''],
        ['', 'X', ''],
        ['', '', 'X'],
      ];
      const symbol = 'X';

      const result = findWinDiagonal({ rowIndex, colIndex, diagonalIndexes, board, symbol });

      expect(result).toBe(false);
    });

    it('should return false when the current selection is not part of the diagonal', () => {
      const rowIndex = 3
      const colIndex = 1;
      const diagonalIndexes = [0, 1, 2];
      const board = [
        ['O', '', ''],
        ['', 'O', ''],
        ['X', '', 'O'],
      ];
      const symbol = 'X';

      const result = findWinDiagonal({ rowIndex, colIndex, diagonalIndexes, board, symbol });

      expect(result).toBe(false);
    });
  });
});
