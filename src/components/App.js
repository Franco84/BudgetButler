import React, { Component } from 'react';
import UserSignUp from './user-sign-up'
import {Link} from 'react-router'
import Logout from './logout'

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-2">
            <Link to="/home" className="brand-logo center">Budget Butler</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/transactions">Transactions</Link></li>
              <li><Link to="/expenses">Expenses</Link></li>              
              <li><a href="collapsible.html">Goals</a></li>
              <li><a href="badges.html">Income</a></li>
              <li><Logout /></li>
            </ul>
          </div>
        </nav>
      {this.props.children}
      </div>
    );
  }
}

export default Home;
