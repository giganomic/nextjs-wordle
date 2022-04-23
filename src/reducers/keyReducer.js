import * as types from '../constants/types'

export const keyReducer = (state = [], { type, payload}) => {
  switch (type) {
    case types.ADD_KEY:
      if(state.indexOf(payload) === -1) {
        return [...state, payload]
      } else {
        return state
      }
    case types.REMOVE_KEY:
      const index = state.indexOf(payload);
      if (index > -1) {
        state = [ ...state ]
        state.splice(index,1)
      }
      return state
    default:
      return state
  }
}