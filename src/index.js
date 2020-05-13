import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
// import reducers from './reducers';
import reducer from './reducers/TestActionsAndReducers';
import { Provider } from 'react-redux';

// store.subscribe(() =>
//   console.log(store.getState())
// );

// export const initState = {
//   letterArray: []
// }

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);