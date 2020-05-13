import { combineReducers } from 'redux';

// this.state = {
//   lettersGuessedArray: [],
// }
const initState = {
  lettersGuessedArray: []
}


export const guessedLetterArrayReducer = (state=initState, action) => {
  if (!state) {
    return null;
  }
  switch (action.type) {
    case 'INPUT_LETTER':
      const updatedState = {lettersGuessedArray: [...this.state.lettersGuessedArray, action.payload]};
      return updatedState; 
      // return {lettersGuessedArray: [...this.state.lettersGuessedArray, action.payload]};
    default: 
      return state;  
  };
};

// case c.UPDATE_TIME:
//   const newTicket = Object.assign({}, state[id],;
//   const updatedState = Object.assign({}, state, {
//     [id]: newTicket
//   });
//   return updatedState;
// default:
//   return state;

export default combineReducers({
  guessedLetterArray: guessedLetterArrayReducer,  
});