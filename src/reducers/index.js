// import { combineReducers } from 'redux';

// this.state = {
//   lettersGuessedArray: [],
// }
// const initState = {
//   lettersGuessedArray: []
// }
export default (state = {letterArray:[]}, action) => {
  // if (!state) {
  //   return null;
  // }
  if (action.type === 'ADD_LETTER') {
    return {
      letterArray: [...state.letterArray, action.letter]
    }
  } else {
    return state;
  }
}


// export const letterArrayReducer = (state={ lettersGuessedArray: [] }, action) => {
//   // if (!state) {
//   //   return null;
//   // }
//   switch (action.type) {
//     case 'ADD_LETTER':
//       const updatedState = {lettersGuessedArray: [...this.state.lettersGuessedArray, action.payload]};
//       return updatedState; 
//       // return {lettersGuessedArray: [...this.state.lettersGuessedArray, action.payload]};
//     default: 
//       return state;  
//   };
// };

// case c.UPDATE_TIME:
//   const newTicket = Object.assign({}, state[id],;
//   const updatedState = Object.assign({}, state, {
//     [id]: newTicket
//   });
//   return updatedState;
// default:
//   return state;

// export default combineReducers({
//   guessedLetterArray: guessedLetterArrayReducer,  
// });