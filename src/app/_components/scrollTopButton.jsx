"use client"
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { MdKeyboardArrowUp } from "react-icons/md";

function scrollTopButton() {
  return (
          
      <div  className=' fixed right-2 bottom-20'>
         <ScrollToTop smooth  top={200}
         class='absolute rounded-full  
         flex justify-center size-4 h-10 w-10 bg-teal-700 right-4 hover:text-white hover:border-2 hover:animate-bounce '
      component={ <MdKeyboardArrowUp  class=' mt-2 text-xl cursor-pointer '/>}>
        </ScrollToTop>
      </div>
     
  )
}

export default scrollTopButton