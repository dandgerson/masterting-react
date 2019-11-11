import React from 'react'
import { connect } from 'react-redux'

import UserRow from './UserRow'

const UserList = ({
  users,
  ...props
}) => {
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

const mapStateToProps = state => ({
  users: state.UserListReducer
})

export default connect(mapStateToProps)(UserList)
