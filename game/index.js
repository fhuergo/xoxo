//import {Map} from 'immutable'
//import React, {Component} from 'react'

// state's values: turn and board

// reducer(state, action)

// const move = () => {

// }

// export default class gameReducer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       turn: '',
//       board: Map
//     }
//   }
//   move(turn, [row, col]) {
//     console.log(state);

//   return state
//   }

// }

export default function gameReducer(state, action) {
  console.log(action)
  if (action.type === 'MOVE') {
    if (action.player === 'X') {
      return { turn: 'O', board: 'temp' };
      // add the X to the COORDINATES
      //state.player = "O"
     } else {
       // add the O to the COORDINATES
      return { turn: 'X', board: action.getIn };
     }
   // returns new statew ith the move writen to the board
 } else {
  return 0;
 }
}

