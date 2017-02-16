import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchTransactions } from '../actions'
import TransactionItem from './transactionItem'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import {Collapsible, CollapsibleItem} from 'react-materialize'


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
    else return(

      <div>

        <div className="row">
          <div className="col l4 m4 s4 center">
              Name<br /><hr />
          </div>
          <div className="col l4 m4 s4 center">
              Amount<br /><hr />
          </div>
            <div className="col l4 m4 s4 center">
                Date<br /><hr />
            </div>
          </div>
              <div className="row">
                <div className="col l12 m12 s12">
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
     transactions: state.transactions
 }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTransactions: fetchTransactions}, dispatch) // create, fetch, update, delete tranactions
}
//
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
