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



export default class TransactionItem extends React.Component {

handleSubmit(event) {
  // eventPreventDefault()
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

form() {
  return (
    <form onSubmit={this.handleSubmit.bind(this, this.props.transaction.id)}>
      <div className="row">
        <div className="col l4 m4 s4">
      <span style={{float:'center'}}><input className="center" type="text" placeholder={this.props.transaction.name} value={this.props.transaction.name} /></span>
      </div>
      <div className="col l4 m4 s4">
      <span style={{float:'center'}}><input className="center" type="text" placeholder={this.props.transaction.value.toFixed(2)} value={this.props.transaction.value.toFixed(2)} /></span>
      </div>
      <div className="col l4 m4 s4">
      <span style={{float:'center'}}><input className="center" type="text" placeholder={this.props.transaction.day} value={this.props.transaction.day} /></span>
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
