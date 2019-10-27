import React, { useState, useEffect } from 'react'

import Button from '../Button'
import Icon from '../Icon'

import './LikeCounter.scss'

const LikeCounter = (props) => {
  const [ likes, setLikes ] = useState(0)
  const [ showedLikes, setShowedLikes ] = useState(0)
  const [ rateUp, setRateUp ] = useState(null)
  useEffect(() => {
    likes > 1 && setShowedLikes(likes)
  }, [likes])
  
  const like = () => {
    setLikes(likes + 1)
    ;(likes + 1) > 1 && setRateUp(true)
  }
  const dislike = () => {
    setLikes(likes - 1)
    showedLikes > 2 && setRateUp(false)
  }
  let RateUpDownIcon = null
  switch(rateUp) {
    case false: {
      RateUpDownIcon = <Icon title='chevron-circle-down'/>
      break
    }
    case true: {
      RateUpDownIcon = <Icon title='chevron-circle-up'/>
      break
    }
    default: RateUpDownIcon = null
  }
  return (
    <div className="LikeCounter">
      <div>
        {`Likes: ${showedLikes} `}
        {RateUpDownIcon}
      </div>
      <div className="controls">
        <Button
          onClick={like}>
          <Icon title='thumbs-up' />{' Like'}
        </Button>
        <Button
          onClick={dislike}>
          <Icon title='thumbs-down' />{' Dislike'}
        </Button>
      </div>
    </div>
  )
}

export default LikeCounter
