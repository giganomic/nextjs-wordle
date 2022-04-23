import { combineReducers } from 'redux'

import { keyReducer } from './reducers/keyReducer'
import { gameReducer } from './reducers/gameReducer'
import { toastReducer } from './reducers/toastReducer'

// COMBINED REDUCERS
const reducers = {
  activeKeys: keyReducer,
  game: gameReducer,
  toasts: toastReducer,
}

export default combineReducers(reducers)
