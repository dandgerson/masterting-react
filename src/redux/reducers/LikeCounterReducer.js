import {
  SET_LIKES,
  SET_SHOWED_LIKES,
  SET_RATE_UP,
} from '../constants/action-types'

export default (state = {
  likes : 0,
  showedLikes: 0,
  rateUp: null,
}, action) => {
  switch (action.type) {
    case SET_LIKES: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case SET_SHOWED_LIKES: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case SET_RATE_UP: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}
