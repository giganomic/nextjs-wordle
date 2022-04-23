/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import * as strings from '../constants/strings'

export default function InfoModal({setOpen, open=false}) {

  const cancelButtonRef = useRef(null)

  const Word = props => props.wordArray.map(l => {
		let classList = ['border','font-bold','m-1','w-10','h-10','flex','justify-center','items-center','rounded-md','mb-4','text-xl']
		switch(l.style) {
			case 'match':
				classList.push('border-green-400','bg-green-300','text-green-800')
				break
			case 'occur':
				classList.push('border-yellow-400','bg-yellow-300','text-yellow-800')
				break
			case 'notoccur':
				classList.push('border-slate-400','bg-slate-200','text-slate-900')
				break
			default:
				classList.push('border-slate-300','bg-white','text-slate-900')
				break
		}
		return <div className={classList.join(' ')}><div>{l.letter}</div></div>
	})

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 sm:mt-0 sm:ml-4">
                    <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-gray-900 flex justify-between">
                    {strings.TEXT_INFO_HEADLINE}
					
					<button 
						type="button" 
						class="rounded-md text-gray-300 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
						onClick={() => setOpen(false)}
					>
						<span class="sr-only">{strings.MODAL_CLOSE_WINDOW}</span>
						<svg class="h-6 w-6" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className='my-4'>{strings.TEXT_INFO_CONTENT_1}</p>
                      <p className='my-4'>{strings.TEXT_INFO_CONTENT_2}</p>
                      <p className='my-4'>{strings.TEXT_INFO_CONTENT_3}</p>
                      <p className='my-4 font-bold'>{strings.TEXT_INFO_CONTENT_4}</p>

                      <p className='my-4'>{strings.TEXT_INFO_CONTENT_5}</p>
						<div className='flex'>
							<Word wordArray={strings.TEXT_INFO_EXAMPLE_WORD_MATCH} />
						</div>

                      <p className='my-4'>{strings.TEXT_INFO_CONTENT_6}</p>
						<div className='flex'>
							<Word wordArray={strings.TEXT_INFO_EXAMPLE_WORD_OCCUR} />
						</div>

                      <p className='my-4'>{strings.TEXT_INFO_CONTENT_7}</p>
						<div className='flex'>
							<Word wordArray={strings.TEXT_INFO_EXAMPLE_WORD_NOTOCCUR} />
						</div>

					  <p className='text-xs text-center mt-4 text-gray-400'>
					  	{strings.TEXT_INFO_FOOTER}
					  </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  {strings.BUTTON_CLOSE}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
