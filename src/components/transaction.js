import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import TransactionList from './transactionList'
import TransactionCreate from './transactionCreate'
import {Doughnut} from 'react-chartjs-2'
import {Collapsible, CollapsibleItem, Dropdown, Button, NavItem} from 'react-materialize'


export default class Transaction extends Component {

  constructor(props) {
  super(props)
  this.state = {array: [],names:[]}
  this.onMapComplete = this.onMapComplete.bind(this)
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

  createDropdown() {
    let monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
    let d = new Date()
    let list = monthNames.map((month) => {
      return (<NavItem>{month}</NavItem>)
    })
    return (
      <Dropdown trigger={<Button style={{backgroundColor: "#000", borderRadius: "20px"}}>{monthNames[d.getMonth()]}</Button>}>
      {list}
      </Dropdown>
    )
}

  render(){
    return(
      <div>

        <br />
        <div className="row">
          <div className="center col l6 m6 s6 offset-l3 offset-m3 offset-s3">
            {this.createDropdown()}
          </div>
        </div>

        <div className="row">

          <div className="col l4 m4 s4 offset-l1 offset-m1 offset-s1">
            <div className="center" style={{fontSize: "2rem"}}>Add A Transaction</div>
            <TransactionCreate />
          </div>

          <div className="col l6 m6 s6 offset-l1 offset-m1 offset-s1">
            <div className="center" style={{fontSize: "2rem"}}>Largest Transactions This Month:</div>
            <Doughnut data={{labels: this.state.names,datasets:[
              {data: this.state.array,
            backgroundColor: ["red","yellow","green","blue","violet"],
            hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]}]
            }} />
          </div>

      </div>

        <div className="center" style={{fontSize: "2rem"}}>Transactions</div>
        <TransactionList onMapComplete={this.onMapComplete} />

    </div>
    )
  }
}
