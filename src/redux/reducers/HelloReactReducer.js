import {
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_SHOW_MESSAGE,
  RESET,
} from '../constants/action-types'

const initialState = {
  firstName: '',
  lastName: '',
  showMessage: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRSTNAME: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case SET_LASTNAME: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case SET_SHOW_MESSAGE: {
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
