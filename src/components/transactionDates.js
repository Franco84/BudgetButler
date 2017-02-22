import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Input} from 'react-materialize'
import { fetchTransactionByDate, fetchTransactions, changeMonth } from '../actions'

class TransactionDates extends Component {

    constructor(props)  {
        super (props)
        this.state = {month: (new Date().getMonth())}
    }

    componentDidMount(){
        this.props.fetchTransactionByDate(this.state.month)
    }

    changeDate(event) {
        if (event.target.value === "12") {
            this.setState({month:event.target.value})
            this.props.fetchTransactions(this.props.onMapComplete)
        } else {
            this.setState({month:event.target.value})
            this.props.fetchTransactionByDate(this.state.month)
            this.props.changeMonth(this.state.month)
        }
    }

    createDropdown() {
        let list = this.props.months.map((month,index) => {
          return (<option value={index}>{month}</option>)
        })
        return list
    }

     render() {
        return(
            <div>
                <form>
                    <Input className="center"  type='select' label="Category" defaultValue={this.state.month} onChange={this.changeDate.bind(this)}>
                            {this.createDropdown()}
                    </Input>
                </form>
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
  return {
    fetchTransactionByDate: function(month){
      let action = fetchTransactionByDate( month )
      dispatch( action )
    },
    fetchTransactions: function(map){
        let action = fetchTransactions(map)
        dispatch(action)
    },
    changeMonth: function(month) {
        let action = changeMonth(month)
        dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionDates)
