import { useState } from "react";
import { findWinColumn, findWinDiagonal, findWinRow } from "../utils/winConditions";
import { findLeftDiagonal, findRightDiagonal } from "../utils/diagonals";
import { getRowAndCol, getEmptyStringArray } from "../utils/board";
import "./Board.css";

const Board = () => {
  const boardArray = getEmptyStringArray();
  const leftDiagonal = findLeftDiagonal(boardArray);
  const rightDiagonal = findRightDiagonal(boardArray);

  const [currentSymbol, setCurrentSymbol] = useState("O");
  const [message, setMessage] = useState("");
  const [board, setBoard] = useState(boardArray);
  const [lockBoard, setLockBoard] = useState(false);

  const renderBoard = () => board.map((row, rowIndex) => (
    <tr>
      { row.map((cellValue, cellIndex) => (
        <td>
          { renderButton(rowIndex, cellIndex, cellValue) }
        </td>
      ))}
    </tr>
  ));

  const renderButton = (rowIndex, cellIndex, cellValue) => {
    return (
      <button
        data-position={`${rowIndex + 1}-${cellIndex + 1}`}
        onClick={onButtonClick}
        disabled={lockBoard}
        className="cell">
          {cellValue}
      </button>
    );
  };

  const onButtonClick = (e) => {
    const [row, col] = getRowAndCol(e.target.dataset.position);
    const selectedSymbol = board[row - 1][col - 1];
    if (selectedSymbol) return;
    updateCell(row - 1, col - 1, currentSymbol);
    if (findWinConditions(row, col)) {
      setLockBoard(true);
      return setMessage(`${currentSymbol} won!!!`);
    }
    setCurrentSymbol(currentSymbol === "O" ? "X" : "O");
  };

  const updateCell = (rowIndex, colIndex, symbol) => {
    const newBoard = [...board];
    newBoard[rowIndex][colIndex] = symbol;
    setBoard(newBoard);
  }

  const findWinConditions = (rowIndex, colIndex) => {
    return findWinRow({rowIndex, board, symbol: currentSymbol}) ||
      findWinColumn({colIndex, board, symbol: currentSymbol}) ||
      findWinDiagonal({rowIndex, colIndex, diagonalIndexes: leftDiagonal, board, symbol: currentSymbol}) ||
      findWinDiagonal({rowIndex, colIndex, diagonalIndexes: rightDiagonal, board, symbol: currentSymbol})
  };

  const resetBoard = () => {
    setMessage("");
    setCurrentSymbol("O")
    setBoard(getEmptyStringArray());
    setLockBoard(false);
  }

  return (
    <div className="container text-center">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <div className="row">
        <div>
          <table className="board">
            <tbody>
              { renderBoard() }
            </tbody>
          </table>
          <button onClick={resetBoard}>Try Again!</button>
        </div>
      </div>
    </div>
  )
}

export default Board;
