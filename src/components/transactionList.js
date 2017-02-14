import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchTransactions } from '../actions'
import TransactionItem from './transactionItem'

class TransactionList extends Component {

  componentDidMount(){
      this.props.fetchTransactions()
  }

  transactionItems(){
    return this.props.transactions.map((tran, i) => { return <TransactionItem transaction={tran} key={i}/>})
  }


  render(){

    if (!this.props.transactions) {
    return ( <div>Loading...</div>) }
    return(
      <div>
            {this.transactionItems()}
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
     transactions: state.transactions
 }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTransactions: fetchTransactions}, dispatch) // create, fetch, update, delete tranactions
}
//
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
