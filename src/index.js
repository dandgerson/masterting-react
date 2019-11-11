import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './main.scss';
import App from './App'
import * as serviceWorker from './serviceWorker';

import store from './redux/store'
// console.log({state: store.getState()})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
