import {
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_SHOW_MESSAGE,
} from '../constants/action-types'

export default (state = {
  firstName: '',
  lastName: '',
  showMessage: true,
}, action) => {
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
    default:
      return state
  }
}
