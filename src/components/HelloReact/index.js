import React from 'react'
import { connect } from 'react-redux'

import {
  setFirstNameAction,
  setLastNameAction,
  setShowMessageAction,
} from '../../redux/actions'

import HelloMessage from './HelloMessage'
import TextBox from './TextBox'
import Button from '../Button'
import Icon from '../Icon'

import './HelloReact.scss'

const HelloReact = ({
  firstName,
  lastName,
  showMessage,
  setFirstNameAction,
  setLastNameAction,
  setShowMessageAction,
  ...props
}) => {
  const update = (state, value) => {
    console.log('update')
    switch (state) {
      case 'firstName': {
        setFirstNameAction({ firstName: value })
        break;
      }
      case 'lastName': {
        setLastNameAction({ lastName: value })
        break;
      }
      default: console.error('Incorrect state type') 
    }
  }

  const toggleShowMessage = () => setShowMessageAction({ showMessage: !showMessage })
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
        id={0}
        label='First Name'
        update={update.bind(null, 'firstName')}
      />
      <TextBox
        id={1}
        label='Last Name'
        update={update.bind(null, 'lastName')}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  firstName: state.HelloReactReducer.firstName,
  lastName: state.HelloReactReducer.lastName,
  showMessage: state.HelloReactReducer.showMessage,
})

const mapDispatchToProps = {
  setFirstNameAction,
  setLastNameAction,
  setShowMessageAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloReact)
