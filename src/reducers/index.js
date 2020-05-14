//import { combineReducers } from 'redux';

const initState = {
  targetWord: 'BANANA',
  targetWordArray: ['B','A','N','A'],
  numOfWrongGuesses: 0,
  numOfRightGuesses: 0,
  letterArray: [],
  win: 0,
  lose: 0
}

export default (state = initState, action) => {
    switch (action.type) {
      case 'ADD_LETTER':
        return {
          ...state,
          letterArray: [...state.letterArray, action.letter]
        }
      case 'CHECK_LETTER':
        /* Check if letter is in target word */
        const isLetterInWord = state.targetWord.includes(action.letter);
        
        if (isLetterInWord) {
          return {
            ...state,
            numOfRightGuesses: state.numOfRightGuesses += 1,
          } 
        } else {
            return {
              ...state,
              numOfWrongGuesses: state.numOfWrongGuesses += 1
            }
          }
      // break;
      default:
        return state;
      }
    }
  

// export default (state = initState, action) => {
//   if (action.type === 'ADD_LETTER') {
//     return {
//       letterArray: [...state.letterArray, action.letter]
//     }
//   } else {
//     return state;
//   }
// }

// export default combineReducers({
//   guessedLetterArray: guessedLetterArrayReducer,  
//