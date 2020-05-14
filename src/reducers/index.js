//import { combineReducers } from 'redux';

const initState = {
  targetWord: 'BANANA',
  targetWordArray: ['B','A','N','A','N','A'],
  numOfWrongGuesses: 0,
  numOfRightGuesses: 0,
  letterArray: [],
  displayArray: ['_','_','_','_','_','_'],
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
            numOfRightGuesses: state.numOfRightGuesses += 1,
          } 
        } else {
            return {
              ...state,
              numOfWrongGuesses: state.numOfWrongGuesses += 1
            }
          }

          case 'RENDER_WORD_DISPLAY':
            const { letter } = action;
            return {
              ...state,
              displayArray: state.targetWordArray.map(e => {
                if (letter === e) {
                  return letter;
                } else if (state.letterArray.includes(e)) {
                  return e;
                } else {
                  return "_"
                }
              })
            }
          // if (state.displayArray === null) {
          //   return {
          //     ...state, 
          //     displayArray: state.targetWordArray.map(e => {
          //       if (e === letter) {
          //         return letter;
          //       } else {
          //         return "_";
          //       };
          //     })}
          //   } else {
          //     return {
          //       ...state,
          //       displayArray: state.displayArray.map(e => {
          //         if ((e === letter) && (state.targetWord.includes(e))) {
          //           return letter;
          //         } else if (testRegex.test(e) === true) {
          //           return e;
          //         } else {
          //           return "_"
          //         }
          //       })
          //     };
          //   }
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

      break;
      default:
        return state;
      }
    }
  



// export default combineReducers({
//   guessedLetterArray: guessedLetterArrayReducer,  
//