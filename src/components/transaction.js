import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import TransactionList from './transactionList'
import TransactionCreate from './transactionCreate'
import {Doughnut} from 'react-chartjs-2'


export default class Transaction extends Component {
<<<<<<< HEAD
=======
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

>>>>>>> b0208ab7cc74bf0d1ba540376107758f572f04bc

  render(){
    return(
      <div>
        <div className="row">
          <div className="col l3 m6 s6">
            <TransactionCreate />
          </div>
          <div className="col l6 m6 s6">
            <Doughnut data={{    labels: this.state.names,datasets: [
        {
            data: this.state.array,
            backgroundColor: [
                "red",
                "yellow",
                "green",
                "blue",
                "violet"
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
        <TransactionList onMapComplete={this.onMapComplete} />
      </div>
    </div>
    )
  }
}
