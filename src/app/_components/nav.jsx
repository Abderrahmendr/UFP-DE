"use client"
import DropDown from '@/app/_components/dropDown'
import Log from "@/app/_components/log"
import React, { useState } from 'react'
import Search from './Search';
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function nav() {
   const [isClick, setIsClick] = useState(false);
  const toggleNavBar = () =>{
    setIsClick(!isClick)
  }
  return (
    <>
    <div className='flex justify-center items-center px-10 space-between lg:hidden md:hidden'>
<a
className="relative -mr-16  sm:p-2 sm:mx-4 lg:flex md:flex hover:animate-bounce rounded-full h-8 bg-gray-300   p-2 text-black shadow hover:bg-teal-600 hover:text-white "
href="#"
>
<FaShoppingCart />
</a>
<Log className="bg-gray-100 text-black no-underline  text-sm font-medium" />
</div>
    <nav className='bg-transparent'>
      <div className='mx-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center h-16'>
          <div className='flex items-center'>
             

          </div>
 <div className='hidden md:block '>
  <div className='ml-16 flex items-center  justify-center text-white space-x-5'>
               
                <DropDown />
                  
              <a href="/about"
              className='hover:border-b-2   border-[#04cecf] p-4 text-white '
              >Unternehmen</a>
              <a href="/aktuelles"
               className='hover:border-b-2   border-[#04cecf] p-4 text-white '
               >Aktuelles</a>
              <a href="/contact" 
              className='hover:border-b-2  border-[#04cecf] p-4 text-white '
              >Kontakt</a>

                <Search  />

               <a
      className="relative -mr-16  xs:hidden lg:flex md:flex hover:animate-bounce rounded-full h-8 bg-gray-300   p-2 text-black shadow hover:bg-teal-600 hover:text-white xs:mb-4 xs:mr-0"
      href="#"
    >
      <FaShoppingCart />
    </a>
    <Log className="bg-gray-100 text-black no-underline  text-sm font-medium" />

  </div>
 
   

   </div>
  
  <div className="flex lg:hidden items-center ">
  <button 
  className='inline-flex items-center   justify-center p-2 rounded-md text-white focus:outline-none focus:ring-inset focus:ring-white
  '
  onClick={toggleNavBar}
  >
    { isClick ?(
      <svg  className=" top-44 h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor" >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"/>
</svg>
   
  ) :(
    <svg  className="  top-44 h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
  )}

  </button>

 </div>
        </div>

      </div>
{isClick && (
  <div className="lg:hidden absolute top-20 left-0 w-full h-full ">
    <div className=" bg-slate-900 px-3 pb-3 pt-16 ">
    <DropDown className=""/>
  <a href=""
  className='hover:bg-teal-700 block  mt-10 rounded-lg p-8 text-white '
  >Unternehmen</a>
  <a href=""
   className='hover:bg-teal-700  block rounded-lg p-8 text-white '
   >Aktuell</a>
  <a href="" 
  className='hover:bg-teal-700 block rounded-lg p-8 text-white '
  >Kontakt</a>
  <Search  />


     </div>
  </div>
  
)}
    </nav>
    
    </>
  )
}

export default nav