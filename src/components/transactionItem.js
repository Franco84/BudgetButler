import React from 'react'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/selectable';
import ReactDOM from 'react-dom'
import {findDOMNode} from 'react-dom';
import {Collapsible, CollapsibleItem} from 'react-materialize'



export default class TransactionItem extends React.Component {
  componentDidMount() {
    // debugger
  }


render () {
    return(
      <div>
      <div className="col l4 m4 s4">
        <Collapsible accordian="true">
          <CollapsibleItem header={this.props.transaction.name}>
              <form><input type="text" placeholder={this.props.transaction.name} /><button type="submit">Submit</button></form>
          </CollapsibleItem>
        </Collapsible>
      </div>
      <div className="col l4 m4 s4">
        <Collapsible accordian="true">
          <CollapsibleItem header={this.props.transaction.value.toFixed(2)}>
              <form><input type="text" placeholder={this.props.transaction.value.toFixed(2)} /><button type="submit">Submit</button></form>
          </CollapsibleItem>
        </Collapsible>
      </div>
      <div className="col l4 m4 s4">
        <Collapsible accordian="true">
          <CollapsibleItem header={this.props.transaction.day}>
              <form><input type="text" placeholder={this.props.transaction.day} /><button type="submit">Submit</button></form>
          </CollapsibleItem>
        </Collapsible>
      </div>
    </div>
    )
  }
}
