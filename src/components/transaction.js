import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createTransaction } from '../actions'
import $ from 'jquery'
import TransactionList from './transactionList'
import TransactionDates from './transactionDates'
import TransactionCreate from './transactionCreate'
import {Doughnut} from 'react-chartjs-2'
import {Modal, Button, ModalHeader, ModalBody, ModalFooter, Dropdown, Spinner} from 'elemental'

class Transaction extends Component {

  constructor(props) {
  super(props)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.state = {array: [],names:[], modalIsOpen: false, month: ""}
  this.onMapComplete = this.onMapComplete.bind(this)
  this.pleaseWork = this.pleaseWork.bind(this)
  }

  componentWillReceiveProps(next) {
    if (next.month.length > 0 ) {
      this.setState(
        {array: this.state.array, names: this.state.names, modalIsOpen: this.state.modalIsOpen, month: next.month})
      } else {
        this.setState(
          {array: this.state.array, names: this.state.names, modalIsOpen: this.state.modalIsOpen, month: `${(new Date().getMonth())}`});
      }
  }


  handleSubmit(state, transactionCreateComponent) {
          if (state.transaction.expense_id === "" || state.transaction.expense_id === "Select Category:") {
              alert('Please select a category')
          } else {
            debugger;
          this.props.createTransaction( state.transaction )
          transactionCreateComponent.setState({
                transaction: Object.assign({}, state.transaction, {name:'', value: "", day: "", month: ""})
            });
          }
      }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  pleaseWork() {
    return (<TransactionCreate expenses={this.props.expenses} handleSubmit={this.handleSubmit} month={this.state.month} />)
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
          <div className="center col l4 m4 s4 offset-l4 offset-m4 offset-s4">
            <Button onClick={this.toggleModal.bind(this)}>Add A Transaction</Button>
              <Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal.bind(this)} backdropClosesModal>
              	<ModalHeader text="Add A Transaction" showCloseButton onClose={this.toggleModal.bind(this)} />
              	<ModalBody>
                  {this.pleaseWork()}
                </ModalBody>
              	<ModalFooter>
              		<Button type="primary" onClick={this.toggleModal.bind(this)}>Close</Button>
              	</ModalFooter>
              </Modal>
          </div>
        </div>

        <div className="center" style={{fontSize: "2rem"}}>Transactions</div>
        <TransactionList onMapComplete={this.onMapComplete} />
    </div>
    )
  }
}

function mapStateToProps(state){
	return {
		expenses: state.expenses,
		month: state.month
	}
}

function mapDispatchToProps(dispatch) {
  return {
    createTransaction: function(transaction){
      let action = createTransaction( transaction )
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
