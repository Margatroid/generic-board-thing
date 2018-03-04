import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import ideasReducer from './reducers';

import './index.css';
import App from './components/App/App';

const store = createStore(ideasReducer);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
