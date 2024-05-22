import React from 'react'
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMdLaptop } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";


function druck() {
  return (

		<div>
		  <h1 className='absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-14  
		  font-extrabold text-3xl underline-[#04cecf]   border-b-4  border-[#04cecf] '>Druck und Services</h1>
	  
	  <div className='flex pt-72  m-20 gap-20 justify-center'>
		 
	
		  <a href="/#">
	<img className='text-black text-3xl size-20 hover:scale-110'
	src="/ink-icon.png"/>
	<h1 className='text-black items-center text-xl m-2 ml-8   font-extrabold flex'>Ink</h1>
	
		  </a>
		  <a href="/#">
		  <img className='text-black text-3xl size-20 hover:scale-110'
		  src="/icon-print.png"/> 
		  <h1 className='text-black items-center text-xl m-2   font-extrabold'>Hardware</h1>
	
		  </a>
	
		
		  <a href="/#">
		  <img className='text-black text-3xl ml-5 size-20 hover:scale-110'
		  src="/paper-media.png"/> 
		  <h1 className='text-black items-center text-xl m-2 font-extrabold'>Druckmedien</h1>
	
		  </a>
		  <a href="/#">
		  <img className='text-black text-3xl ml-8 size-20 hover:scale-110'
		  src="/toner-icon.png"/> 
		  <h1 className='text-black items-center text-xl m-2 font-extrabold'>Speichernmedien</h1>
	
		  </a>
	
		</div>
	
		</div>
	  
	  )
	}
	
	 

export default druck