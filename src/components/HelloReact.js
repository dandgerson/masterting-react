import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import App from '../App'
import HelloMessage from './HelloMessage'
import TextBox from './TextBox'
import Button from './Button'
import Icon from './Icon'

const HelloReact = () => {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ showMessage, setShowMessage ] = useState(true)
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
    const toggleShowMessage = () => setShowMessage(!showMessage)
    const reload = () => {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
      ReactDOM.render(
        <App reload={reload}/>,
        document.getElementById('root')
      )
    }
    const message = `Hello${firstName ? ' ' + firstName: ''}${lastName ? ' ' + lastName: ''}!`
  return (
    <div className='HelloReact'>
      <div className='HelloReact--messageContainer'>
      <div className="HelloReact--messageWrapper">
        {showMessage && <HelloMessage message={message} />}
      </div>
        <Button
          onClick={toggleShowMessage}>
          <Icon title={showMessage ? 'eye-slash' : 'eye'}/>{showMessage ? ' Hide message': ' Show message'}
        </Button>
      </div>
      <TextBox
        label='First Name'
        update={update.bind(null, 'firstName')}
      />
      <TextBox
        label='Last Name'
        update={update.bind(null, 'lastName')}
      />
      <Button onClick={reload}>
          <Icon title='redo-alt'/>{' Reload'}
        </Button>
    </div>
  )
}

export default HelloReact
