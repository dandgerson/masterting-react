import {
  SET_EDITING,
} from '../constants/action-types'

export default (state = [
  {
    id: 0,
    editing: false,
  },
  {
    id: 1,
    editing: false,
  },
],
  action) => {
  switch (action.type) {
    case SET_EDITING: {
      return [
        ...state.filter(item => item.id !== action.payload.id),
        action.payload,
      ]
    }
    default:
      return state
  }
}
