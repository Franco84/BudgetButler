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
import {Collapsible, CollapsibleItem, Input} from 'react-materialize'
import {connect} from 'react-redux'
import { updateTransaction, deleteTransaction } from '../actions'



class TransactionItem extends React.Component {

constructor(props) {
    super(props)
    this.state = {transaction: {
      name: this.props.transaction.name,
      value: this.props.transaction.value,
      day: this.props.transaction.day,
      id: this.props.transaction.id,
      expense_id: this.props.transaction.expense_id
    }
  }
}

findCategory() {

  let category = this.props.expenseList.filter((expense) => {
    if(expense.id === this.props.transaction.expense_id){
      return expense.category
    }
  })
  return category[0].category
}

createDropdown() {
    let a = this.props.expenseList.map((expense) => {
      return {id: expense.id, category: expense.category}
    })
    return(
      a.map((a)=> {
      return (<option value={a.id}>{a.category}</option>)
    }))
}


componentWillReceiveProps(next){
  this.setState({transaction: {
    name: next.transaction.name,
    value: next.transaction.value,
    day: next.transaction.day,
    id: next.transaction.id,
    expense_id: next.transaction.expense_id
    }
  })
}

transactionInfo() {
  return (
    <span>
      <span style={{float:'left', width:"25%"}}>{this.props.transaction.name}</span>
      <span style={{float: 'center', width:"25%"}}>{this.findCategory.call(this)}</span>
      <span style={{float: 'right', width:"25%"}}>{this.props.transaction.day}</span>
      <span style={{float: 'right', width:"25%"}}>{(this.props.transaction.value).toFixed(2)}</span>
    </span>
  )
}

handleChange(key, event) {
  this.setState({transaction: Object.assign( {}, this.state.transaction, {[key]: event.target.value} ) })
}

handleSubmit(event) {
  event.preventDefault()
  this.props.updateTransaction(this.state.transaction)
}

handleDelete(event){
  event.preventDefault()
  this.props.deleteTransaction(this.state.transaction)
}

render () {
    return(
      <div>
          <CollapsibleItem id={this.state.transaction.id} className="center" header={this.transactionInfo()}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="center">
                    <input style={{width: "25%", float: "left"}} className="center" type="text" value={this.state.transaction.name} onChange={this.handleChange.bind(this, 'name')}/>
                    <input style={{width: "25%", float: "center"}} className="center" type="number" value={this.state.transaction.value} onChange={this.handleChange.bind(this, 'value')}/>
                    <input style={{width: "25%", float: "right"}} className="center datepicker" type="date" value={this.state.transaction.day} onChange={this.handleChange.bind(this, 'day')}/>
                    <Input className="center" style={{width: "25%", float: "right"}} type='select' label="Category" defaultValue={this.state.transaction.expense_id} onChange={this.handleChange.bind(this, 'expense_id')} >
                      {this.createDropdown()}
                    </Input>
                </div>
              <br />
              <button className="center btn blue darken-2" style={{float:'center', width:"10%"}} type="submit">Edit</button> &nbsp; &nbsp;
              <button className="center btn blue darken-2" style={{float:'center', width:"10%"}} onClick={this.handleDelete.bind(this)}>Delete</button>
            </div>
          </form>
          </CollapsibleItem>
        </div>
    )
  }
}


function mapDispatchToProps(dispatch){
    return {
    updateTransaction: function(transaction){
      let action = updateTransaction( transaction )
      dispatch( action )
    },
    deleteTransaction: function(transaction){
      let action = deleteTransaction( transaction )
      dispatch( action )
    }
  }
}


export default connect(null, mapDispatchToProps)(TransactionItem)
