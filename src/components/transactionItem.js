import React from 'react'

export default function (props) {

    return(
      <div>
        <ul>
          <li>
            {props.transaction.name}

          </li>
          <li>
            {props.transaction.expense_id}

          </li>
          <li>
            {props.transaction.value}

          </li>
          <li>
            {props.transaction.date}

          </li>
        </ul>
      </div>
    )
  }
