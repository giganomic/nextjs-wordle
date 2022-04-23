import * as types from '../constants/types'
import { checkWord, addChar, removeLastChar } from './gameActions'

export const addKey = key => ({
    type: types.ADD_KEY,
    payload: key
})

export const removeKey = key => ({
    type: types.REMOVE_KEY,
    payload: key
})

export const keyDispatcher = key => (dispatch, getState) => {

    const state = getState()
    const gameStatus = state.game.gameStatus
    const keys = ['q','w','e','r','t','z','u','i','o','p','a','s','d','f','g','h','j','k','l','y','x','c','v','b','n','m'];

    if(gameStatus === 'ongoing') {
      if(key === 'Backspace') {
        dispatch(removeLastChar(key))
      } else if(key === 'Enter') {
        dispatch(checkWord())
      } else if(keys.includes(key)) {
        dispatch(addChar(key))
      }
    }
}