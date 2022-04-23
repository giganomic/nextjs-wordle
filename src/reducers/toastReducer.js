import * as types from '../constants/types'

export const toastReducer = (state = [], { type, payload }) => {
    switch(type) {
      case types.ADD_TOAST:
        return [ ...state, payload ]
      case types.REMOVE_TOAST:
        return [ ...state.filter(item => item.id!==payload) ]
      default:
        return state
    }
  }