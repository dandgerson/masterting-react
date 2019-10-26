import React, { useState } from 'react'

import HelloMessage from './HelloMessage'

const HelloReact = () => {
  const [ state, setState ] = useState({ message: 'I am from default state' })

  const updateMessage = e => {
    setState({ message: e.target.value })
  }
  return (
    <div>
      <input
        type="text"
        onChange={updateMessage}
        />
      <h1>Hello React!</h1>
      <HelloMessage message={state.message} />
    </div>
  )
}

export default HelloReact
