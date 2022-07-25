import React, { Component } from "react";
import { GAME_CELL_NONE } from "./TictactoeUtils";

export class GameCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellValue: GAME_CELL_NONE,
      cellOnClick: (value) => {},
    };
  }

  render() {
    const { cellValue } = this.state;
    return (
      <div className="game-cell" onClick={this.state.cellOnClick}>
        <img src={cellValue} alt="error" className="game-cell-image" />
      </div>
    );
  }
}
