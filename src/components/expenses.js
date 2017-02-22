import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import ExpensesList from './expensesList'
import ExpensesCreate from './expensesCreate'
import { fetchExpenses, fetchIncome } from '../actions'
import {Pie} from 'react-chartjs-2'

class Expenses extends Component {

  componentDidMount(){
    this.props.fetchIncome()
    this.props.fetchExpenses()
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
    return(
      <div>
        <br />
        <div className="row center">
          <ExpensesCreate />
          <div className="col l6 m6 s6 offset-l1 offset-m1 offset-s1">
            <div className="center" style={{fontSize: "2rem"}}>Income vs. Budget</div>
            <Pie data={{labels: ["Income","Budget"],datasets:[
              {data: [this.addIncome(),this.addExpenses()],
                backgroundColor: ["green","red"],
                hoverBackgroundColor: ["#7EE081","maroon"]}]
              }} />
            </div>
        </div>

        	<ExpensesList />
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


export default connect(mapStateToProps, mapDispatchToProps)(Expenses)
