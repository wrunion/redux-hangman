import { combineReducers } from 'redux';

this.setState();

this.state = {
  targetWord: 'BANANA',
  targetWordArray: ['B','A','N','A'],
  lettersGuessedArray: [],
  // numberOfWrongGuesses: 0,
  // numberOfCorrectGuesses: 0,
  // win: false,
  // // lose: false,
  // // currentGuess: ''
}


const postReducer = (state={}, action) => {
  switch (action.type) {
    case 'INPUT_LETTER':
      return {lettersGuessedArray: [...this.state.lettersGuessedArray, action.payload]};
    default: 
      return state;  
  };
};

// const postReducer2 = (state=[], action) => {
//   switch (action.type) {
//     case 'FETCH_POSTS':
//       return action.payload;
//     default: 
//       return state;  
//   };
// };

export default combineReducers({
  posts: postReducer,  
  posts2: postReducer2
});