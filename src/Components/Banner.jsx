import React from 'react'
import image from "../assets/women/women.png"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
const Banner = () => {
  return (
    <div>
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 dark:text-white'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    <div data-aos="zoom-in">
                        <img src={image} alt="" className='max-w-[400px] max-h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                    </div>
                    <div  className='flex flex-col gap-6 sm:pt-0'>
                        <h1 data-aos="fade-in" className='text-3xl overflow-hidden sm:text-4xl font-bold '>
                        Winter sale upto 50% off
                        </h1>
                        <p data-aos="fade-in"  className='text-gray-500 overflow-hidden text-sm tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta molestiae quas temporibus mollitia! Asperiores inventore, qui consequatur quis autem quaerat officiis possimus veritatis debitis sit temporibus est cumque id cum.
                        </p>
                        <div className='flex flex-col gap-4'>
                            <div data-aos="fade-up" className='flex items-center gap-4 '>
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4 '>
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4 '>
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4 '>
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                                <p>Fast Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
