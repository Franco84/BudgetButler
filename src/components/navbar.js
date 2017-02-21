import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Logout from './logout'

class Navbar extends Component {

checkLogin (){
  if (!!sessionStorage.jwt) {
    return (
      <ul id="nav-mobile" className="logged-in right hide-on-med-and-down" style={{marginRight: "30px"}}>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/income">Income</Link></li>
        <li><Logout /></li>
      </ul>
    )
  } else {
    return (
      <ul id="nav-mobile" className="not-logged-in right hide-on-med-and-down" style={{marginRight: "30px"}}>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    )
  }
}

render(){
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper black">
          <Link to="/" className="brand-logo center">Budget Butler</Link>
        {this.checkLogin()}
        </div>
      </nav>
    </div>
    )
  }
}

export default Navbar;
