import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { FaLinkedin,FaFacebookSquare  } from "react-icons/fa";


function Footer() {
  return (
<div>  
<footer className="bg-sky-900 ">
  <div className="mx-auto  max-w-screen-xl px-4 py-20   sm:text-center sm:px-6 lg:px-8">
    <div className="md:flex lg:flex lg:gap-8">
      
      <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-6 ">
       {/**-------------------------------------LOGO----------------------------- */}
        <div className="col-span-2">
          <div className='mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16'>
          <svg className="  w-32 h-32  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.25 164.41"><path fill="#008fc3" d="M0 145.87L307.45.87l-78.72 163.54-16.79-60.19L0 145.87z"/><path fill="#004289" d="M48.41 0L341.9 35.32l16.35 75.67-248.34 40.33L48.41 0z"/><path d="M136.15 82.96c0 5.94.01 20.5 27.05 20.5s27.78-14.56 27.78-20.5V48.94h-14.37V79.4c0 5.2-.22 13.96-13.41 13.96s-12.68-8.77-12.68-13.96V48.94h-14.37v34.02zm66.1 19.02h14.38V80.73h26.07v-10.1h-26.07V59.04h29.32v-10.1h-43.7v53.04z" fill="#fff"/><path d="M270.15 58.6h14.17c4.08 0 8.3.59 8.3 7.5 0 7.13-5.19 7.28-9.63 7.28h-12.83V58.6h-.01zm-14.37 43.38h14.37V83.03h18.55c11.63 0 17.61-7.09 17.61-18.38 0-7.13-3.68-15.82-18.72-15.82l-31.82.1v53.05h.01z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/></svg>
           </div>
        </div>
       {/**-------------------------------------SEARCH BAR----------------------------- */}

        <div className="col-span-2 relative  top-8  lg:col-span-3 lg:flex lg:items-end">

        <form className="  w-full h-full ">
  <div className="relative  focus-within:ring sm:flex sm:items-center sm:gap-4">
  <input 
  type="search" 
  placeholder=' Suchen' 
  className='w-full outline-0 p-3  pl-8 rounded-full bg-slate-800  text-white' />
  <button className=' absolute right-1 top-1/2  -translate-y-1/2 p-3 flex flex-col bg-[#04cecf] rounded-full'>
  <AiOutlineSearch />

  </button>
  </div>
  </form>
        </div>
       {/**-------------------------------------UNTERNEHMEN DEVICES----------------------------- */}

        <div className="col-span-2 sm:col-span-1 mt-8">
          <p className="font-medium text-gray-300 ">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            

            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> Company Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> Accounts Review </a>
            </li>

            
             
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1 mt-8">
          <p className="font-medium text-gray-300">Unternehmen</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> Über Uns </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> Karriere </a>
            </li>

            
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1 mt-8">
          <p className="font-medium text-gray-300">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> Kontakt </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> HR Consulting </a>
            </li>

          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1 mt-8">
          <p className="font-medium text-gray-300">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
           

            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> Refund Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> Hiring Statistics </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1 mt-8">
          <p className="font-medium text-gray-300">Downloads</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> Marketing Calendar </a>
            </li>

            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75"> SEO Infographics </a>
            </li>
          </ul>
        </div>
       {/**-------------------------------------SOCIAL MEDIA----------------------------- */}

        <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
          <li>
          <a target="blank" href='https://www.linkedin.com/company/ufp-deutschland-gmbh' >
     <FaLinkedin  className=' h-8 w-8 animate-[puls_1s_ease-in-out_2]" rounded-50 box-content ' />
 
        </a>
          </li>


          <li>
          <a target="blank" href='https://www.facebook.com/ufp.deutschland' alt="Facebook">
     <FaFacebookSquare  className=' h-8 w-8 animate-[puls_1s_ease-in-out_2]" rounded-50 box-content'/>
 
        </a>
          </li>


         </ul>
      </div>
    </div>
       {/**-------------------------------------TERMES AND CONDITIONS----------------------------- */}

    <div className="mt-8 border-t border-gray-100 pt-8">
      <div className="sm:flex sm:justify-between">
        <p className="text-xs text-gray-300">&copy; 2022. Company Name. All rights reserved.</p>

        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <a href="#" className="text-gray-300 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" className="text-gray-300 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-300 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer