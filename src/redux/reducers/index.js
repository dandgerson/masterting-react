import { combineReducers } from 'redux'

import HelloReactReducer from './HelloReactReducer'
import LikeCounerReducer from './LikeCounterReducer'
import UserListReducer from './UserListReducer'
import TextBoxReducer from './TextBoxReducer'

export default combineReducers({
  HelloReactReducer,
  LikeCounerReducer,
  UserListReducer,
  TextBoxReducer,
})
