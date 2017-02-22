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
				<div className="col l4 m4 s4 offset-l1 offset-m1 offset-s1">
				<span className="center" style={{fontSize: "2rem"}}>Add An Budget Item </span>
				<form onSubmit={this.handleSubmit.bind(this)}>
					Name<input type='text' value={this.state.expense.category} onChange={this.handleInputChange.bind(this, 'category')}/>
					Amount<input type='number' value={this.state.expense.budget} onChange={this.handleInputChange.bind(this, 'budget')}/>
					<button className="center btn black" style={{borderRadius: "20px"}} type="submit" >Submit</button>
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
