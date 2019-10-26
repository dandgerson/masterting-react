import React from 'react'
import PropTypes from 'prop-types'

const HelloMessage = ({ message }) => (
  <h2 style={{color: 'greenyellow'}}>
    {message}
  </h2>
)

export default HelloMessage

HelloMessage.propTypes = {
  message: PropTypes.string.isRequired,
}
