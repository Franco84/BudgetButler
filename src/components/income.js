import React, {Component} from 'react'
import IncomeList from './incomeList'
import IncomeCreate from './incomeCreate'

export default class Expenses extends Component {

  render(){
    return(
      <div>
        <div className="row">
        	<IncomeCreate />
        	<IncomeList />
      </div>
    </div>
    )
  }
}
