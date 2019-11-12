import {
  SET_LIKES,
  SET_SHOWED_LIKES,
  SET_RATE_UP,
  RESET,
} from '../constants/action-types'

const initialState = {
  likes : 0,
  showedLikes: 0,
  rateUp: null,
}

export default (state = initialState, action) => {
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
    case RESET: {
      return initialState
    }
    default:
      return state
  }
}
