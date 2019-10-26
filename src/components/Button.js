import React from 'react'

const Button = ({ onClick, ...props }) =>  (
  <button
    type='button'
    onClick={onClick}
    className='message-toggle-button'>
    {props.children}
  </button>
)

export default Button
