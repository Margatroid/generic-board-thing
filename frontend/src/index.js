import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import './index.css';
import App from './components/App/App';
import ideasReducer from './reducers';

const store = createStore(
  ideasReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
