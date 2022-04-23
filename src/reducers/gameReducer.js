import * as types from '../constants/types'
import { CONFIG_GRID_COLS } from '../constants/config'
import { allowedWords } from '../constants/allowedWords'



const getRandomWord = () => {
    return allowedWords[Math.floor(Math.random()*allowedWords.length)]
}

const initialGameState = {
    chars: [[]],
    matches: [],
    charListMatch: [],
    charListOccur: [],
    charListNotOccur: [],
    currentLine: 0,
    wordWanted: getRandomWord(),
    wrongWord: false,
    gameStatus: 'ongoing',
    gameEndAlert: false,
}

export const gameReducer = (state = initialGameState, { type, payload }) => {
    switch (type) {

        case types.ADD_CHAR:
            if(state.chars[state.currentLine].length < CONFIG_GRID_COLS) {
                var newChars = [...state.chars]
                newChars[state.currentLine] = [...state.chars[state.currentLine], payload]
                state = {
                    ...state,
                    chars: newChars,
                }
            }
            return state

        case types.REMOVE_CHAR:
            var index = state.chars.indexOf(payload)
            if (index > -1) {
                state = { ...state }
                state.chars.splice(index,1)
            }
            return state

        case types.REMOVE_LAST_CHAR:
            var chars = [...state.chars]
            chars[state.currentLine].pop()
            return { ...state, chars: chars }

        case types.CHECK_WORD:
            return { 
                ...state,
                chars: [...state.chars,[]],
                currentLine: state.currentLine+1,
                ...payload
            }

        case types.RESET_GAME:
            const newState = {
                ...initialGameState,
                wordWanted: getRandomWord(),
            }
            return newState

        case types.SET_WRONG_WORD:
            return {...state, wrongWord: true }

        case types.UNSET_WRONG_WORD:
            return {...state, wrongWord: false }

        case types.SET_GAME_END_ALERT:
            return {...state, gameEndAlert: true }

        case types.UNSET_GAME_END_ALERT:
            return {...state, gameEndAlert: false }
        
        default:
            return state
    }
}