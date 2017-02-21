import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import IncomeList from './incomeList'
import IncomeCreate from './incomeCreate'

export default class Expenses extends Component {

  render(){
    return(
      <div>
        	<IncomeCreate />
        	<IncomeList />
    </div>
    )
  }
}
