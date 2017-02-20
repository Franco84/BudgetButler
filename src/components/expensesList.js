import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchExpenses, fetchIncome } from '../actions'
import ExpensesItem from './expensesItem'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {Pie} from 'react-chartjs-2'

class ExpensesList extends Component {

  componentDidMount(){
    this.props.fetchIncome()
    this.props.fetchExpenses()
  }

  expensesItems(){
    return this.props.expenses.map((exp, i) => { return <ExpensesItem expense={exp} key={i}/>})
  }

  addIncome() {
    let amount = 0 
    this.props.income.map((income) => {
      amount += income.amount
      return income
    })
    debugger
    return amount 
  }

  addExpenses() {
    let amount = 0 
    this.props.expenses.map((expense) => {
      amount += expense.budget
      return expense
    })
    return amount 
  }

  render(){
    if (!this.props.expenses) {
      return ( <div>Loading...</div>) }
    else return(
      <div>
        <br />
          <div className="col l3 m3 s3 center">
              Category<br /><hr />
          </div>
          <div className="col l3 m3 s3 center">
              Amount<br /><hr />
          </div>
          <div className="row">
            <div className="col l9 m9 s9">
                <Collapsible>
              		{this.expensesItems()}
                </Collapsible>
            </div>
          </div>
        <br />
        {this.addIncome()} 
        <br />
        {this.addExpenses()}
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
     expenses: state.expenses,
     income: state.income
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchExpenses: fetchExpenses, fetchIncome: fetchIncome}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList)
