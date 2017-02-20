import React, { Component } from 'react';
import { Link } from 'react-router'


class Home extends Component {
  render() {
    return (
      <div className="container center">
        <h3>You need a Budget Butler!</h3>
        <div className="center">
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/login">Log IN</Link></button>
        </div>
      </div>
    );
  }
}

export default Home;
