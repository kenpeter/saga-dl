/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux
import { createStore, applyMiddleware, compose } from "redux";
// saga
import createSagaMiddleware from "redux-saga";
// redux provider
import { Provider } from "react-redux";

// if else
import { reducer } from "./redux";
// 1 flow entry
import { watcherSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

// dev tool
//const reduxDevTools =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// reducer
let store = createStore(
  reducer,
  //compose(applyMiddleware(sagaMiddleware), reduxDevTools)
  compose(applyMiddleware(sagaMiddleware))
);

// dog saga
sagaMiddleware.run(watcherSaga);

// provider..
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
