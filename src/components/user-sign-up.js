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
            <div className="col l12 m12 s12">
                  <div className="input-field col s6">
                    <form onSubmit={this.handleSubmit}>
                    <input placeholder="Placeholder" id="first_name" type="text" ref="name" className="validate" />
                    <input ref="email" />
                    <input type="password" ref="userPassword" />
                    <input type="password" ref="passwordConfirmation" />
                    <button type="submit">Submit</button>
                    </form>
                  </div>
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
