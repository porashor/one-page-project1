import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './Components/TopProducts';
import Banner from './Components/Banner';
import Subscribe from './Components/Subscribe';
import Testimonial from './Components/Testimonial';
import Foother from './Components/Foother';
import Popup from './Components/Popup';

const App = () => {
  const [pop, setPop] = useState(false);
  useEffect(() => {
    AOS.init({
      // settings such as:
      disable: 'phone', // disables animation on phones
      duration: 700,    // values from 0 to 3000, with step 50ms
      easing: 'ease-out-cubic', // an easing option
    });
    AOS.refresh();
  }, []);
  function handle(){
    if(pop=== true){
      setPop(false)
    }else{
      setPop(true)
    }
  }
  
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar  handle = {handle}/>
      <Hero handle={handle}/>
      <Products handle={handle}/>
      <TopProducts handle={handle}/>
      <Banner/>
      <Subscribe/>
      <Products handle={handle}/>
      <Testimonial/>
      <Foother/>
      <Popup pop={pop} setpop={setPop}/>
    </div>
  )
}

export default App
