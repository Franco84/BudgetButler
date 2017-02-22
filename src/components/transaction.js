import React, {Component} from 'react'
import TransactionList from './transactionList'
import TransactionDates from './transactionDates'
import TransactionCreate from './transactionCreate'
import {Doughnut} from 'react-chartjs-2'
import {Modal} from 'react-materialize'

export default class Transaction extends Component {

  constructor(props) {
  super(props)
  this.state = {array: [],names:[]}
  this.onMapComplete = this.onMapComplete.bind(this)
  }

  onMapComplete(newValue) {
    let ordered = newValue.sort(function(a, b) {
        return parseFloat(b.value) - parseFloat(a.value);
    });

    this.setState({
      array: ordered.map((trans) => {
      return trans.value}).slice(0,5),
      names: ordered.map((trans) => {
      return trans.name
      }).slice(0,5)
    })
  }

  render(){
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December", "All"]
    return(
      <div>
        <br />

        <div className="row">
          <div className="center col l4 m4 s4 offset-l4 offset-m4 offset-s4">
            <TransactionDates months={monthNames} onMapComplete={this.onMapComplete}/>
          </div>
        </div>

        <div className="row">
          <div className="col l6 m6 s6 offset-l3 offset-m3 offset-s3">
            <div className="center" style={{fontSize: "2rem"}}>5 Largest Transactions This Month:</div>
            <Doughnut data={{labels: this.state.names,datasets:[
              {data: this.state.array,
            backgroundColor: ["#A30000","#FF7700","#00AFD5","#0F4C5C","#EFD28D"],
            hoverBackgroundColor: ["#FF6384","#F7D08A","#44CCFF","#23395B","#F1E8B8"]}]
            }} />
          </div>
        </div>

          <div className="row">

          <div className="col l4 m4 s4 offset-l4 offset-m4 offset-s4" style={{border: "1px solid black", borderRadius: "10px", padding: "25px"}}>
            <div className="center" style={{fontSize: "2rem"}}>Add A Transaction</div>
            <TransactionCreate />
          </div>
        </div>

        <div className="center" style={{fontSize: "2rem"}}>Transactions</div>
        <TransactionList onMapComplete={this.onMapComplete} />
    </div>
    )
  }
}
