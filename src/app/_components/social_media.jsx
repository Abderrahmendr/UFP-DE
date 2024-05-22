import React from 'react'
import { FaLinkedin,FaFacebookSquare  } from "react-icons/fa";
import { ImXing } from "react-icons/im";
import { FaArrowUp } from "react-icons/fa";


<div className='   absolute bg-gray-300 w-10 h-10 right-10  size-4 text-lg rounded-full hover:bg-teal-500 hover:text-white   hover:animate-bounce '>
          <span class="up">
          <FaArrowUp  className='  absolute   bottom-3 rounded-full cursor-pointer'/>
            </span>
         </div>
export function social_media( children,text,color,...props) {
  return (
    <div className=" absolute left-2  p-2 ml-2  top-60 mt-14 space-y-6 text-2xl  bg-[length:20px_20px] text-blue-600 cursor-pointer">
     <div class="absolute -left-2  top-5 w-16 h-16 flex items-center justify-center">
                    <div class="absolute top-0 left-0 w-16 h-16 rounded-full bg-teal-600 bg-opacity-30 animate-pulse animate-scaleChange"></div>
                    <div class="relative flex items-center justify-center w-12 h-12 rounded-full bg-teal-800">
                    <a target="blank" href='https://www.linkedin.com/company/ufp-deutschland-gmbh' >
     <FaLinkedin  className=' h-8 w-8 animate-[puls_1s_ease-in-out_2]" rounded-50 box-content ' />
 
        </a>
                     </div>
                  </div>
        <div class="absolute -left-2  top-20 w-16 h-16 flex items-center justify-center">
                    <div class="absolute top-0 left-0 w-16 h-16 rounded-full bg-teal-600 bg-opacity-30 animate-pulse animate-scaleChange"></div>
                    <div class="relative flex items-center justify-center w-12 h-12 rounded-full bg-teal-800">
                    <a target="blank" href='https://www.facebook.com/ufp.deutschland' alt="Facebook">
     <FaFacebookSquare  className=' h-8 w-8 animate-[puls_1s_ease-in-out_2]" rounded-50 box-content'/>
 
        </a>
                     </div>
                  </div>
               {/**<div class="absolute -left-2  top-40 w-16 h-16 flex items-center justify-center">
                    <div class="absolute  left-0 w-16 h-16 rounded-full bg-teal-600 bg-opacity-30 animate-pulse animate-scaleChange"></div>
                    <div class="relative flex items-center justify-center w-12 h-12 rounded-full bg-teal-800">
                    <a href='#'>
     <ImXing  className=' h-8 w-8 animate-[puls_1s_ease-in-out_2]" rounded-50 box-content'/>
 
        </a>
                     </div>
                  </div> */}

    
               

          
   </div>
  
                
 
)
}


export default social_media