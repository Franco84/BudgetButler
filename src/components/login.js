import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { authenticateUser } from '../actions/index'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import { Link } from 'react-router'

class LogIn extends Component {

  handleSubmit(event) {
      event.preventDefault()
      const user = { email: this.refs.email.value, password: this.refs.userPassword.value }
      this.props.authenticateUser(user)
  }

  onClick(event) {
    event.preventDefault()
    const user = { email: "ian@ian.ian", password: "password" }
    this.props.authenticateUser(user)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l6 m6 s6 offset-l3 offset-m3 offset-s3 center">
            <br />
            <div style={{color: 'red'}}>
              {this.props.currentUser}
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label htmlFor="email">Email</label>
              <input placeholder="Email" id="email" type="text" ref="email" className="validate" />
              <label htmlFor="password">Password</label>
              <input placeholder="Password" id="password" type="password" className="validate" ref="userPassword" />
              <button className="btn black" style={{borderRadius: "20px"}} type="submit">Submit</button> <br/><br/>
              <button className="btn black" style={{borderRadius: "20px"}} onClick={this.onClick.bind(this)}>Guest Log In</button>
            </form>
            <br/>
            <Link to="/signup" className="center" style={{color: "black"}}>Don't have an account?</Link>
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
