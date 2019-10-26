import React, { useState } from 'react'

import HelloMessage from './HelloMessage'

const HelloReact = () => {
  const [ state, setState ] = useState({ message: 'default' })
  let $input = null
  const updateMessage = () => {
    console.log('updateMessage')
    setState({ message: $input.value })
  }
  return (
    <div>
      <input
        type="text"
        onChange={updateMessage}
        ref={elem => ($input = elem)}
        />
      <h1>Hello React!</h1>
      <HelloMessage message={state.message} />
    </div>
  )
}

export default HelloReact
