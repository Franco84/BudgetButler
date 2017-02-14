import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import TransactionList from './transactionList'

export default class Transaction extends Component {
  // constructor() {
  //
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }
  render(){
    return(
      <div>
        <TransactionList />
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
