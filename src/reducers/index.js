import { combineReducers } from 'redux';

// this.state = {
//   lettersGuessedArray: [],
// }
const initState = {
  lettersGuessedArray: []
}


const guessedLetterArrayReducer = (initState, action) => {
  if (!initState) {
    return null;
  }
  switch (action.type) {
    case 'INPUT_LETTER':
      return {lettersGuessedArray: [...this.state.lettersGuessedArray, action.payload]};
    default: 
      return initState;  
  };
};

export default combineReducers({
  guessedLetterArray: guessedLetterArrayReducer,  
});