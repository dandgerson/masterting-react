import React, { useState } from 'react'

import HelloMessage from './HelloMessage'
import TextBox from './TextBox'

const HelloReact = () => {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const update = (state, value) => {
    console.log('update')
    switch (state) {
      case 'firstName': {
        setFirstName(value)
        break;
      }
      case 'lastName': {
        setLastName(value)
        break;
      }
      default: console.error('Incorrect state type') 
      }
    }
    const message = `Hello${firstName ? ' ' + firstName: ''}${lastName ? ' ' + lastName: ''}!`
  return (
    <div>
      <HelloMessage
        message={message}
      />
      <TextBox
        label='First Name'
        update={update.bind(null, 'firstName')}
      />
      <TextBox
        label='Last Name'
        update={update.bind(null, 'lastName')}
      />
    </div>
  )
}

export default HelloReact
