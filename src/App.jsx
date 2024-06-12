import React, {useEffect} from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './Components/TopProducts';
import Banner from './Components/Banner';
import Subscribe from './Components/Subscribe';
import Testimonial from './Components/Testimonial';

const App = () => {
  useEffect(() => {
    AOS.init({
      // settings such as:
      disable: 'phone', // disables animation on phones
      duration: 700,    // values from 0 to 3000, with step 50ms
      easing: 'ease-out-cubic', // an easing option
    });
    AOS.refresh();
  }, []);
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonial/>
    </div>
  )
}

export default App
