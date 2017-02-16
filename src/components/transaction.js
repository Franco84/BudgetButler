import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import TransactionList from './transactionList'
import TransactionCreate from './transactionCreate'
import {Doughnut} from 'react-chartjs-2'


export default class Transaction extends Component {
  constructor(props) {
  super(props)
  this.state = {array: [],names:[]}
  this.onMapComplete = this.onMapComplete.bind(this)
  }

  componentDidMount() {
  }

  onMapComplete(newValue) {
    this.setState({
      array: newValue.map((trans) => {
      return trans.value}),
      names: newValue.map((trans) => {
      return trans.name
      })
    })
  }


  render(){
    return(
      <div>
        <div className="row">
          <div className="col l6 m6 s6 offset-l6">
            <Doughnut data={{    labels: this.state.names,datasets: [
        {
            data: this.state.array,
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "green",
                "blue"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]

      }} />
          </div>
        </div>
        <div className="row">
        <TransactionCreate />
        <TransactionList onMapComplete={this.onMapComplete} />
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
