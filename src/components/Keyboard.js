import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addKey, removeKey, keyDispatcher } from '../actions/keyActions'


const keyGrid = [
    ['q','w','e','r','t','z','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['Enter','y','x','c','v','b','n','m','Backspace'],
];

export default function Keyboard() {

  const activeKeys = useSelector((state) => state.activeKeys)
  const game = useSelector((state) => state.game)
  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener('keydown', e => {
      dispatch(keyDispatcher(e.key))
      dispatch(addKey(e.key))

    })
    document.addEventListener('keyup', e => {
      dispatch(removeKey(e.key))
    })
  },[]);

  const KeyboardElement = props => {
    return props.keyGrid.map((l,i) => <div key={i} className='flex justify-center grow py-0.5'>
        {l.map((k,ii) => {

          let classList = ['border','w-16','h-full','flex','justify-center','items-center','font-bold','mx-0.5','rounded-md','text-xl']

          if(['Enter','Backspace'].includes(k)) classList.push('px-4')

          if(!activeKeys.includes(k)) {
            if(game.charListMatch.includes(k)) { // if right character
              classList.push('bg-green-300')
              classList.push('border-green-400')
              classList.push('text-green-800')
            } else if(game.charListOccur.includes(k)) { // if character occur
              classList.push('bg-yellow-300')
              classList.push('border-yellow-400')
              classList.push('text-yellow-800')
            } else if(game.charListNotOccur.includes(k)) { // if wrong character
              classList.push('bg-slate-200')
              classList.push('border-slate-400')
              classList.push('text-slate-900')
            } else {
              classList.push('bg-white')
              classList.push('border-slate-200')
              classList.push('text-black')
            }
          } else {
            classList.push('bg-black')
            classList.push('border-black')
            classList.push('text-white')
          }

          return <div
            className={classList.join(' ')}
            onClick={() => dispatch(keyDispatcher(k))}
            key={ii}
          >
            {(() => {
              if(k==='Enter') return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>
              if(k==='Backspace') return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" /></svg>
              return k.toUpperCase()
            })()}
          </div>
        })}
    </div>)
  }
  
  return (
    <div className='p-2 select-none h-full flex flex-col'>
        <KeyboardElement keyGrid={keyGrid} />
    </div>
  )
}
