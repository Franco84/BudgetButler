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
import { updateIncome, deleteIncome } from '../actions'

class IncomeItem extends React.Component {

constructor(props) {
    super(props)
    this.state = {income: {name: this.props.income.name, amount: this.props.income.amount, id: this.props.income.id}}
}

componentWillReceiveProps(next){
  this.setState({income: {name: next.income.name, amount: next.income.amount, id: next.income.id}})
}

incomeInfo() {
  return (
    <span>
      <span style={{float:'left', width:"33%"}}>{this.props.income.name}</span>
      <span style={{float: 'center', width:"33%"}}>${parseFloat(this.props.income.amount.toFixed(2)).toLocaleString()}</span>
    </span>
  )
}

handleChange(key, event) {
  this.setState({income: Object.assign( {}, this.state.income, {[key]: event.target.value} ) })
}

handleSubmit(event) {
  event.preventDefault()
  this.props.updateIncome(this.state.income)
}

handleDelete(event){
  event.preventDefault()
  this.props.deleteIncome(this.state.income)
}

render () {
    return(
      <div>
          <CollapsibleItem id={this.state.income.id} className="center" header={this.incomeInfo()}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="col l4 m4 s4">
                  <span style={{float:'center'}}>
                    <input className="center" type="text" value={this.state.income.name} onChange={this.handleChange.bind(this, 'name')}/>
                  </span>
                </div>
                <div className="col l4 m4 s4">
                  <span style={{float:'center'}}>
                    <input className="center" type="number" value={this.state.income.amount} onChange={this.handleChange.bind(this, 'amount')}/>
                  </span>
                </div>
              </div>
              <br />
              <button className="center btn blue darken-2" style={{float:'center', width:"10%"}} type="submit">Edit</button> &nbsp; &nbsp;
              <button className="center btn blue darken-2" style={{float:'center', width:"10%"}} onClick={this.handleDelete.bind(this)}>Delete</button>
          </form>
          </CollapsibleItem>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
    return {
    updateIncome: function(income){
      let action = updateIncome( income )
      dispatch( action )
    },
    deleteIncome: function(income){
      let action = deleteIncome( income )
      dispatch( action )
    }
  }
}


export default connect(null, mapDispatchToProps)(IncomeItem)
