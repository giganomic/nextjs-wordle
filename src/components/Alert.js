import React from 'react'
import { useSelector } from 'react-redux'
import { TEXT_LOST, TEXT_WON } from '../constants/strings';

export default function Alert() {

    const game = useSelector((state) => state.game)
    let text;

    if(game.gameEndAlert) {
        if(game.gameStatus === 'won') {
            text = TEXT_WON[Math.floor(Math.random()*TEXT_WON.length)]
        } else if(game.gameStatus === 'lost') {
            text = TEXT_LOST[Math.floor(Math.random()*TEXT_LOST.length)]
        }
    }

    if(text) {
        return <div className='origin-center text-5xl font-bold text-center animate-fadeInOut opacity-0' style={{transform: 'translate(-50%, 0)'}}>{text}</div>
    } else {
        return <></>
    }

    // return <div className='text-5xl font-bold text-center animate-fadeInOut opacity-0 origin-center' style={{transform: 'translate(-50%, 0)'}}>YOU WON!</div>
}
