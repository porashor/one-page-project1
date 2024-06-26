import React from 'react'
import Back from "../assets/website/orange-pattern.jpg"



const Subscribe = () => {
    const backgroundImg = {
        backgroundImage: `url(${Back})`,
        backgroundPosition : "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%"
    }
  return (
    <div data-aos="zoom-in" className='bg-gray-100 dark:bg-gray-800 dark:text-white z-[100] mt-20' style={backgroundImg} >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
            <input type="email" placeholder='enter your email' className='w-full p-3' />
        </div>
      </div>
    </div>
  )
}

export default Subscribe;
