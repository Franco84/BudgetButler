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
					<br />
					<div className="row">
						<div className="center col l4 m4 s4 offset-l4 offset-m4 offset-s4">
							<span style={{fontSize: "2rem"}}>Add An Income</span>
							<form onSubmit={this.handleSubmit.bind(this)}>
								Name<input type='text' value={this.state.income.name} placeholder="Work, Rental Income, Dividends.." onChange={this.handleInputChange.bind(this, 'name')}/>
								Amount<input type='number' value={this.state.income.amount} placeholder="Monthly Total" onChange={this.handleInputChange.bind(this, 'amount')}/>
								<br/>
								<button className="btn black" style={{borderRadius: "20px"}} type="submit" >Submit</button>
							</form>
						</div>
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
