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
    <div>
      {label}<br />
      <input
        type="text"
        ref={elem => ($messageBox = elem)}
        disabled={!editing}
      />
      <Button
        onClick={editing ? update : edit}
        style={{
          cursor: 'pointer',
        }}
      >
        <Icon title={editing ? 'check': 'pen'}/>
        {editing ? ' Update' : ' Edit'}
      </Button>
    </div>
  )
}

export default TextBox
