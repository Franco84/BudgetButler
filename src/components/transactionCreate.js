import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createTransaction } from '../actions'
import {Collapsible, CollapsibleItem, Input} from 'react-materialize'

class TransactionCreate extends Component {
	constructor(props) {
		super(props)
		this.state = {transaction: {name: "", value: "", day: "", expense_id: ""} }
		this.createDropdown = this.createDropdown.bind(this)
	}

	createDropdown() {
			let a = this.props.expenses.map((expense) => {
				return {id: expense.id, category: expense.category}
			})

			return(
				a.map((a)=> {
				return (<option value={a.id}>{a.category}</option>)
			}))
	}

	handleInputChange(key, event) {
   		this.setState({
   			transaction: Object.assign({}, this.state.transaction, {[key]: event.target.value} )
   		});
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createTransaction( this.state.transaction )
		this.setState({transaction: {name: "", value: "", day: "", expense_id: ""} })
	}

	render() {
		return(
			<div className= 'center'>
				<h5> Add a transaction </h5>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input className="center" style={{width: "25%", float: "left"}} type='text' placeholder="Name" value={this.state.transaction.name} onChange={this.handleInputChange.bind(this, 'name')}/>
					<input className="center" style={{width: "25%", float: "center"}} type='number' placeholder="Amount" value={this.state.transaction.value} onChange={this.handleInputChange.bind(this, 'value')}/>
					<input className="center" style={{width: "25%", float: "right"}} type='date' placeholder="Date" className="datepicker" value={this.state.transaction.day} onChange={this.handleInputChange.bind(this, 'day')}/>
					<Input className="center" style={{width: "25%", float: "right"}} type='select' label="Category" defaultValue={this.state.transaction.expense_id} onChange={this.handleInputChange.bind(this, 'expense_id')} >
						{this.createDropdown()}
					</Input>
					<button className="btn blue darken-2" type="submit" >Submit </button>
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
