import React from 'react'
import PropTypes from 'prop-types'

const HelloMessage = ({ message, ...props}) => {
  console.log(props)
  const localprops = message
  const localMessage = 'This is the local message!'
  return (
    <div>
      <h2>Hello Message:</h2>
      <div style={{color: 'greenyellow'}}>
        {message}
      </div>
      <div style={{color: 'limegreen'}}>
        {props.defaultMessage}
      </div>
      <div style={{color: 'mediumspringgreen'}}>
        {localprops}
      </div>
      <div style={{color: 'mediumseagreen'}}>
        {localMessage}
      </div>
    </div>
  )
}

export default HelloMessage

HelloMessage.defaultProps = {
  defaultMessage: 'I\'m default message. Hello! =)'
}

HelloMessage.propTypes = {
  message: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
}
