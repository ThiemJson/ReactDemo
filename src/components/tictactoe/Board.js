import React, { Component } from "react";
import { GameCell } from "./GameCell";

export class Board extends Component {
  constructor(props) {
    super(props);
    console.log("Board constructor");
  }

  render() {
    return (
      <div className="game-board">
        {Array(9)
          .fill()
          .map((item, index) => (
            <GameCell key={index} cellIndex={index} />
          ))}
      </div>
    );
  }
}
