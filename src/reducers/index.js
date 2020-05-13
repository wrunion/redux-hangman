import { combineReducers } from 'redux';

// this.state = {
//   lettersGuessedArray: [],
// }


const guessedLetterArrayReducer = (state={}, action) => {
  switch (action.type) {
    case 'INPUT_LETTER':
      return {lettersGuessedArray: [...this.state.lettersGuessedArray, action.payload]};
    default: 
      return state;  
  };
};

export default combineReducers({
  guessedLetterArray: guessedLetterArrayReducer,  
});