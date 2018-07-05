import {Map} from 'immutable'
import {getInput, game} from '../index';

// state's values: turn and board

// reducer(state, action)

const move = (turn, rowColumn) => {
  return {
    type: 'MOVE',
    turn: turn,
    rowColumn: rowColumn
  };
};

let gameBoard = Map();

export default function reducer (state = {board: gameBoard, turn: 'O'}, action) {
  if (action.type === 'MOVE') {
    state.board = state.board.setIn(action.rowColumn, action.turn);
    if (action.turn === 'X') {
      state.turn = 'O';
    } else {
      state.turn = 'X';
    }
  } else if (action.type === 'START') {
    state.board = state.board.setIn([action.rowColumn, action.turn]);
  }
  return state;
}

const winner = (board) => {
  console.log('board is', board);
};


winner(gameBoard);


export {move};

