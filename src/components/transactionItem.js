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
import {Collapsible, CollapsibleItem, Input} from 'react-materialize'
import {connect} from 'react-redux'
import { updateTransaction, deleteTransaction } from '../actions'



class TransactionItem extends React.Component {

constructor(props) {
    super(props)
    this.state = {transaction: {
      name: this.props.transaction.name,
      value: this.props.transaction.value,
      day: this.props.transaction.day,
      id: this.props.transaction.id,
      expense_id: this.props.transaction.expense_id,
      month: ""
    }
  }
}

findCategory() {
  let category = this.props.expenseList.filter((expense) => {
    if(expense.id === this.props.transaction.expense_id){
      return expense.category
    }
  })
  if (category[0]) {
   return category[0].category
 }
}

createDropdown() {
    let a = this.props.expenseList.map((expense) => {
      return {id: expense.id, category: expense.category}
    })
    return(
      a.map((a)=> {
      return (<option value={a.id}>{a.category}</option>)
    }))
}


componentWillReceiveProps(next){
  if (next.month.length > 0 ) {
    this.setState({transaction: {
      name: next.transaction.name,
      value: next.transaction.value,
      day: next.transaction.day,
      id: next.transaction.id,
      expense_id: next.transaction.expense_id,
      month: next.month}
    })
  } else {
      this.setState({
        transaction: Object.assign({}, this.state.transaction, {month: `${(new Date().getMonth())}` })
      });
    }
}

showDate(){
 let date = this.props.transaction.day
 return (date.slice(5) + '/' + date.slice(0,4)).split("-").join("/")
}

transactionInfo() {
  return (
    <div className="row">
      <div className="col l2 m2 s2"></div>
      <div className="col l2 m2 s2">{this.props.transaction.name}</div>
      <div className="col l2 m2 s2">{this.showDate()}</div>
      <div className="col l2 m2 s2">${parseFloat(this.props.transaction.value.toFixed(2)).toLocaleString()}</div>
      <div className="col l2 m2 s2">{this.findCategory.call(this)}</div>
      <div className="col l2 m2 s2"></div>
    </div>
  )
}

handleChange(key, event) {
  this.setState({transaction: Object.assign( {}, this.state.transaction, {[key]: event.target.value} ) })
}

handleSubmit(event) {
  event.preventDefault()
  this.props.updateTransaction(this.state.transaction)
}

handleDelete(event){
  event.preventDefault()
  this.props.deleteTransaction(this.state.transaction)
}

render () {
    return(
      <div>
          <CollapsibleItem id={this.state.transaction.id} className="center" header={this.transactionInfo()}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="center col l4 m4 s4 offset-l4 offset-m4 offset-s4">
                    Name:<input className="center" type="text" value={this.state.transaction.name} onChange={this.handleChange.bind(this, 'name')}/>
                    Date:<input className="center datepicker" type="date" value={this.state.transaction.day} onChange={this.handleChange.bind(this, 'day')}/>
                    Amount:<input className="center" type="number" value={this.state.transaction.value} onChange={this.handleChange.bind(this, 'value')}/>
                    Category:<Input className="center" type='select' label="Category" defaultValue={this.state.transaction.expense_id} onChange={this.handleChange.bind(this, 'expense_id')} >
                      {this.createDropdown()}
                    </Input>
                </div>
              </div>

                <div className="row">
                  <div className="center col l4 m4 s4 offset-l4 offset-m4 offset-s4">
                <br />
                <button className="center" style={{float:'center', backgroundColor: "white", border: "none"}} type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg></button> &nbsp; &nbsp;
                <button className="center" style={{float:'center', backgroundColor: "white", border: "none"}} onClick={this.handleDelete.bind(this)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg></button>
                </div>
                </div>

          </form>
          </CollapsibleItem>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    month: state.month
  }
}

function mapDispatchToProps(dispatch){
    return {
    updateTransaction: function(transaction){
      let action = updateTransaction( transaction )
      dispatch( action )
    },
    deleteTransaction: function(transaction){
      let action = deleteTransaction( transaction )
      dispatch( action )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionItem)
