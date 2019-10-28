import React from 'react'

const UserRow = (props) => (
  <tr>
    <td>{props.user.userName}</td>
    <td>
      <a href={`mailto: ${props.user.email}`}>
        {props.user.email}
      </a>
    </td>
  </tr>
)

export default UserRow
