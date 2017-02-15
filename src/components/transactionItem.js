import React from 'react'

export default function (props) {
    return(
          <tr>
            <td>{props.transaction.name}</td>
            <td>${props.transaction.value.toFixed(2)}</td>
            <td>{props.transaction.day}</td>
          </tr>


    )
  }
