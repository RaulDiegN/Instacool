import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as reducers from './ducks'
import services from './services'

const history = createHistory()
const store = createStore(combineReducers({
  ...reducers,
  form: formReducer,
}), applyMiddleware(thunk.withExtraArgument(services)))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history}/>
    </Router>
  </Provider>,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
