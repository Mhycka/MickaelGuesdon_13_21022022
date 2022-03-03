import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios'

/**
 * Axios config
 */
axios.defaults.baseURL = 'http://localhost:3001/api/v1';
axios.defaults.headers.common['accept'] = `application/json`
axios.defaults.headers.common['Content-Type'] = `application/json`


/**
 * React render
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);