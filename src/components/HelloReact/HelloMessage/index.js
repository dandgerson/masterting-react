import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const HelloMessage = ({ message }) => {
  useEffect(() => {
    console.log('hooked ComponentDidMount')
    return () => {
      console.log('hooked ComponentDidUnmount')
    }
  }, [])
  useEffect(() => {
    console.log('hooked ComponentDidRender')
    return () => {
      console.log('hooked ComponentWillRender')
    }
  })
  useEffect(() => {
    console.log('hooked ComponentDidUpdate')
    return () => {
      console.log('hooked ComponentWillUpdate')
    }
  }, [message])
  return (
    <h2 style={{color: 'greenyellow'}}>
      {message}
    </h2>
  )
}


export default HelloMessage

HelloMessage.propTypes = {
  message: PropTypes.string.isRequired,
}
