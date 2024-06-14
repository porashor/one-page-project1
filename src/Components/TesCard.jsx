import React from 'react'

const TesCard = ({key, img, text, name}) => {
  return (
    <div data-aos="zoom-in" key={key} className='flex flex-col max-w-[350px] mx-auto dark:hover:bg-primary dark:hover:text-white duration-300 gap-4 shadow-lg py-8 px-6 mx-4 my-6  rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
        <div className='mb-4 '>
            <img src={img} alt="Testimonial" className='rounded-full w-20 h-20' />
        </div>
        <div className='flex flex-col items-center gap-4'>
            <div className='space-y-3'>
            <p className='text-xs text-gray-500 '>
                {text}
            </p>
            <h1 className='text-xl font-bold text-black/80 dark:text-light '>
                {name}
            </h1>
            </div>
        </div>
        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
            ,,
        </p>
    </div>
  )
}

export default TesCard
