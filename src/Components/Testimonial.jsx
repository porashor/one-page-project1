import React from 'react';
import HeaderPro from './HeaderPro';
import { TestimonialData } from '../DataHouse/Data';
import { TesSettings } from '../DataHouse/Data';
import Slider from 'react-slick';
import TesCard from './TesCard';
const Testimonial = () => {
  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            {/* header */}
            <HeaderPro p1={`what our customer are saying`} header={`Testimonials`} p2={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia qui facere porro possimus a, in vero reiciendis sapiente ipsam laudantium voluptatem atque. Reiciendis eius temporibus aperiam libero voluptatem laudantium.`}/>
            <div className=' '>
                {/* Testimonial cards */}
                <div>
                    <Slider className='gap-[100px] flex' {...TesSettings}>
                        {
                            TestimonialData.map((item)=>(
                                <TesCard key={item.id} text={item.text} name={item.name} img={item.img}/>
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
