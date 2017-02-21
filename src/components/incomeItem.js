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
      <div className="row">

        <div className="center col l3 m3 s3">
        </div>

        <div className="center col l3 m3 s3">
          <div>{this.props.income.name}</div>
        </div>

        <div className="center col l3 m3 s3">
          <div>${parseFloat(this.props.income.amount.toFixed(2)).toLocaleString()}</div>
        </div>

        <div className="center col l3 m3 s3">
        </div>

      </div>
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

              <div className="col l3 m3 s3">
              </div>

              <div className="col l3 m3 s3">
                    <input className="center" type="text" value={this.state.income.name} onChange={this.handleChange.bind(this, 'name')}/>
              </div>

              <div className="col l3 m3 s3">
                    <input className="center" type="number" value={this.state.income.amount} onChange={this.handleChange.bind(this, 'amount')}/>
              </div>

              <div className="col l3 m3 s3">
              </div>

            </div>
              <br />
            <div className="row">
              <div className="col l6 m6 s6 offset-l3 offset-m3 offset-s3">
              <button className="btn black" style={{borderRadius: "20px"}} type="submit">Edit</button> &nbsp; &nbsp;
              <button className="btn black" style={{borderRadius: "20px"}} onClick={this.handleDelete.bind(this)}>Delete</button>
              </div>
            </div>

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
