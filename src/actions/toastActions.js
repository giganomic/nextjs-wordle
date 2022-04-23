import * as types from '../constants/types'

export const pushToast = (message,duration=1) => async dispatch => {
    const uid = Date.now()
    dispatch({
        type: types.ADD_TOAST,
        payload: {
            id: uid,
            message: message,
        }
    })

    setTimeout(() => {
        dispatch({
            type: types.REMOVE_TOAST,
            payload: uid
        })
    },duration*1000)
}