import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import UserSignUp from './components/signup'
import Transaction from './components/transaction'
import Expenses from './components/expenses'
import Home from './components/home'
import LogIn from './components/login'
import transactionList from './components/transactionList'


const requireLogin = (nextState, replace) => {
    if (!sessionStorage.jwt) {
        replace({ pathname: '/' })
    }
}

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="signup" component={UserSignUp}></Route>
    <Route path="login" component={LogIn}></Route>

    <Route path="transactions" component={Transaction} onEnter={requireLogin}>
      <IndexRoute component={transactionList} onEnter={requireLogin} />
    </Route>
    <Route path="expenses" component={Expenses} onEnter={requireLogin}>
    </Route>
  </Route>
)
