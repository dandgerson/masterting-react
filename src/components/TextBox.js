import React, { useState } from 'react'
import Icon from './Icon'
import Button from './Button'

const TextBox = ({ label, ...props }) => {
  const [ editing, setEditing ] = useState(false)
  let $messageBox = null
  const update = () => {
    props.update($messageBox.value)
    setEditing(false)
  }
  const edit = () => setEditing(true)
  return (
    <div className='TextBox'>
      {label}<br />
      <div className="TextBox--formWrapper">
        <input
          type="text"
          ref={elem => ($messageBox = elem)}
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
