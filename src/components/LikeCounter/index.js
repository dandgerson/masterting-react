import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  setLikesAction,
  setShowedLikesAction,
  setRateUpAction,
} from '../../redux/actions'

import Button from '../Button'
import Icon from '../Icon'

import './LikeCounter.scss'

const LikeCounter = ({
  likes, setLikesAction,
  showedLikes, setShowedLikesAction,
  rateUp, setRateUpAction,
  ...props
}) => {
  useEffect(() => {
    likes > 1 && setShowedLikesAction({ showedLikes: likes })
  }, [likes, setShowedLikesAction])

  const like = () => {
    setLikesAction({ likes: likes + 1 })
    ;(likes + 1) > 1 && setRateUpAction({ rateUp: true })
  }
  const dislike = () => {
    setLikesAction({ likes: likes - 1})
    showedLikes > 2 && setRateUpAction({ rateUp: false })
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

  console.log({
    likes,
    showedLikes,
    rateUp,
  })

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

const mapStateToProps = state => ({
  likes: state.LikeCounterReducer.likes,
  showedLikes: state.LikeCounterReducer.showedLikes,
  rateUp: state.LikeCounterReducer.rateUp,
})

const mapDispatchToProps = {
  setLikesAction,
  setShowedLikesAction,
  setRateUpAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeCounter)
