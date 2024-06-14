import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

const Popup = ({pop, setpop}) => {
  return (
    <>
    {
        pop && <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                <div>
                    
                </div>
                <div className='fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px] '>
                    {/* header */}
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1>
                                Order now
                            </h1>
                        </div>
                        <button onClick={()=>setpop(false)}><IoCloseCircleOutline className='text-2xl'/></button>
                    </div>
                    <div className='mt-4'>
                        <input type="text" placeholder='Name' className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-500 px-2 py-1 mb-4' />
                        <input type="email" placeholder='Email' className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-500 px-2 py-1 mb-4' />
                        <input type="text" placeholder='Address' className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-500 px-2 py-1 mb-4' />
                        <div className='flex justify-center'>
                            <button className='gradient hover:scale-105 duration-200 px-4 py-1 rounded-full'>Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    </>
  )
}

export default Popup
