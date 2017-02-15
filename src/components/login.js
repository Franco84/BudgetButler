import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { authenticateUser } from '../actions/index'
import {connect} from 'react-redux'

class LogIn extends Component {

  handleSubmit(event) {
      event.preventDefault()
      const user = { email: this.refs.email.value, password: this.refs.userPassword.value }
      this.props.authenticateUser(user)
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col l6 m12 s12 offset-l2">
                    <br />
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="email">Email</label>
                    <input placeholder="Email" id="email" type="text" ref="email" className="validate" />
                    <label htmlFor="password">Password</label>
                    <input placeholder="Password" id="password" type="password" className="validate" ref="userPassword" />
                    <button className="btn blue darken-2" type="submit">Submit</button>
                    </form>
                    <h4>{this.props.currentUser}</h4>
            </div>
          </div>
          </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({authenticateUser: authenticateUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
