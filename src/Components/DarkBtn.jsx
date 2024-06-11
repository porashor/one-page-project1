import React, { useEffect, useState } from 'react'
import light from "../assets/website/light-mode-button.png"
import dark from "../assets/website/dark-mode-button.png"
const DarkBtn = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const ele = document.documentElement;
    useEffect(()=>{
      if(theme === "light"){
        ele.classList.add("dark");
        localStorage.setItem("theme", "dark")
      }else{
        ele.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },[theme])
    function handle(){
      if(theme === "dark"){
        setTheme("light")
      }else{
        setTheme("dark")
      }
    }
    console.log(theme)
  return (
    <div className='relative' onClick={handle}>
      <img src={light} className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] absolute right-0 z-10 transition-all duration-300 opacity-0 ${theme === "light" ? "opacity-0" : "opacity-100"}`} alt="light" />
      <img  src={dark} className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all ${theme === "dark" ? "opacity-0" : "opacity-100"} duration-300 `} alt="dark" />
    </div>
  )
}

export default DarkBtn
