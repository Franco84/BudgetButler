import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import ReduxPromise from 'redux-promise'
import routes from './routes'
import rootReducer from './reducers/root-reducer'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'

const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);
