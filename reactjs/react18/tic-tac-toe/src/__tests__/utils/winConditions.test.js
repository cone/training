import {
  findWinRow,
  findWinColumn,
  findLeftDiagonal,
  findRightDiagonal,
} from "../../utils/winConditions";

describe('winConditions', () => {
  describe('findWinRow', () => {
    it('should return true when all cells in the row have the same symbol', () => {
      const rowIndex = 1;
      const board = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
      const symbol = 'X';
      const boardSize = 3;

      const result = findWinRow({ rowIndex, board, symbol, boardSize });

      expect(result).toBe(true);
    });

    it('should return true when all cells in the row have the same symbol in other rows as well', () => {
      const rowIndex = 2;
      const board = ['X', '', 'X', 'O', 'O', 'O', '', '', ''];
      const symbol = 'O';
      const boardSize = 3;

      const result = findWinRow({ rowIndex, board, symbol, boardSize });

      expect(result).toBe(true);
    });

    it('should return false when there is only one cell with a different symbol in the row', () => {
      const rowIndex = 1;
      const board = ['X', 'X', 'O', 'O', '', '', '', '', ''];
      const symbol = 'X';
      const boardSize = 3;

      const result = findWinRow({ rowIndex, board, symbol, boardSize });

      expect(result).toBe(false);
    });

    it('should return false for an empty row', () => {
      const rowIndex = 2;
      const board = ['', '', '', '', '', '', '', '', ''];
      const symbol = 'X';
      const boardSize = 3;

      const result = findWinRow({ rowIndex, board, symbol, boardSize });

      expect(result).toBe(false);
    });
  });

  describe('findWinColumn', () => {
    it('should return true when all elements in the column are equal to the given symbol', () => {
      const colIndex = 1;
      const board = ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X'];
      const symbol = 'X';
      const boardSize = 3;

      const result = findWinColumn({ colIndex, board, symbol, boardSize });

      expect(result).toBe(true);
    });

    it('should return true when all elements in the column are equal to the given symbol in other columns as well', () => {
      const colIndex = 2;
      const board = ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X'];
      const symbol = 'O';
      const boardSize = 3;

      const result = findWinColumn({ colIndex, board, symbol, boardSize });

      expect(result).toBe(true);
    });

    it('should return false for an empty column', () => {
      const colIndex = 1;
      const board = ['', '', '', '', '', '', '', '', ''];
      const symbol = 'X';
      const boardSize = 3;

      const result = findWinColumn({ colIndex, board, symbol, boardSize });

      expect(result).toBe(false);
    });

    it('should return false when at least one element in the column is not equal to the given symbol', () => {
      const colIndex = 1;
      const board = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'O', 'O'];
      const symbol = 'X';
      const boardSize = 3;

      const result = findWinColumn({ colIndex, board, symbol, boardSize });

      expect(result).toBe(false);
    });
  });

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
