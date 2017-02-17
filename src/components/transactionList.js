import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchTransactions, fetchExpenses } from '../actions'
import TransactionItem from './transactionItem'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import {Collapsible, CollapsibleItem} from 'react-materialize'


class TransactionList extends Component {

  componentDidMount(){
    this.props.fetchExpenses()
    this.props.fetchTransactions(this.props.onMapComplete)
  }

  componentWillReceiveProps(nextProps){
    this.props.onMapComplete(nextProps.transactions)
  }

  transactionItems(){
    return this.props.transactions.map((tran, i) => {return <TransactionItem transaction={tran} expenseList={this.props.expenses} key={i}/>})
  }

  render(){
    if (!this.props.transactions) {
      return ( <div>Loading...</div>) }
    else
    return(

      <div>
        <br />

        <div className="row">
          <div className="col l10 m10 s12 offset-l1 offset-m1 center">
            <span className="center" style={{width: "25%", float: "left"}}>Name</span>
            <span className="center" style={{width: "25%", float: "center"}}>Category</span>
            <span className="center" style={{width: "25%", float: "right"}}>Date</span>
            <span className="center" style={{width: "25%", float: "right"}}>Amount</span>
          <hr/>
          </div>
        </div>

          <div className="row">
            <div className="col l10 m10 s9 offset-l1 offset-m1 center">
              <Collapsible>
                {this.transactionItems()}
              </Collapsible>
            </div>
          </div>

          <br />
        </div>
    )
  }
}


function mapStateToProps(state){
  return {
     transactions: state.transactions,
     expenses: state.expenses
 }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTransactions: fetchTransactions, fetchExpenses: fetchExpenses}, dispatch) // create, fetch, update, delete tranactions
}
//
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
