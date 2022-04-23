import * as types from '../constants/types'
import { allowedWords } from '../constants/allowedWords'
import { pushToast } from './toastActions'
import { MESSAGE_NOT_A_WORD, MESSAGE_NOT_ENOUGH_LETTERS } from '../constants/strings'
import { CONFIG_GRID_LINES, CONFIG_GRID_COLS } from '../constants/config'

export const addChar = key => ({
    type: types.ADD_CHAR,
    payload: key
})

export const removeChar = key => ({
    type: types.REMOVE_CHAR,
    payload: key
})

export const removeLastChar = () => ({ type: types.REMOVE_LAST_CHAR })

export const resetGame = () => ({ type: types.RESET_GAME })

export const checkWord = () => (dispatch, getState) => {

    const state = getState()

    // if game has ended
    if(state.game.gameStatus !== 'ongoing') return

    // if not out of grid
    if(!(state.game.currentLine < CONFIG_GRID_LINES)) return

    // if all characterboxes filled
    if(!(state.game.chars[state.game.currentLine].length === CONFIG_GRID_COLS)) {
        dispatch(pushToast(MESSAGE_NOT_ENOUGH_LETTERS))
        return
    }

    // if in list of allowed words
    if(!allowedWords.includes(state.game.chars[state.game.currentLine].join(''))) {
        dispatch(pushToast(MESSAGE_NOT_A_WORD))
        
        dispatch({ type: types.SET_WRONG_WORD })
        setTimeout(() => {
            dispatch({ type: types.UNSET_WRONG_WORD })
        },1000)

        return
    }
    
    var matches = [];
    var wordWanted = state.game.wordWanted.split('')

    let charMatchCount = {}
    let charWantedCount = {}

    let charListMatch = [...state.game.charListMatch]
    let charListOccur = [...state.game.charListOccur]
    let charListNotOccur = [...state.game.charListNotOccur]

    state.game.chars[state.game.currentLine].forEach((char,i) => {
      charWantedCount[wordWanted[i]] = (charWantedCount[wordWanted[i]] === undefined) ? 1 : charWantedCount[wordWanted[i]]+1
      if(charMatchCount[char] === undefined) charMatchCount[char] = 0
      if(char === wordWanted[i]) charMatchCount[char] ++
    })

    state.game.chars[state.game.currentLine].forEach((char,i) => {
      if(char === wordWanted[i]) { // character match

        matches[i] = 1
        if(!charListMatch.includes(char)) charListMatch.push(char)

      } else if(wordWanted.includes(char) && charWantedCount[char] > charMatchCount[char]) { // character occurs

        matches[i] = 2
        if(!charListOccur.includes(char)) charListOccur.push(char)
        charMatchCount[char]++

      } else { // character not occurs

        matches[i] = 0
        if(!charListNotOccur.includes(char)) charListNotOccur.push(char)

      }
    })


    let gameStatus = 'ongoing'
    const correctChars = matches.reduce((a, v) => (v === 1 ? a + 1 : a), 0)
    
    if(correctChars === CONFIG_GRID_COLS) {gameStatus = 'won'; dispatch(setGameEndAlert())}
    if(state.game.currentLine+1 === CONFIG_GRID_LINES && correctChars < CONFIG_GRID_COLS) {gameStatus = 'lost'; dispatch(setGameEndAlert())}
    
    dispatch({
        type: types.CHECK_WORD,
        payload: {
            gameStatus: gameStatus,
            matches: [...state.game.matches,matches],
            charListMatch: charListMatch,
            charListOccur: charListOccur,
            charListNotOccur: charListNotOccur,
        }
    })
}

export const setGameEndAlert = () => dispatch => { 
  dispatch({type: types.SET_GAME_END_ALERT})
  setTimeout(() => {
    dispatch({type: types.UNSET_GAME_END_ALERT})
  },4000)
}