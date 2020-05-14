//import { combineReducers } from 'redux';

const initState = {
  targetWord: 'BANANA',
  targetWordArray: ['B', 'A', 'N', 'A'],
  numOfWrongGuesses: 0,
  rightGuesseArray: [],
  letterArray: [],
  win: false,
  lose: false
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
          rightGuesseArray: [...state.rightGuesseArray, action.letter]
        }
      } else {
        return {
          ...state,
          numOfWrongGuesses: state.numOfWrongGuesses += 1
        }
      }

    // case 'CHECK_WIN_CONDITION':
    //     return {
    //       ...state,
    //       numOfRightGuesses: state.numOfRightGuesses += 20
    //     }    
    //   }    

    /* THIS STATEMENT BREAKS EVERYTHING. I'M NOT SURE WHY */
    // case 'CHECK_WIN_CONDITION':
    //   if (state.targetWordArray.length === state.numOfRightGuesses) {
    //     return {
    //       ...state,
    //       win: true
    //     }
    //   } 
    //   else if (state.numOfWrongGuesses >=10) {
    //     return {
    //       ...state,
    //       lose: true
    //     }
    //   }

    // break;
    default:
      return state;
  }
}




// export default combineReducers({
//   guessedLetterArray: guessedLetterArrayReducer,  
//