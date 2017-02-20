import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import UserSignUp from './components/user-sign-up'
import Transaction from './components/transaction'
import Expenses from './components/expenses'
import Home from './components/Home'
import LogIn from './components/login'
import transactionList from './components/transactionList'
import Income from './components/income'


const requireLogin = (nextState, replace) => {
    if (!sessionStorage.jwt) {
        replace({ pathname: '/' })
    }
}

export default(
  <Route path="/" component={App}>
    <Route path="/home" component={Home}></Route>
    <Route path="signup" component={UserSignUp}></Route>
    <Route path="expenses" component={Expenses}></Route>
    <Route path="income" component={Income}></Route>
    <Route path="login" component={LogIn}></Route>
    <Route path="transactions" component={Transaction} onEnter={requireLogin}>
      <IndexRoute component={transactionList} onEnter={requireLogin} />
    </Route>
    <Route path="expenses" component={Expenses} onEnter={requireLogin}>
    </Route>
  </Route>
)
