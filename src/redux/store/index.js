import { createStore } from 'redux'
import { RESET } from '../constants/action-types'

import appReducer from '../reducers'

const rootReducer = (state, action) => {
  if (action.type === RESET) state = undefined
  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
