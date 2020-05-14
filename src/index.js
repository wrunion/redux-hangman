import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import letterReducer from './reducers';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={createStore(letterReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);