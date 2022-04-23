import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../actions/gameActions'
import InfoModal from './InfoModal'

export default function Header() {

    const [infoOpen, setInfoOpen] = useState(false)
    const dispatch = useDispatch()
    const word = useSelector((state) => state.game.wordWanted)

    const infoClickHandle = () => {
        setInfoOpen(!infoOpen)
    }

    return (
        <div className='flex justify-between p-4 font-black text-xl items-center'>
            <div onClick={infoClickHandle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div>WORDLE</div>
            <div onClick={() => dispatch(resetGame())}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </div>
        <InfoModal open={infoOpen} setOpen={setInfoOpen} />
        </div>
    )
}
