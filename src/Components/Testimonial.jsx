import React from 'react';
import HeaderPro from './HeaderPro';
import { TestimonialData } from '../DataHouse/Data';
import { TesSettings } from '../DataHouse/Data';
import Slider from 'react-slick';
const Testimonial = () => {
  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            {/* header */}
            <HeaderPro p1={`what our customer are saying`} header={`Testimonials`} p2={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia qui facere porro possimus a, in vero reiciendis sapiente ipsam laudantium voluptatem atque. Reiciendis eius temporibus aperiam libero voluptatem laudantium.`}/>
            <div>
                {/* Testimonial cards */}
                <div>
                    <Slider {...TesSettings}>
                        {
                            TestimonialData.map((item)=>(
                                <div key={item.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                                    <div className='mb-4 '>
                                        <img src={item.img} alt="Testimonial" className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                        <p className='text-xs text-gray-500 '>
                                            {item.text}
                                        </p>
                                        <h1 className='text-xl font-bold text-black/80 dark:text-light '>
                                            {item.name}
                                        </h1>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>

                </div>
            </div>
        </div>
    </div>
  )
};

export default Testimonial;
