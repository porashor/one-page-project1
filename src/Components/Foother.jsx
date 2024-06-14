import React from 'react'
import Back from "../assets/website/footer-pattern.jpg"
import footherLogo from "../assets/logo.png"
import { Menu } from '../DataHouse/Data'
import { FaFacebook, FaInstagram, FaMessage, FaTelegram } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
const Foother = () => {
    const backgroundImg = {
        backgroundImage: `url(${Back})`,
        backgroundPosition : "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    }
  return (
    <div data-aos="slide-up" style={backgroundImg}>
      <div className='container text-white py-20 '>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-[2fr_1fr_1fr_1fr] items-start justify-center mb-20 fn'>
            <div className='space-y-4'>
                <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2 ">
                    <img src={footherLogo} alt="logo" className="w-10 " /> MyShop
                </a>
                <p className='text-xs text-gray-500 max-w-[400px] leading-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti aliquid illo labore, optio autem placeat exercitationem reprehenderit fugit quo porro sit qui commodi id doloribus sapiente illum voluptatibus, magnam sunt mollitia est possimus tempora fugiat delectus. Beatae, eveniet in.
                </p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-2xl font-semibold'>Foother Links</h1>
                <div className='space-y-3 text-white/70'>
                    {
                        Menu.map((item,index)=>(
                            <div className='hover:text-primary' key={index}>
                                <a href={item.link}>{item.name}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='space-y-4'>
                <h1 className='text-2xl font-semibold'>Links</h1>
                <div className='space-y-3 text-white/70'>
                    {
                        Menu.map((item,index)=>(
                            <div className='hover:text-primary' key={index}>
                                <a href={item.link}>{item.name}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='space-y-4'>
                <div className='flex gap-3 text-2xl '>
                    <FaMessage className='hover:text-primary duration-200'/>
                    <FaFacebook className='hover:text-primary duration-200'/>
                    <FaInstagram className='hover:text-primary duration-200'/>
                </div>
                <div className='flex items-center justify-start gap-3 capitalize hover:text-primary'>
                    <FaTwitter/> <span className='text-white/60 hover:text-primary'>via twitter</span>
                </div>
                <div className='flex items-center justify-start gap-3 capitalize hover:text-primary'>
                    <FaTelegram/> <span className='text-white/60 hover:text-primary'>via telegram</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Foother
