'use client'
import React, { useState } from 'react';

 import { AnimatePresence, motion } from "framer-motion";

 const  dropDown = () => {
   return (
     <FlayoutLink href="#" FlyoutContent={pages}>
        Produkten
      </FlayoutLink>
   )
 }
 const FlayoutLink = ({ children, href, FlyoutContent}) => {
    const [open, setOpen] = useState(false);
    const showFlyout = FlyoutContent && open;
  return (
    <div
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
     className='relative h-fit w-fit'
     >    
        <a href="" className='relative hover:border-b-2  sm:mb-8 sm:mt-10  rounded-lg   p-8 '>
         {children}
         <span
          style={{
           }}
         />
        </a>
        {showFlyout && 
        <div className='absolute top-14 left-1/2 -translate-x-1/2  text-white  ' >
         <div className="absolute -top-6 left-4 right-0 h-6  text-white " />
         <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-900'/>

         <FlyoutContent/>    
            </div>}
    </div>
  )
 }
 const  pages = () => {
return(
    <div className=' relative w-42   h-42   sm:-mt-20 sm:ml-80 sm:px-50  items-center bg-slate-900 rounded-md text-teal-700  p-6 shadow-xl'>
        <div className=' block '> 
        <a href="/tech" class=' hover:shadow-lg hover:border-b-2 my-3 border-[#04cecf] px-10  hover:text-white '>
            Tech
        </a>

        <a href="/druck" class=' block hover:shadow-lg hover:border-b-2 mt-2 border-[#04cecf] px-10  hover:text-white '>
        Druck
        </a>
        
        </div>
  
    </div>
)
 }
 export default dropDown;