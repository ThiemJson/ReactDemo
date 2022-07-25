import React, { Component } from "react";
import { TictactoeContext } from "../../context/tictactoe_context/TictactoeContext";

export class GameCell extends Component {
  render() {
    return (
      <TictactoeContext.Consumer>
        {({ currentBoard, onClickCell }) => (
          <div
            className="game-cell"
            onClick={() => {
              onClickCell(this.props.cellIndex);
            }}
          >
            <img
              src={currentBoard[this.props.cellIndex]}
              alt="error"
              className="game-cell-image"
            />
          </div>
        )}
      </TictactoeContext.Consumer>
    );
  }
}
