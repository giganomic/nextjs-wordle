import React from 'react'
import { useSelector } from 'react-redux'

export default function Toasts() {

  const toasts = useSelector((state) => state.toasts)

  return (
    <div className='absolute top-20 flex flex-col'>
      {toasts.map(t => <div key={t.id} className='mx-auto bg-black text-white px-4 py-2 shadow rounded font-bold my-1'>{t.message}</div>)}
    </div>
  )
}
