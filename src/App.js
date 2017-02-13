import React, { Component } from 'react';
import UserSignUp from './components/user-sign-up'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="#" className="brand-logo center">Budget Butler</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        <UserSignUp />
      </div>
    );
  }
}

export default App;
