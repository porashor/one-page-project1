import React from 'react'
import HeaderPro from './HeaderPro'
import { TopProData } from '../DataHouse/Data'

import image1 from "../assets/shirt/shirt.png";
import image2 from "../assets/shirt/shirt2.png";
import image3 from "../assets/shirt/shirt3.png";
import { FaStar } from 'react-icons/fa6';
const TopProducts = () => {
    const data = TopProData(image1, image2, image3)
    console.log(data)
  return (
    <div>
      <div className='container'>
        <HeaderPro p1={`Top rated products for you`} header={`Best Products`} p2={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis! Quod veritatis consequuntur possimus ipsa fugit ea molestias ullam placeat. Voluptas odit quia saepe cum sint accusantium dignissimos praesentium perspiciatis?`}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap0-20 md:gap-5 place-items-center mt-28'>
            {
                data.map((item)=>(
                    <div key={item.id} className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                        <div className='h-[100px]'>
                            <img src={item.img} alt="shirt" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                        </div>
                        <div className='p-4  text-center'>
                            <div className='w-full flex items-center justify-center gap-1 '>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h1 className='text-xl font-bold'>
                                {item.title}
                            </h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 '>{item.description}</p>
                            <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default TopProducts
