import React from 'react'

function papier() {
  return (
    <div className='flex justify-center items-center mt-16 mb-10 '>
    <a href="#" className="group relative block overflow-hidden ">
      
      <img
      src="/papier.jpg"
         alt=""
        className="h-64 w-full  object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />
    
      <div className="relative border border-gray-100 shadow-xl shadow-teal-800  p-6">
        <span className="whitespace-nowrap bg-teal-800 px-3 py-1.5 text-sm font-bold"> Neu </span>
    
        <h3 className="mt-4 text-lg font-medium text-gray-900">Double A</h3>
    
        <p className="mt-1.5 text-sm text-gray-700"> A4 (210x297mm) <br/>  Weiss <br/> 80gr<br/> </p>
    
        
      </div>
    </a> 
        </div>  )
}

export default papier