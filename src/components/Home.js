import React, { Component } from 'react';
import UserSignUp from './user-sign-up'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <UserSignUp />
      </div>
    );
  }
}

export default Home;
