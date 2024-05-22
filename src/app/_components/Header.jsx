
"use client"
import  useRef  from 'react';
import React from 'react';
import Nav from "@/app/_components/nav"
import '@/app/globals.css';
import Navbar  from '@/app/_components/nav';
 import Search from './Search';
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import DropDown from '@/app/_components/dropDown'

import Log from "@/app/_components/log"
 import Link from 'next/link';
function Header() {
 
   
  return (
   <header className="bg-slate-900  w-full sticky top-0 left-0   shadow-slate-600 " >
    <div className="mx-auto max-w-screen-xl md:flex md:items-center md:gap-12 px-4 sm:px-6 lg:px-8 shadow-md">
       <div className="flex h-20 items-center justify-between ">
        <div className="flex-1 md:flex md:items-center md:gap-12 no-underline">
          <a className=" block no-underline " href="/">
            <span className="sr-only ">  Home</span>
            <svg className=" mt-5 w-32 h-32 xs:size-16 xs:-left-3 xs:-mt-3 xs:-ml-2 " 
            xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 358.25 164.41">
              <path fill="#008fc3" d="M0 145.87L307.45.87l-78.72 163.54-16.79-60.19L0 145.87z"/>
              <path fill="#004289" d="M48.41 0L341.9 35.32l16.35 75.67-248.34 40.33L48.41 0z"/>
              <path d="M136.15 82.96c0 5.94.01 20.5 27.05 20.5s27.78-14.56 27.78-20.5V48.94h-14.37V79.4c0 5.2-.22 13.96-13.41 13.96s-12.68-8.77-12.68-13.96V48.94h-14.37v34.02zm66.1 19.02h14.38V80.73h26.07v-10.1h-26.07V59.04h29.32v-10.1h-43.7v53.04z" 
              fill="#fff"/>
              <path d="M270.15 58.6h14.17c4.08 0 8.3.59 8.3 7.5 0 7.13-5.19 7.28-9.63 7.28h-12.83V58.6h-.01zm-14.37 43.38h14.37V83.03h18.55c11.63 0 17.61-7.09 17.61-18.38 0-7.13-3.68-15.82-18.72-15.82l-31.82.1v53.05h.01z"
               fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/></svg>
            </a>
        </div>
  
               
           
      
         <Nav/>

  
         
       </div>

      <div className="absolute right-0 -top-3 md:mr-20 lg:right-0 md:flex-grow">
</div>
    </div>
   </header>

  )

}

export default Header