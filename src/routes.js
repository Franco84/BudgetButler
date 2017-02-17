import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import UserSignUp from './components/user-sign-up'
import Transaction from './components/transaction'
import Expenses from './components/expenses'
import Home from './components/Home'
import LogIn from './components/login'
import transactionList from './components/transactionList'

export default(
  <Route path="/" component={App}>
    <Route path="/home" component={Home}></Route>
    <Route path="login" component={LogIn}></Route>
    <Route path="transactions" component={Transaction}><IndexRoute component={transactionList} /></Route>
    <Route path="signup" component={UserSignUp}></Route>
    <Route path="expenses" component={Expenses}></Route>
  </Route>
)


