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
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {connect} from 'react-redux'
import { updateTransaction } from '../actions'



class TransactionItem extends React.Component {

constructor(props) {
    super(props)
    this.state = {transaction: {name: this.props.transaction.name, value: this.props.transaction.value, day: this.props.transaction.day}}
}

transactionInfo() {
  return (
    <span>
      <span style={{float:'left', width:"33%"}}>{this.props.transaction.name}</span>
      <span style={{float: 'center', width:"33%"}}>{this.props.transaction.value.toFixed(2)}</span>
      <span style={{float: 'right', width:"33%"}}>{this.props.transaction.day}</span>
    </span>
  )
}

handleChange(key, event) {
  this.setState({transaction: Object.assign( {}, this.state.transaction, {[key]: event.target.value} ) })
}

handleSubmit(event) {
  event.preventDefault()
  const id = this.props.transaction.id
  const transactionParams = this.state
  this.props.updateTransaction(id, transactionParams)
}



form() {
  return (
    <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="row">
        <div className="col l4 m4 s4">
          <span style={{float:'center'}}>
            <input className="center" type="text" value={this.state.transaction.name} onChange={this.handleChange.bind(this, 'name')}/>
          </span>
        </div>
        <div className="col l4 m4 s4">
          <span style={{float:'center'}}>
            <input className="center" type="number" value={this.state.transaction.value} onChange={this.handleChange.bind(this, 'value')}/>
          </span>
        </div>
        <div className="col l4 m4 s4">
          <span style={{float:'center'}}>
            <input className="center datepicker" type="date" value={this.state.transaction.day} onChange={this.handleChange.bind(this, 'day')}/> 
            </span>
        </div>
      </div>
      <br />
      <button className="center btn blue darken-2" style={{float:'center', width:"10%"}} type="submit">Edit</button> &nbsp; &nbsp;
      <button className="center btn blue darken-2" style={{float:'center', width:"10%"}} type="submit">Delete</button>
  </form>
  )
}

render () {
    return(
      <div>
          <CollapsibleItem className="center" header={this.transactionInfo()}>
               {this.form()}
          </CollapsibleItem>
      </div>
    )
  }
}

mapDispatchToProps(dispatch) {
    return {
    updateTransaction: function(id, transactionParams){
      let action = updateTransaction( id, transactionParams )
      dispatch( action )
    }
  }
}


export default connect(null, mapDispatchToProps)(TransactionItem)

