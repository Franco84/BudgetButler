import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { logoutUser } from '../actions'
import {Link} from 'react-router'


class Logout extends Component {

	handleClick(event) {
		this.props.logoutUser()
	}

	render() {
		return (
			<Link to="/signin" onClick={this.handleClick.bind(this)}> Log Out </Link>
		)
	}

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({logoutUser: logoutUser}, dispatch)
}


export default connect(null, mapDispatchToProps)(Logout)
