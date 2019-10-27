import React, { useState } from 'react'

import Button from '../Button'
import Icon from '../Icon'

import './LikeCounter.scss'

const LikeCounter = (props) => {
  const [ likes, setLikes ] = useState(0)
  const [ rateUp, setRateUp ] = useState(null)
  const like = () => {
    console.log('Like!')
    setLikes(likes + 1)
    setRateUp(true)
  }
  const dislike = () => {
    console.log('Dislike!')
    setLikes(likes - 1)
    setRateUp(false)
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
        {`Likes: ${likes} `}
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
