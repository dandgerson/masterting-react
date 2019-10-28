import React, { useState, useEffect, useRef } from 'react'

import Icon from '../../Icon'
import Button from '../../Button'

import './TextBox.scss'

const TextBox = ({ label, ...props }) => {
  const [ editing, setEditing ] = useState(false)
  const messageBoxRef = useRef()
  const update = () => {
    setEditing(false)
    props.update(messageBoxRef.current.value)
  }
  const edit = () => {
    setEditing(true)
  }
  useEffect(() => {
    messageBoxRef.current.focus()
  })
  return (
    <div className='TextBox'>
      {label}<br />
      <div className="TextBox--formWrapper">
        <input
          type="text"
          ref={messageBoxRef}
          disabled={!editing}
        />
        <Button onClick={editing ? update : edit}>
          <Icon title={editing ? 'check': 'pen'}/>
          {editing ? ' Update' : ' Edit'}
        </Button>
      </div>
    </div>
  )
}

export default TextBox
