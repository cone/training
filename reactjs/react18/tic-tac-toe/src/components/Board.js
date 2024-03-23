import { useState } from "react";
import { findLeftDiagonal, findRightDiagonal } from "../utils/winConditions";
import { BOARD_SIZE } from "../utils/constants";
import { getRowAndCol } from "../utils/board";

const initialBoard = ["", "", "", "", "", "", "", "", ""];
const board = [...initialBoard];
const leftDiagonal = findLeftDiagonal(BOARD_SIZE);
const rightDiagonal = findRightDiagonal(BOARD_SIZE);

const Board = () => {
  const [currentSymbol, setCurrentSymbol] = useState("O");

  const renderButton = (id) => {
    return (
      <button id={id} onClick={onButtonClick} className="btn cell"></button>
    );
  };

  const onButtonClick = (e) => {
    e.target.innerText = currentSymbol;
    const position = parseInt(e.target.id);
    const [row, col] = getRowAndCol(position);
    board[position - 1] = currentSymbol;
    findWinConditions(position);
    setCurrentSymbol(currentSymbol === "O" ? "X" : "O");
  };

  const findWinConditions = (row, col) => {
    
  };

  return (
    <div className="container text-center">
      <h1>Tic Tac Toe</h1>
      <div className="row center-block">
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
  )
}

export default Board;
