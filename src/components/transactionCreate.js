import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createTransaction } from '../actions'
import {Collapsible, CollapsibleItem, Input} from 'react-materialize'

class TransactionCreate extends Component {
	constructor(props) {
		super(props)
		this.state = {transaction: {name: "", value: "", day: "", expense_id: "" }}
		this.createDropdown = this.createDropdown.bind(this)
	}

	createDropdown() {
			let expenseList = this.props.expenses.map((expense) => {
				return {id: expense.id, category: expense.category}
			})

			return(
				expenseList.map((expense)=> {
				return (<option value={expense.id}>{expense.category}</option>)
			}))
	}

	handleInputChange(key, event) {
   		this.setState({
   			transaction: Object.assign({}, this.state.transaction, {[key]: event.target.value} )
   		});
	}

	handleSubmit(event) {
	        event.preventDefault()
	        if (this.state.transaction.expense_id === "" || this.state.transaction.expense_id === "Select Category:") {
	            alert('Please select a category')
	        } else {
	        this.props.createTransaction( this.state.transaction )
	        this.setState({
	              transaction: Object.assign({}, this.state.transaction, {name:'', value: "", day: ""})
	          });
	        }
	    }

	render() {
			return(
				<div className='center'>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input className="center" type='text' placeholder="Name" value={this.state.transaction.name} onChange={this.handleInputChange.bind(this, 'name')}/>
						<input className="center" type='number' placeholder="Amount" value={this.state.transaction.value} onChange={this.handleInputChange.bind(this, 'value')}/>
						<input className="center" type='date' placeholder="Date" className="datepicker" value={this.state.transaction.day} onChange={this.handleInputChange.bind(this, 'day')}/>
						<Input className="center" type='select' label="Budget" defaultValue={this.state.transaction.expense_id} onChange={this.handleInputChange.bind(this, 'expense_id')} >
							<option selected>Select Category:</option>
							{this.createDropdown()}
						</Input>
						<br />
						<button className="btn black" style={{borderRadius: "20px"}} type="submit" >Submit</button>
					</form>
				</div>
			)
		}
}

function mapStateToProps(state){
	return {
		expenses: state.expenses
	}
}

function mapDispatchToProps(dispatch) {
  return {
    createTransaction: function(transaction){
      let action = createTransaction( transaction )
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionCreate)
