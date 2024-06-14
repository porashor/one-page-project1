import React  from "react";
// @ts-ignore
import Logo from "../assets/logo.png"
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkBtn from "./DarkBtn";
import { DropDown, Menu } from "../DataHouse/Data";




export default function Navbar({handle}){
    return (
        <div>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
                {/* up-nav */}
            <div className="bg-primary/45 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2 ">
                            <img src={Logo} alt="logo" className="w-10 " /> MyShop
                        </a>
                    </div>
                    <div className="flex items-center gap-3"> 
                    {/* search-bar */}
                        <div className="group relative hidden sm:block">
                            <input type="text" placeholder="search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:bg-neutral-700 dark:text-white" />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/3 right-3"/>
                        </div>
                        {/* order-btn */}
                        <button onClick={handle} className="gradient transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                            <span className="group-hover:block hidden transition-all duration-200">Order</span>
                            <FaCartShopping className="group-hover:hidden block text-xl drop-shadow-sm "/>
                        </button>
                        {/* darkmode switch */}
                        <DarkBtn/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <ul className="sm:flex hidden items-center gap-4">
                    {
                        Menu.map((item)=>(
                            <li key={item.id}>
                                <a className="inline-block px-4 hover:text-primary duration-200 " href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                    <li className="group relative">
                        <a href="#" className="flex items-center gap-[2px] py-2 ">
                            Trending Products
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                            </span>
                        </a>
                        <div className="hidden group-hover:block absolute rounded-md dark:bg-white bg-neutral-800 text-white dark:text-black py-2 px-2 w-[200px] shadow-md">
                            <ul>
                                {
                                    DropDown.map((item, index)=>(
                                        <li key={index}>
                                            <a className="inline-block w-full rounded-md p-[12px] hover:bg-primary/20" href={item.link}>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}