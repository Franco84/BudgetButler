import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createTransaction } from '../actions'

class TransactionCreate extends Component {

	constructor(props) {
		super(props)
		this.state = {transaction: {name: "", value: "", day: ""} } // NEED EXPENSE ID HERE ALSO
	}

	handleInputChange(key, event) {
   		this.setState({
   			transaction: Object.assign({}, this.state.transaction, {[key]: event.target.value} )
   		});
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createTransaction( this.state.transaction )
		this.setState({transaction: {name: "", value: "", day: ""} })
	}

	render() {
		return(
<<<<<<< HEAD
			<div>
<<<<<<< HEAD
				<div className="col l3 m3 s3">
				<h3> Add A Transaction </h3>
=======
					<div className="col l3 m3 s3">
				<h5> Add a transaction </h5>
>>>>>>> b0208ab7cc74bf0d1ba540376107758f572f04bc
=======
			<div className="center">
				<br />
				<h5> Add a Transaction </h5>
>>>>>>> 9850bf4cc14b7c8b498aaf4c036ab41bda07c6ca
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input className="center" style={{width: "33%", float: "left"}} type='text' placeholder="Name" value={this.state.transaction.name} onChange={this.handleInputChange.bind(this, 'name')}/>
					<input className="center" style={{width: "33%", float: "center"}} type='number' placeholder="Amount" value={this.state.transaction.value} onChange={this.handleInputChange.bind(this, 'value')}/>
					<input className="center" style={{width: "33%", float: "right"}} type='date' placeholder="Date" className="datepicker" value={this.state.transaction.day} onChange={this.handleInputChange.bind(this, 'day')}/>
					<button type="submit" >Submit </button>
				</form>
			</div>
		)
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

export default connect(null, mapDispatchToProps)(TransactionCreate)
