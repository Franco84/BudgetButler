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
        <div className="row">
          <div className="col l4 m4 s4">
          <table>
            <thead>
              <tr>
                  <th data-field="id">Name</th>
                  <th data-field="name">Value</th>
                  <th data-field="price">Date</th>
              </tr>
            </thead>

            <tbody>
            {this.transactionItems()}
            </tbody>
          </table>
          </div>
          </div>
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
