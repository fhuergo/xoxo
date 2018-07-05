import {Map} from 'immutable'

// state's values: turn and board

// reducer(state, action)

const move = (turn, rowColumn) => {
  return {
    type: 'MOVE',
    turn: turn,
    rowColumn: rowColumn
  }
}


export default function reducer (state = {board: Map()}, action) {
  if (action.type === 'MOVE') {
    state.board = state.board.setIn(action.rowColumn, action.turn)
    if (action.turn === 'X') {
      action.turn = 'O'
     } else {
       action.turn = 'X'
     }
     console.log(state)
  }
  return state
}

export {move}

