import React from 'react'

export default function (props) {
    return(
          <tr>
            <td>{props.transaction.name}</td>
            <td>${props.transaction.value}</td>
            <td>{props.transaction.date}</td>
          </tr>


    )
  }
