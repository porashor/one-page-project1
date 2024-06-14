import React from 'react'
import image1 from "../assets/women/women.png";
import image2 from "../assets/women/women2.jpg";
import image3 from "../assets/women/women3.jpg";
import image4 from "../assets/women/women4.jpg";
import { productsData } from '../DataHouse/Data';
import { FaStar } from 'react-icons/fa';
import HeaderPro from './HeaderPro';

const Products = ({handle}) => {
    const data = productsData(image1, image2, image3, image4);
  return (
    <div className="mt-14 mb-12" data-aos="fade-in-out" data-aos-delay="300">
    <div className='container '>
        <HeaderPro p1={`Top Selling Products`} header={`Products`} p2={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quos aut reiciendis quam explicabo corporis nobis id, velit sint nam debitis tempore tenetur, quo ea laudantium harum architecto quae provident.`}/>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 place-items-center gap-5 dark:text-white'>
            {/* card selections */}
            {
                data.map((item)=>(
                    <div data-aos="slide-up" data-aos-delay={item.aosDelay} className='space-y-3' key={item.id}>
                        <img src={item.img} alt="productsimage" className='h-[220px] w-[150px] object-cover rounded-md' />
                        <div>
                            <h3 className='font-semibold'>
                                {item.title}
                            </h3>
                            <p className='text-sm text-gray-600'>
                                {item.color}
                            </p>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400'/>
                                <span>{item.rating}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div data-aos="zoom-in" className='flex justify-center'>
            <button onClick={handle} className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-2 rounded-md'>View All Button</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Products
