import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createExpense } from '../actions'
import {Input} from 'react-materialize'


class ExpensesCreate extends Component {

	constructor(props) {
		super(props)
		this.state = {expense: {category: "", budget: "", month: ''} }
		this.createDropdown = this.createDropdown.bind(this)
	}

	handleInputChange(key, event) {
   		this.setState({
   			expense: Object.assign({}, this.state.expense, {[key]: event.target.value} )
   		});
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createExpense( this.state.expense )
		this.setState({expense: {category: "", budget: "", month: ""} })
	}

	createDropdown() {
		const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]

		return(
			monthNames.map((month, index)=> {
			return (<option value={index}>{month}</option>)
		}))
	}

	render() {
		return(
			<div>
				<div className="col l4 m4 s4 offset-l1 offset-m1 offset-s1">
				<span style={{fontSize: "2rem"}}>Add An Budget Item </span>
				<form onSubmit={this.handleSubmit.bind(this)}>
					Category<input type='text' value={this.state.expense.category} onChange={this.handleInputChange.bind(this, 'category')}/>
					Amount <input type='number' value={this.state.expense.budget} onChange={this.handleInputChange.bind(this, 'budget')}/>
					Month <Input type='select' value={this.state.expense.month} onChange={this.handleInputChange.bind(this, 'month')}>
							<option selected>Select Month:</option>
								{this.createDropdown()}
						  </Input>
					<button type="submit" >Submit </button>
				</form>
			</div>
			</div>
		)
	}

}


function mapDispatchToProps(dispatch) {
  return {
    createExpense: function(expense){
      let action = createExpense( expense )
      dispatch( action )
    }
  }
}

export default connect(null, mapDispatchToProps)(ExpensesCreate)