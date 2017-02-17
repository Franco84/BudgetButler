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
          <div className="col l10 m10 s12 offset-l1 offset-m1">
            <TransactionCreate />
          </div>
        </div>

        <div className="row">
          <div className="col l4 m4 s12 offset-l4 offset-m4">
            <Doughnut data={{labels: this.state.names,datasets:[
              {data: this.state.array,
            backgroundColor: ["red","yellow","green","blue","violet"],
            hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]}]
            }} />
          </div>
        </div>


        <TransactionList onMapComplete={this.onMapComplete} />

    </div>
    )
  }
}
