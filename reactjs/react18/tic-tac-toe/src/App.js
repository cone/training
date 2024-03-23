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
    alert(board);
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

  const findVerticalColumn = (position) => {
    if (position <= 3) {
      return findWinVerticalColumn(position);
    }

    if (position > 3 && position <= 6) {
      return findWinVerticalColumn(position - 3);
    }

    return findWinVerticalColumn(position - 6);
  };

  const findWinVerticalColumn = (position) => {
    const index = position - 1;
    if (
      board[index] === currentSymbol &&
      board[index + 3] === currentSymbol &&
      board[index + 6] === currentSymbol
    ) {
      return [index, index + 3, index + 6];
    }

    return false;
  };

  const findHorizontalColumn = (position) => {
    if (position % 3 === 0) {
      findWinHorizontalColumn(position - 2);
    }

    if ((position - 1) % 3 === 0 || position === 1) {
      findWinHorizontalColumn(position);
    }

    return findWinHorizontalColumn(position - 1);
  };

  const findWinHorizontalColumn = (position) => {
    const index = position - 1;
    if (
      board[index] === currentSymbol &&
      board[index + 1] === currentSymbol &&
      board[index + 2] === currentSymbol
    ) {
      return [index, index + 1, index + 2];
    }

    return false;
  };

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
