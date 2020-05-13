// import { createStore } from 'redux';
// const store = createStore(reducer);
import { store } from '../index.js';
// import action from 'actions'

// const initState = {
//   letterArray: []
// }

export default function letterReducer(state = {letterArray:[]}, action) {
  if (!state) {
    return null;
  }
  if (action.type === 'ADD_LETTER') {
    return {
      ...state,
      letterArray: [...state.letterArray, action.letter]
    }
  }
}

