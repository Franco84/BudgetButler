import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions/index'
import {connect} from 'react-redux'

class UserSignUp extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
      event.preventDefault()
      const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}
      this.props.createUser(user)
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col l6 m12 s12 offset-l2">
                    <br />
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input placeholder="Name" id="name" type="text" ref="name" className="validate" />
                    <label htmlFor="email">Email</label>
                    <input placeholder="Email" id="email" type="text" ref="email" className="validate" />
                    <label htmlFor="password">Name</label>
                    <input placeholder="Password" id="password" type="password" className="validate" ref="userPassword" />
                    <label htmlFor="passwordConfirmation">Name</label>
                    <input placeholder="Password" id="passwordConfirmation" type="password" className="validate" ref="passwordConfirmation" />
                    <button className="btn blue darken-2" type="submit">Submit</button>
                    </form>
            </div>
          </div>
          </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({createUser: createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
