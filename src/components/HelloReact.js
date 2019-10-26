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
      <h1>
        <HelloMessage message='Hello React!' />
      </h1>
      <input
        type="text"
        ref={elem => ($input = elem)}
        />
      <button
        onClick={updateMessage}>
        Update
      </button>
      <div
        style={{
          paddingTop: '20px',
          fontSize: '1.5rem',
          color: 'powderblue',
        }}
      >{state.message}</div>
    </div>
  )
}

export default HelloReact
