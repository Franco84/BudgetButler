import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import UserSignUp from './components/user-sign-up'
import Transaction from './components/transaction'
import Home from './components/Home'
import LogIn from './components/login'

export default(
  <Route path="/" component={App}>
    <Route path="/home" component={Home}></Route>
    <Route path="login" component={LogIn}></Route>
    <Route path="transactions" component={Transaction}></Route>
  </Route>
)
