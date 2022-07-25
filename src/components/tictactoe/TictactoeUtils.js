import tictactoeX from "../../images/tictactoe-x.png";
import tictactoeO from "../../images/tictactoe-y.png";
import tictactoeNONE from "../../images/tictactoe-blank.jpg";

export const GAME_CELL_NONE = tictactoeNONE;
export const GAME_CELL_X = tictactoeX;
export const GAME_CELL_O = tictactoeO;
export const GAME_WIN_CASE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
