import { createStore } from 'redux';
const store = createStore(reducer);
// import { store } from '../index.js';

// const initState = {
//   letterArray: []
// }

export default function reducer(state = {letterArray:[]}, action) {
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

store.dispatch({type: 'ADD_LETTER', letter: 'A'});
store.dispatch({type: 'ADD_LETTER', letter: 'B'});
store.dispatch({type: 'ADD_LETTER', letter: 'C'});
store.dispatch({type: 'ADD_LETTER', letter: 'D'});


store.subscribe(() => {
  console.log('state updated');
  console.log(store.getState());
})