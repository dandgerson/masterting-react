import { combineReducers } from 'redux'

import HelloReactReducer from './HelloReactReducer'
import LikeCounterReducer from './LikeCounterReducer'
import UserListReducer from './UserListReducer'
import TextBoxReducer from './TextBoxReducer'

export default combineReducers({
  HelloReactReducer,
  LikeCounterReducer,
  UserListReducer,
  TextBoxReducer,
})
