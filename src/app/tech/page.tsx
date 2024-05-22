import React from 'react'
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMdLaptop } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";



function tech() {
  return (
    <div>
      <h1 className='absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-14  font-extrabold text-3xl underline-[#04cecf]   border-b-2  border-[#04cecf] '>IT Produkts und Services</h1>
  
  <div className='flex pt-72  m-20 gap-20 justify-center'>
      <a href="/#">
      <IoGameControllerOutline className='text-black text-3xl size-20 hover:scale-110' />
<h1 className='text-black items-center text-xl m-2 font-extrabold '>Gaming</h1>
      </a>

<a href="/#">
<IoMdLaptop className='text-black text-3xl size-20 hover:scale-110' />
<h1 className='text-black items-center text-xl m-2  font-extrabold'>IT/Office</h1>

      </a>

      <a href="/handy">
      <FaMobileAlt className='text-black text-3xl size-20 hover:scale-110' />
      <h1 className='text-black items-center text-xl m-2 mr-10  font-extrabold'>Handy</h1>

      </a>

      <a href="/#">
<img className='text-black text-3xl size-20 hover:scale-110'
src="/#"/>
<h1 className='text-black items-center text-xl m-2 -ml-6   font-extrabold flex'>Office Hardware</h1>

      </a>
      <a href="/#">
      <img className='text-black text-3xl size-20 hover:scale-110'
      src="/network.jpg"/> 
      <h1 className='text-black items-center text-xl m-2 -ml-3  font-extrabold'>Networking</h1>

      </a>

    
      <a href="/#">
      <img className='text-black text-3xl ml-5 size-20 hover:scale-110'
      src="/icon-hdd.jpg"/> 
      <h1 className='text-black items-center text-xl m-2 font-extrabold'>Storage Media</h1>

      </a>


    </div>

    </div>
  
  )
}

export default tech