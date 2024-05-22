"use client"
import React, { useState } from 'react'
import { IoPerson } from "react-icons/io5";


const log = () =>{
   return(
    <FlyoutLink href="" FlyoutContent={pages}>
<IoPerson  className='size-8 p-2 hover:text-white hover:bg-teal-600   bg-gray-300 rounded-full text-black'
/>
     </FlyoutLink>

   )
}

const FlyoutLink = ({FlyoutContent,children ,href}) =>
{
    const [open, setOpen] = useState(false)
    const showFlyout = FlyoutContent && open
    return(
       <div
       onMouseEnter={() => setOpen(true)}
       onMouseLeave={() => setOpen(false)}
       className='relative'
       >
        <a href="" className='relative  hover:text-[#04cecf] hover:underline-[#04cecf]  hover:border-b-2 border-[#04cecf] ring-offset-indigo-800'>
         {children}
         <span
          style={{
           }}
         />
        </a>
        {showFlyout && 
        <div className='absolute top-20 left-1/2 -translate-x-1/2  ' >
         <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
        <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-800'/>
        <FlyoutContent/>    
            </div>}
       </div>
    )
}

const pages = () => {
  return (
    <div className='w-40 h-42 flex justify-center items-center bg-slate-800 rounded-md text-white p-6 shadow-xl'>
        <div className=' block space-y-3'> 
            <a href="/anmelden" class=' hover:shadow-lg hover:border-b-2 border-[#04cecf] hover:text-white '>Anmelden</a>
            <a href="/registrieren" class=' block hover:shadow-lg hover:border-b-2 border-[#04cecf] hover:text-white '>Registrieren</a>
        </div>
    </div>
  )
}

export default log