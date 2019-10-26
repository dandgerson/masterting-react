import React, { useState } from 'react'

const TextBox = ({ label, ...props}) => {
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
      <button
        type='button'
        onClick={editing ? update : edit}>
        {editing ? 'Update' : 'Edit'}
      </button>
    </div>
  )
}

export default TextBox
