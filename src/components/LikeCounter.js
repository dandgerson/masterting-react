import React, { useState } from 'react'

import Button from './Button'
import Icon from './Icon'

const LikeCounter = (props) => {
  const [counter, setCounter] = useState(0)
  const like = () => {
    console.log('Like!')
    setCounter(counter + 1)
  }
  const dislike = () => {
    console.log('Dislike!')
    setCounter(counter - 1)
  }
  return (
    <div className="LikeCounter">
      <div>
        {`Likes: ${counter} `}
        {counter !== 0 && <Icon title={counter > 0 ? 'chevron-circle-up' : 'chevron-circle-down'} />}
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
