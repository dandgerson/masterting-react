import React from 'react'
import PropTypes from 'prop-types'

const HelloMessage = ({ message, ...props}) => {
  return (
    <div>
      <div style={{color: 'greenyellow'}}>
        {message}
      </div>
    </div>
  )
}

export default HelloMessage

HelloMessage.defaultProps = {
  message: 'I\'m default message. Hello! =)'
}

HelloMessage.propTypes = {
  message: PropTypes.string,
}
