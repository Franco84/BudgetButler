import React from 'react'

export default function (props) {
    return(
    <div className="row">
      <div className="col l4 m4 s4">
      <table>
        <thead>
          <tr>
              <th data-field="id">Name</th>
              <th data-field="name">Value</th>
              <th data-field="price">Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{props.transaction.name}</td>
            <td>${props.transaction.value}</td>
            <td>{props.transaction.date}</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>

    )
  }
