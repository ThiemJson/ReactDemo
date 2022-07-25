import React, { Component } from "react";
import { Board } from "./Board";
import { TictactoeProvider } from "../../provider/tictactoe_provider/TictactoeProvider.js";
import "./Tictactoe.css";
import { TictactoeContext } from "../../context/tictactoe_context/TictactoeContext";

export class Game extends Component {
  constructor(props) {
    super(props);
    console.log("Game constructor");
  }

  render() {
    return (
      <div className="game">
        <TictactoeProvider>
          <Board></Board>
          <TictactoeContext.Consumer>
            {({ onResetGame }) => (
              <button onClick={onResetGame}>Reset game</button>
            )}
          </TictactoeContext.Consumer>
        </TictactoeProvider>
      </div>
    );
  }
}
