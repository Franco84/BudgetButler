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
import { updateExpenses, deleteExpenses } from '../actions'

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
    <div className="row">

      <div className="center col l3 m3 s3">
      </div>

      <div className="center col l3 m3 s3">
        <div>{this.props.expense.category}</div>
      </div>

      <div className="center col l3 m3 s3">
        <div>${parseFloat(this.props.expense.budget.toFixed(2)).toLocaleString()}</div>
      </div>

      <div className="center col l3 m3 s3">
      </div>
    </div>
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
                <div className="col l3 m3 s3">
                </div>
                <div className="col l3 m3 s3">
                    <input className="center" type="text" value={this.state.expense.category} onChange={this.handleChange.bind(this, 'category')}/>
                </div>
                <div className="col l3 m3 s3">
                    <input className="center" type="number" value={this.state.expense.budget} onChange={this.handleChange.bind(this, 'budget')}/>
                </div>
                <div className="col l3 m3 s3">
                </div>
              </div>
              <br />
              <div className="row">
              <div className="col center l4 m4 s4 offset-l4 offset-m4 offset-s4">
              <button className="btn black" style={{borderRadius: "20px"}} type="submit">Edit</button> &nbsp; &nbsp;
              <button className="btn black" style={{borderRadius: "20px"}} onClick={this.handleDelete.bind(this)}>Delete</button>
            </div>
            </div>
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
