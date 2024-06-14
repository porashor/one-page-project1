import React from 'react'

const HeaderPro = ({p1, header, p2}) => {
  return (
    <div data-aos="slide-up" className='text-center mb-10 max-w-[600px] mx-auto'>
        <p className='text-sm text-primary'>{p1}</p>
        <h1 className='text-3xl font-bold'>
            {header}
        </h1>
        <p className='text-xs text-gray-400'>
            {p2}
        </p>
      </div>
  )
}

export default HeaderPro
