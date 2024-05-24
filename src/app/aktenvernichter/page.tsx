import React from 'react'

function aktenvernichter() {
  return (
    <div className='flex justify-center items-center  mb-10 mt-16 '>
    <a href="#" className="group relative block overflow-hidden ">
      
      <img
      src="/AKTENVERNICHTER.jpg"
         alt=""
        className="h-64 w-full  object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />
    
      <div className="relative border border-gray-100 shadow-xl shadow-teal-800  p-6">
        <span className="whitespace-nowrap bg-teal-800 px-3 py-1.5 text-sm font-bold"> Neu </span>
    
        <h3 className="mt-4 text-lg font-medium text-gray-900">Aktenvernichter</h3>
    
        <p className="mt-1.5 text-sm text-gray-700">SILB-SCHW 4074101 <br/> A 4   <br/> 9 Blatt <br/> </p>
    
        
      </div>
    </a> 
        </div>  )
}

export default aktenvernichter