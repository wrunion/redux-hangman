import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
// import reducers from './reducers';
import letterReducer from './reducers';
import { Provider } from 'react-redux';

// store.subscribe(() =>
//   console.log(store.getState())
// );

// export const initState = {
//   letterArray: []
// }

export const store = createStore(letterReducer);

// store.dispatch({type: 'ADD_LETTER', letter: 'A'});
// store.dispatch({type: 'ADD_LETTER', letter: 'B'});
// store.dispatch({type: 'ADD_LETTER', letter: 'C'});
// store.dispatch({type: 'ADD_LETTER', letter: 'D'});

// store.subscribe(() => {
//   console.log('state updated');
//   console.log(store.getState());
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);