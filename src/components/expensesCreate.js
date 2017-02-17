import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createExpense } from '../actions'

class ExpensesCreate extends Component {

	constructor(props) {
		super(props)
		this.state = {expense: {category: "", budget: ""} }
	}

	handleInputChange(key, event) {
   		this.setState({
   			expense: Object.assign({}, this.state.expense, {[key]: event.target.value} )
   		});
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createExpense( this.state.expense )
		this.setState({expense: {name: "", value: "", day: ""} })
	}

	render() {
		return(
			<div>
				<div className="col l3 m3 s3">
				<h3> Add An Expense </h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					Category<input type='text' value={this.state.expense.category} onChange={this.handleInputChange.bind(this, 'category')}/>
					Amount <input type='number' value={this.state.expense.budget} onChange={this.handleInputChange.bind(this, 'budget')}/>
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