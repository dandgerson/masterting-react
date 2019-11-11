import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { setEditingAction } from '../../../redux/actions'

import Icon from '../../Icon'
import Button from '../../Button'

import './TextBox.scss'

const TextBox = ({
  id,
  label,
  textBoxReducer, setEditingAction,
  ...props
}) => {
  const messageBoxRef = useRef()
  const update = () => {
    setEditingAction({
      id,
      editing: false,
    })
    props.update(messageBoxRef.current.value)
  }
  const edit = () => {
    setEditingAction({
      id,
      editing: true,
    })
  }
  useEffect(() => {
    messageBoxRef.current.focus()
  })

  const { editing } = textBoxReducer.filter(item => item.id === id)[0]
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
const mapStateToProps = state => ({
  textBoxReducer: state.TextBoxReducer,
})

const mapDispatchToProps = {
  setEditingAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBox)
