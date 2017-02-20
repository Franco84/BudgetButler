import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createIncome } from '../actions'

class IncomeCreate extends Component {

	constructor(props) {
		super(props)
		this.state = {income: {name: "", amount: ""} }
	}

	handleInputChange(key, event) {
   		this.setState({
   			income: Object.assign({}, this.state.income, {[key]: event.target.value} )
   		});
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createIncome( this.state.income )
		this.setState({income: {name: "", amount: ""} })
	}

	render() {
		return(
			<div>
				<div className="col l3 m3 s3">
				<h3> Add An Income </h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					Name<input type='text' value={this.state.income.name} onChange={this.handleInputChange.bind(this, 'name')}/>
					Amount <input type='number' value={this.state.income.amount} onChange={this.handleInputChange.bind(this, 'amount')}/>
					<button type="submit" >Submit </button>
				</form>
			</div>
			</div>
		)
	}

}



function mapDispatchToProps(dispatch) {
  return {
    createIncome: function(income){
      let action = createIncome( income )
      dispatch( action )
    }
  }
}

export default connect(null, mapDispatchToProps)(IncomeCreate)