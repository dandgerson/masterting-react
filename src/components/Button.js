import React from 'react'

const Button = (props) =>  (
  <button
    type='button'
    onClick={props.handleClick}>
    {props.children}
  </button>
)

export default Button
