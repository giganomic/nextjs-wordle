import React from 'react'
import { resetGame } from '../actions/gameActions'
import { useDispatch, useSelector } from 'react-redux'
import { TEXT_NEW_GAME } from '../constants/strings'

export default function GameEnd() {

    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)

    const RightWord = () => {
        const rightWord = game.wordWanted.toUpperCase()
        rightWord = rightWord.split('')
        rightWord = rightWord.map((letter,i) => {
            return <div key={i} className='back bg-black text-white font-bold m-1 w-10 h-10 flex justify-center items-center rounded-md mb-4 text-xl'>
                <div>{letter}</div>
            </div>
        })
        return <div className='flex justify-center'>{rightWord}</div>
    }

    return (
        <div className='flex flex-col justify-center items-center h-full'>
        
                <RightWord />
                <button 
                    onClick={() => dispatch(resetGame())}
                    className="mt-3 inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:text-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {TEXT_NEW_GAME}
                </button>
        
        </div>
  )
}
