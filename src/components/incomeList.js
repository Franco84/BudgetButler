import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchIncome } from '../actions'
import IncomeItem from './incomeItem'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import {Collapsible, CollapsibleItem} from 'react-materialize'

class IncomeList extends Component {

  componentDidMount(){
    this.props.fetchIncome()
  }

  incomeItems(){
    return this.props.income.map((inc, i) => { return <IncomeItem income={inc} key={i}/>})
  }

  render(){
    if (!this.props.income) {
      return ( <div>Loading...</div>) }
    else return(
      <div>
        <br />
          <div className="row">
            <div className="col l3 m3 s3 center">
            </div>
            <div className="col l3 m3 s3 center">
                Name<hr />
            </div>

            <div className="col l3 m3 s3 center">
                Amount<hr />
            </div>
            <div className="col l3 m3 s3 center">
            </div>
          </div>


                <Collapsible>
              		{this.incomeItems()}
                </Collapsible>

        </div>
    )
  }
}


function mapStateToProps(state){
  return {
     income: state.income
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchIncome: fetchIncome}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(IncomeList)
