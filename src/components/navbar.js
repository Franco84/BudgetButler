import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Logout from './logout'
import {Dropdown, NavItem, Button} from 'react-materialize'
import $ from 'jquery'

class Navbar extends Component {

checkLogin (){
  if (!!sessionStorage.jwt) {
    return (

      <div>

        <ul id="nav-mobile" className="logged-in right hide-on-med-and-down" style={{marginRight: "30px"}}>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/expenses">Budget</Link></li>
          <li><Link to="/income">Income</Link></li>
          <li><Logout /></li>
        </ul>

      <div className="hide-on-large-only">
        <div className="row">
          <div className="col l3 m3 s3">
            <Dropdown className="black" trigger={
                <div style={{paddingLeft: "25px"}}><img src={require('../../img/ham.png')} /></div>
              }>
              <div style={{marginTop: "41px"}}>
                <NavItem><Link to="/transactions">Transactions</Link></NavItem>
                <NavItem divider />
                <NavItem><Link to="/expenses">Budget</Link></NavItem>
                <NavItem divider />
                <NavItem><Link to="/income">Income</Link></NavItem>
                <NavItem divider />
                <NavItem><Logout /></NavItem>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

    </div>
    )
  } else {
    return (

      <div>

        <ul id="nav-mobile" className="not-logged-in right hide-on-med-and-down" style={{marginRight: "30px"}}>
          <li><Link to="/signup"><svg style={{marginBottom: "-5px"}} fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
          </svg> Sign Up</Link></li>
          <li><Link to="/login"><svg style={{marginBottom: "-5px"}} fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
            </svg> Log In</Link></li>
        </ul>


      <div className="hide-on-large-only">
        <div className="row">
          <div className="col l3 m3 s3">
                <Dropdown className="black" trigger={
                    <div style={{paddingLeft: "25px"}}><img src={require('../../img/ham.png')} /></div>
                  }>
              <div className="black" style={{marginTop: "41px"}}>
                <NavItem><Link to="/signup"><svg style={{marginBottom: "-5px"}} fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                  </svg> Sign Up</Link></NavItem>
                <NavItem><div style={{paddingTop: "10px", paddingBottom: "10px"}}><Link to="/login"><svg style={{marginBottom: "-5px"}} fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
                  </svg> Log In</Link></div></NavItem>
                <NavItem divider />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

    </div>
    )
  }
}

render(){
  return (
      <nav>
        <div className="navbar-fixed">
        <div className="nav-wrapper black">
          <Link to="/" className="brand-logo center logosize">Budget Butler</Link>
        {this.checkLogin()}
        </div>
    </div>
  </nav>
    )
  }
}

export default Navbar;
