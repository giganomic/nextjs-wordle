import { useEffect } from 'react'

import Head from 'next/head'
import Keyboard from '../src/components/Keyboard'
import Grid from '../src/components/Grid'
import Header from '../src/components/Header'
import Toasts from '../src/components/Toasts'
import GameEnd from '../src/components/GameEnd'
import Alert from '../src/components/Alert'
import { vhCalc, calcGridSize } from '../src/utilitys'
import { useSelector } from 'react-redux'

export default function Home() {

  const gameStatus = useSelector((state) => state.game.gameStatus)
  let footer;
  if(gameStatus==='ongoing') {
    footer = <Keyboard />
  } else {
    footer = <GameEnd />
  }

  useEffect(() => {
    vhCalc()
    calcGridSize()
    window.addEventListener('resize', () => {
      vhCalc()
      calcGridSize()
    });
    window.addEventListener('orientationchange', event => {
      vhCalc()
      calcGridSize()
    });
  },[]);

  return (
    <>
      <Head>
        <title>WORDLE</title>
        <meta name="description" content="WORDLE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center flex-col' style={{height: 'calc(var(--vh, 1vh) * 100)'}}>

        <Header />
        <div id='grid-container' className='flex-1 flex justify-center items-center relative'>
          <Grid />
          <Toasts />
          <Alert />
        </div>
        <div className='h-56'>
          {footer}
        </div>
        
      </main>
    </>
  )
}
