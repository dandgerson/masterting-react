import React, { useState } from 'react'

import UserRow from './UserRow'

const UserList = (props) => {
  const [ users, setUsers ] = useState([
    {
      id: 1,
      userName: 'RiyanVice',
      email: 'ryan@vicesoftware.com',
    },
    {
      id: 2,
      userName: 'AdamHorton',
      email: 'digitalicarus@gmail.com',
    },
  ])
  const userRows = users.map(user => (
    <UserRow
      key={user.id}
      user={user}
    />
  ))
  return (
    <table className='UserList'>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {userRows}
      </tbody>
    </table>
  )
}

export default UserList
