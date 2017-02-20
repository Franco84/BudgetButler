import React, { Component } from 'react';
import { Link } from 'react-router'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import {Materialize} from 'react-materialize'
import $ from 'jquery';
import { Parallax } from 'materialize-css';


class Home extends Component {

  componentDidMount() {
  Materialize.updateTextFields()
}

  render() {
    return (
      <div>
        <br/>
        <br/>
        <div className="fpbg">
          <div className="fph">
              <div className="center">
                <span>Start taking control of your spending habits!</span>
              </div>
            </div>
              <img className='pulse-button' src={require('../../img/down.svg')} />
              <span className="bgparagraph">See how you can take control..</span>
          </div>
      <div className="blackbg" style={{marginTop: "-25px"}}>
        <div className="row">
          <div className="col l6 m6 s6">
            <h3>Hey</h3>
          </div>
        </div>
        </div>
  </div>



    );
  }
}

export default Home;
