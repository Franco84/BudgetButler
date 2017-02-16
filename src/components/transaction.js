import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import TransactionList from './transactionList'
import TransactionCreate from './transactionCreate'

export default class Transaction extends Component {
  // constructor() {
  //
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }
  render(){
    return(
      <div>
        <div className="row">
        <TransactionCreate />
        <TransactionList />
      </div>
    </div>
    )
  }
}


// function mapStateToProps(state){
//   return {
//      tranactions: state.tranactions
//  }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({createTransactions: createTransactions}, dispatch) // create, fetch, update, delete tranactions
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
