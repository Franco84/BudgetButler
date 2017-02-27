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
            <div className="row">
              <div className="col l3 m3 s3 left">
                <img className='pulse-button landingButton' src={require('../../img/down.svg')} />
              </div>
              <div className="col l9 m9 s9">
              </div>
            </div>
       </div>

      <div className="blackbg" style={{marginTop: "-25px"}}>
        <br />
        <div className="row">
          <div className="col l6 m6 s12 center landingpad">
            <svg className="svgpad" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z"/></svg>
            <svg className="svgpad" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 16h-3v-1h3v1zm.317-5l.863-1h-4.18v3h2.565l.193-.959.014-.041h-1.772v-1h2.317zm4.424 4.104l-3.015-2.677-.007.009-.469 3.564 3.491-.896zm.649-.76l6.61-7.75-3-2.594-6.62 7.671 3.01 2.673zm-10.39-2.344h-3v1h3v-1zm12 6h-17v-10h12.906l1.726-2h-16.632v14h21v-6.826l-2 2.337v2.489zm-12-8h-3v1h3v-1zm-3 6h3v-1h-3v1z"/></svg>
            <svg className="svgpad" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-19 5.78c0-.431.349-.78.78-.78h.428v1.125h-1.208v-.345zm0 .764h1.208v.968h-1.208v-.968zm0 1.388h1.208v1.068h-.428c-.431 0-.78-.349-.78-.78v-.288zm3 5.068h-3v-1h3v1zm1-4.78c0 .431-.349.78-.78.78h-.429v-1.068h1.209v.288zm0-.708h-1.209v-.968h1.209v.968zm0-1.387h-1.629v2.875h-.743v-4h1.592c.431 0 .78.349.78.78v.345zm4 6.875h-3v-1h3v1zm1-6.5c0-1.381 1.119-2.5 2.5-2.5.484 0 .937.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.327 1.571.857 2.123-.383.239-.836.377-1.32.377-1.381 0-2.5-1.119-2.5-2.5zm4 6.5h-3v-1h3v1zm5 0h-3v-1h3v1zm-2.5-4c-1.38 0-2.5-1.119-2.5-2.5s1.12-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"/></svg>
            <p className="landingP">No matter where you spend your money, just enter all of your transactions in one place and see the difference. As you enter in your transactions, over time we will help you identify patterns you may not have caught before.
            </p>
          </div>

          <div className="col l4 m4 s10 center landingpad offset-l1 offset-m1 offset-s1">
            <img className="responsive-img" src={require('../../img/transactionchart.png')} />
          </div>

        </div>
        </div>
  </div>



    );
  }
}

export default Home;
