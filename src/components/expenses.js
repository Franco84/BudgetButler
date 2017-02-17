import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import ExpensesList from './expensesList'
import ExpensesCreate from './expensesCreate'

export default class Expenses extends Component {

  render(){
    return(
      <div>
        <div className="row">
        	<ExpensesCreate />
        	<ExpensesList />
      </div>
    </div>
    )
  }
}
