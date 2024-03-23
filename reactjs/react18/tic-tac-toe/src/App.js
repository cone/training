import './App.css';
import { useState } from "react";

const initialBoard = ["", "", "", "", "", "", "", "", ""];
const board = [...initialBoard];

export default function App() {
  const [currentSymbol, setCurrentSymbol] = useState("O");

  const renderButton = (id) => {
    return (
      <button id={id} onClick={onButtonClick} className="btn cell"></button>
    );
  };

  const onButtonClick = (e) => {
    e.target.innerText = currentSymbol;
    const position = parseInt(e.target.id);
    board[position - 1] = currentSymbol;
    findWinConditions(position);
    setCurrentSymbol(currentSymbol === "O" ? "X" : "O");
  };

  const findWinConditions = (position) => {
    if (findVerticalColumn(position)) {
      return alert("Vertical!");
    }

    if (findHorizontalColumn(position)) {
      return alert("Horizontal!");
    }

    alert("Nothing :'(");
  };

  const findWinRow = (index) => {
    const winRow = [];

    if (board[index + 1] && (board[index + 1] === currentSymbol)) {
      const { i:next } = findWinRow(index + 1);
      next && winRow.push(next);
    }
    if (board[index - 1] && (board[index - 1] === currentSymbol)) {
      const { i:prev } = findWinRow(index - 1);
      prev && winRow.push(prev);
    }

    return {i: board[index], winRow}
  }

  return (
    <div className="container text-center">
      <h1>Tic Tac Toe</h1>
      <div className="row center-block">
        <table className="board">
          <tbody>
            <tr>
              <td>{renderButton("1")}</td>
              <td>{renderButton("2")}</td>
              <td>{renderButton("3")}</td>
            </tr>
            <tr>
              <td>{renderButton("4")}</td>
              <td>{renderButton("5")}</td>
              <td>{renderButton("6")}</td>
            </tr>
            <tr>
              <td>{renderButton("7")}</td>
              <td>{renderButton("8")}</td>
              <td>{renderButton("9")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
