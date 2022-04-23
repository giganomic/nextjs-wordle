import React from 'react'
import { useSelector } from 'react-redux'
import { CONFIG_GRID_LINES, CONFIG_GRID_COLS } from '../constants/config'

const GridEls = ({game}) => {
    let output = [];
    for(var i = 0; i<CONFIG_GRID_LINES; i++) {
        for(var ii = 0; ii<CONFIG_GRID_COLS; ii++) {
            let classList = ['border','flex','justify-center','items-center','font-bold','m-1','rounded-md']

            if(game.matches[i]) {
              if(game.matches[i][ii]===0) { // if wrong character
                classList.push('bg-slate-200')
                classList.push('border-slate-400')
                classList.push('text-slate-900')
              } else if(game.matches[i][ii]===1) { // if right character
                classList.push('bg-green-300')
                classList.push('border-green-400')
                classList.push('text-green-800')
              } else if(game.matches[i][ii]===2) { // if character occur
                classList.push('bg-yellow-300')
                classList.push('border-yellow-400')
                classList.push('text-yellow-800')
              }
            } else {
              classList.push('bg-white')
              classList.push('border-slate-200')
              classList.push('text-black')
            }

            if(i===game.currentLine && game.chars[i].length === ii && game.gameStatus==='ongoing') classList.push('drop-shadow-md') // current character
            if(i===game.currentLine && game.wrongWord) classList.push('animate-shake') // word not exists

            output.push(
              <div key={i+'-'+ii} className={classList.join(' ')}>
                {(game.chars[i] && game.chars[i][ii])?game.chars[i][ii].toUpperCase():<>&nbsp;</>}
              </div>
            );
        }
    }
    return output;
}

export default function Grid() {

  const game = useSelector((state) => state.game)
  
  return (
    <div id='grid' className={`grid w-full h-full absolute select-none`} style={{'grid-template-columns':`repeat(${CONFIG_GRID_COLS}, minmax(0, 1fr))`}}>
        <GridEls game={game} />
    </div>
  )
}
