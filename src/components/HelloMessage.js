import React from 'react'

const HelloMessage = ({ message }) => {
  const localprops = message
  const localMessage = 'This is the local message!'
  return (
    <div>
      <h2>Hello Message:</h2>
      <div>{message}</div>
      <div>{localprops}</div>
      <div>{localMessage}</div>
    </div>
  )
}

export default HelloMessage
