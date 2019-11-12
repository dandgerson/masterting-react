import {
  SET_EDITING,
  RESET,
} from '../constants/action-types'

const initialState = [
  {
    id: 0,
    editing: false,
  },
  {
    id: 1,
    editing: false,
  },
]

export default (state = initialState,
  action) => {
  switch (action.type) {
    case SET_EDITING: {
      return [
        ...state.filter(item => item.id !== action.payload.id),
        action.payload,
      ]
    }
    case RESET: {
      return initialState
    }
    default:
      return state
  }
}
