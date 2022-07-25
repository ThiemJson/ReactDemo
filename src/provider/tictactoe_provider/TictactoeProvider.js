import React, { Component } from "react";
import {
  GAME_CELL_NONE,
  GAME_CELL_O,
  GAME_CELL_X,
  GAME_WIN_CASE,
} from "../../components/tictactoe/TictactoeUtils";
import { TictactoeContext } from "../../context/tictactoe_context/TictactoeContext";

export class TictactoeProvider extends Component {
  constructor(props) {
    super(props);

    /** Set bind */
    this.onClickCell = this.onClickCell.bind(this);
    this.onResetGame = this.onResetGame.bind(this);
    this.isWinWithIndex = this.isWinWithIndex.bind(this);

    this.state = {
      currentBoard: [
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
      ],

      isPlayerX: true,
      isEndGame: false,
      latestIndexSelect: null,
      onClickCell: this.onClickCell,
      onResetGame: this.onResetGame,
    };
  }

  /**
   * Reset game
   */
  onResetGame() {
    this.setState({
      currentBoard: [
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
        GAME_CELL_NONE,
      ],

      isPlayerX: true,
      isEndGame: false,
    });
  }

  /**
   * Handler onCell click
   * @param {*} `cellIndex` Current cell selected index
   * @returns `Void`
   */
  onClickCell(cellIndex) {
    let { currentBoard, isPlayerX, isEndGame } = this.state;
    /** Nếu người dùng chọn cell đã được tick ==> REJECT */
    if (currentBoard[cellIndex] !== GAME_CELL_NONE) {
      return;
    }

    /** Xử lý tick chọn ô  */
    currentBoard[cellIndex] = isPlayerX ? GAME_CELL_X : GAME_CELL_O;

    /** Update lại lượt chơi  */
    isPlayerX = !isPlayerX;

    /** Update board  */
    this.setState({
      isPlayerX: isPlayerX,
      currentBoard: currentBoard,
      isEndGame: isEndGame,
      latestIndexSelect: cellIndex,
    });
  }

  /**
   * Kiểm tra người chơi vừa rồi có win hay không
   * @param {*} cellIndex
   */
  isWinWithIndex(cellIndex) {
    const { currentBoard } = this.state;
    const cellValue = currentBoard[cellIndex];

    /** Nếu cellvalue == `NONE` */
    if (cellValue === GAME_CELL_NONE) {
      return false;
    }

    let result = false;
    GAME_WIN_CASE.forEach((winCase) => {
      if (
        winCase.filter((index) => currentBoard[index] === cellValue).length ===
        3
      ) {
        this.wonPlayer =
          currentBoard[cellIndex] === GAME_CELL_O ? "Player 0" : "Player X";
        result = true;
        return;
      }
    });

    return result;
  }

  componentDidUpdate() {
    const { isEndGame, currentBoard, latestIndexSelect } = this.state;

    if (latestIndexSelect !== null) {
      if (this.isWinWithIndex(latestIndexSelect)) {
        alert(`${this.wonPlayer} won !`);
        return;
      }
    }

    /** Nếu có người thắng */
    if (isEndGame) {
      alert("Won");
      return;
    }

    /** Kiểm tra game hòa  */
    if (
      !isEndGame &&
      currentBoard.filter((item) => item === GAME_CELL_NONE).length === 0
    ) {
      alert("Draw");
      return;
    }
  }

  render() {
    return (
      <TictactoeContext.Provider value={this.state}>
        {this.props.children}
      </TictactoeContext.Provider>
    );
  }
}
