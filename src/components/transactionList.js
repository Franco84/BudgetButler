import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchTransactions, fetchExpenses } from '../actions'
import TransactionItem from './transactionItem'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import {Collapsible, CollapsibleItem, Dropdown, Button} from 'react-materialize'

class TransactionList extends Component {

  componentDidMount(){
    this.props.fetchExpenses()
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

          <div className="col l2 m2 s2">
          </div>
            <div className="center col l2 m2 s2 ">Name<hr/></div>
            <div className="center col l2 m2 s2 ">Category<hr/></div>
            <div className="center col l2 m2 s2 ">Date<hr/></div>
            <div className="center col l2 m2 s2 ">Amount<hr/></div>
            <div className="col l2 m2 s2">
            </div>
          </div>

              <Collapsible>
                {this.transactionItems()}
              </Collapsible>


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
  return bindActionCreators({fetchExpenses: fetchExpenses}, dispatch) // create, fetch, update, delete tranactions
}
//
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
