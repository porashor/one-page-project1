import React from 'react'

const SlideCard = ({key, title, description, img}) => {
  return (
    <div key={key}>
        <div  className='grid sm:grid-cols-2 items-center justify-center'>
            <div className='flex flex-col w-[80%] mx-auto justify-center items-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 '>
                <h1 data-aos="zoom-in" data-aos-duration="500" className='text-5xl sm:text-6xl lg:text-7xl font-bold capitalize'>{title}</h1>
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm'>{description}</p>
                <button data-aos="slide-up" data-aos-delay="200" data-aos-duration="500" className='gradient hover:scale-105 duration-200 text-white px-4 py-2 rounded-full'>Order Now</button>
            </div>
            <div className='order-1 sm:order-2'>
                <div>
                    <img data-aos="zoom-out" data-aos-delay="400" data-aos-duration="800" src={img} alt="card image here " className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto' />
                </div>
            </div>
        </div>
        </div>
  )
}

export default SlideCard
