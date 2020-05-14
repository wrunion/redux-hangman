//import { combineReducers } from 'redux';

const initState = {
  targetWord: 'BANANA',
  targetWordArray: ['B','A','N','A'],
  numOfWrongGuesses: 0,
  numOfRightGuesses: 0,
  letterArray: [],
  win: false,
  lose: false
}

export default (state = initState, action) => {
    switch (action.type) {
      case 'ADD_LETTER':
        return {
          letterArray: [...state.letterArray, action.letter]
        }
      case 'CHECK_LETTER':
        /* Check the target word array for the guessed letter*/
        const isLetterInWord = state.targetWordArray.find(e => e === action.letter);
        if (!isLetterInWord) {
          /* Add += to numOfWrongGuesses */
          return {
            numOfWrongGuesses: state.numOfWrongGuesses += 1,
          } 
        } else {
            return {
              numOfRightGuesses: state.numOfRightGuesses += 1
            }
          }
      case 'CHECK_WIN_CONDITION':
        if (state.numOfRightGuesses === state.targetWordArray.length) {
        return {
          win: true
        }  
      } else if (state.numOfWrongGuesses >= 10) {
        return {
          lose: true
        }
      }
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