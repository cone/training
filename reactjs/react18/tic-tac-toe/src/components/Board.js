import { useState } from "react";
import { findWinColumn, findWinDiagonal, findWinRow } from "../utils/winConditions";
import { findLeftDiagonal, findRightDiagonal } from "../utils/diagonals";
import { getRowAndCol } from "../utils/board";

const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const leftDiagonal = findLeftDiagonal(board);
const rightDiagonal = findRightDiagonal(board);

const Board = () => {
  const [currentSymbol, setCurrentSymbol] = useState("O");
  const [message, setMessage] = useState("");


  const renderButton = (position) => {
    return (
      <button data-position={position} onClick={onButtonClick} className="cell"></button>
    );
  };

  const onButtonClick = (e) => {
    const [row, col] = getRowAndCol(e.target.dataset.position);
    const selectedSymbol = board[row - 1][col - 1];
    if (selectedSymbol) return;
    e.target.innerText = currentSymbol;
    board[row - 1][col - 1] = currentSymbol;
    if (findWinConditions(row, col)) setMessage(`${currentSymbol} won!!!`);
    setCurrentSymbol(currentSymbol === "O" ? "X" : "O");
  };

  const findWinConditions = (rowIndex, colIndex) => {
    return findWinRow({rowIndex, board, symbol: currentSymbol}) ||
      findWinColumn({colIndex, board, symbol: currentSymbol}) ||
      findWinDiagonal({rowIndex, colIndex, diagonalIndexes: leftDiagonal, board, symbol: currentSymbol}) ||
      findWinDiagonal({rowIndex, colIndex, diagonalIndexes: rightDiagonal, board, symbol: currentSymbol})
  };

  return (
    <div className="container text-center">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <div className="row">
        <div>
          <table className="board">
            <tbody>
              <tr>
                <td>{renderButton("1-1")}</td>
                <td>{renderButton("1-2")}</td>
                <td>{renderButton("1-3")}</td>
              </tr>
              <tr>
                <td>{renderButton("2-1")}</td>
                <td>{renderButton("2-2")}</td>
                <td>{renderButton("2-3")}</td>
              </tr>
              <tr>
                <td>{renderButton("3-1")}</td>
                <td>{renderButton("3-2")}</td>
                <td>{renderButton("3-3")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Board;
