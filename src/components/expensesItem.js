import React from 'react'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/selectable';
import ReactDOM from 'react-dom'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {connect} from 'react-redux'
import { updateExpenses, deleteExpenses, fetchTransactions } from '../actions'

class ExpensesItem extends React.Component {

constructor(props) {
    super(props)
    this.state = {expense: {category: this.props.expense.category, budget: this.props.expense.budget, id: this.props.expense.id}}
}

componentWillReceiveProps(next){
  this.setState({expense: {category: next.expense.category, budget: next.expense.budget, id: next.expense.id}})
}

expenseInfo() {
  return (
    <span>
      <span style={{float:'left', width:"33%"}}>{this.props.expense.category}</span>
      <span style={{float: 'center', width:"33%"}}>{(this.props.expense.budget).toFixed(2)}</span>
    </span>
  )
}

handleChange(key, event) {
  this.setState({expense: Object.assign( {}, this.state.expense, {[key]: event.target.value} ) })
}

handleSubmit(event) {
  event.preventDefault()
  this.props.updateExpenses(this.state.expense)
}

handleDelete(event){
  event.preventDefault()
  this.props.deleteExpenses(this.state.expense)
}

render () {
    return(
      <div>
          <CollapsibleItem id={this.state.expense.id} className="center" header={this.expenseInfo()}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="col l4 m4 s4">
                  <span style={{float:'center'}}>
                    <input className="center" type="text" value={this.state.expense.category} onChange={this.handleChange.bind(this, 'category')}/>
                  </span>
                </div>
                <div className="col l4 m4 s4">
                  <span style={{float:'center'}}>
                    <input className="center" type="number" value={this.state.expense.budget} onChange={this.handleChange.bind(this, 'budget')}/>
                  </span>
                </div>
              </div>
              <br />
              <button className="center btn blue darken-2" style={{float:'center', width:"10%"}} type="submit">Edit</button> &nbsp; &nbsp;
              <button className="center btn blue darken-2" style={{float:'center', width:"10%"}} onClick={this.handleDelete.bind(this)}>Delete</button>
          </form>
          </CollapsibleItem>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
    return {
    updateExpenses: function(expense){
      let action = updateExpenses( expense )
      dispatch( action )
    },
    deleteExpenses: function(expense){
      let action = deleteExpenses( expense )
      dispatch( action )
    }
  }
}


export default connect(null, mapDispatchToProps)(ExpensesItem)
