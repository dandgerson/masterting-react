import {
  SET_USERS,
} from '../constants/action-types'

export default (state = {
  users: [
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
}, action) => {
  switch (action.type) {
    case SET_USERS: {
      return [
        ...state,
        ...action.payload,
      ]
      
    }
    default:
      return state
  }
}
