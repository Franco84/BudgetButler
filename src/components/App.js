import React, { Component } from 'react';
import Navbar from './navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
