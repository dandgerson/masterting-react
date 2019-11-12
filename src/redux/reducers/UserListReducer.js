import {
  SET_USERS,
  RESET,
} from '../constants/action-types'

const initialState = [
  {
    id: 1,
    userName: 'RiyanVice',
    email: 'ryan@vicesoftware.com',
  },
  {
    id: 2,
    userName: 'AdamHorton',
    email: 'digitalicarus@gmail.com',
  },
]

export default (state = initialState,
  action) => {
  switch (action.type) {
    case SET_USERS: {
      return [
        ...state,
        ...action.payload,
      ]
    }
    case RESET: {
      return initialState
    }
    default:
      return state
  }
}
