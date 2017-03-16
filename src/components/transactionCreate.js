import React, {Component} from 'react'
import {Collapsible, CollapsibleItem, Input} from 'react-materialize'

export default class TransactionCreate extends Component {
	constructor(props) {
		super(props)
		this.state = {transaction: {name: "", value: "", day: "", expense_id: "", month: this.props.month}}
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



	render() {
		if (this.props.handleSubmit) {

			return(
				<div className='center'>
					<form onSubmit={(e) => {
						e.preventDefault()
						this.props.handleSubmit(this.state, this)
					}}>
						<input className="center" type='text' placeholder="Name" value={this.state.transaction.name} onChange={this.handleInputChange.bind(this, 'name')}/>
						<input className="center" type='number' placeholder="Amount" value={this.state.transaction.value} onChange={this.handleInputChange.bind(this, 'value')}/>
						<input className="center" type='date' placeholder="Date" className="datepicker" value={this.state.transaction.day} onChange={this.handleInputChange.bind(this, 'day')}/>
						<Input className="center" type='select' label="Budget" defaultValue={this.state.transaction.expense_id} onChange={this.handleInputChange.bind(this, 'expense_id')} >
							<option selected>Select Category:</option>
							{this.createDropdown()}
						</Input>
						<br />
						<button className="center" style={{marginTop: "10px", backgroundColor: "white", border: "none"}} type="submit" ><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg></button>
					</form>
				</div>
			)
		} else {
		return (<span></span>)
		}
	}
}
