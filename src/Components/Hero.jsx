import React from 'react';
import image1 from "../assets/women/women.png";
import image2 from "../assets/women/women2.jpg";
import image3 from "../assets/women/women3.jpg";
import image4 from "../assets/women/women4.jpg";
import { herodata } from '../DataHouse/Data'
import Slider from 'react-slick';
import SlideCard from './SlideCard';
const Hero = () => {
    const data = herodata(image1, image2, image3, image4);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed : 4000,
      cssEase : "ease-in-out"
    };
  return (
    <div className='relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      <div className='h-[700px] w-[700px] bg-primary/40 rounded-3xl z-[1] absolute right-0 rotate-45 -top-[500px]'>
      </div>
      {/* main hero section */}
      <div className='container pb-8 sm:pb-0 z-[10] '>
        <Slider {...settings}>
        {
         data.map((item, index)=>(
          <SlideCard key={index} title={item.title} description={item.description} img={item.img}/>
         ))
        }
        </Slider>
      </div>
    </div>
  )
}

export default Hero
