 import React from 'react'
import Marquee from 'react-fast-marquee' 
import Image from 'next/image'
 function suppliers() {
   return ( 

<div >
  <div className="flex justify-center items-center w-full min-h-full  ">
    <Image 
      className="opacity-20"
      src="/UFP_Logo.png" 
      alt="UFP Logo" 
      width={150} 
      height={150} 
    />
    <p className="flex justify-center items-center -ml-56 mt-12 text-3xl pb-16 font-extrabold">
      Unsere Markenprodukt
    </p>
  </div>
  <div className="w-full min-h-full flex overflow-y-hidden justify-center items-center bg-teal-800 text-white">
    <div className="w-full">
      <Marquee className="overflow-y-hidden pl-20 gap-x-20 space-x-[10px]">
        <a href="#">
          <Image
            src="/Panasonic.png"
            alt="Panasonic"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/HP.png"
            alt="HP"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Printmate.png"
            alt="Printmate"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Printronix.png"
            alt="Printronix"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Quantum.png"
            alt="Quantum"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Samsung.png"
            alt="Samsung"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Ricoh.png"
            alt="Ricoh"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Sharp.png"
            alt="Sharp"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Toshiba.png"
            alt="Toshiba"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Olivetti.png"
            alt="Olivetti"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/OKI.png"
            alt="Oki"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Lexmark.png"
            alt="Lexmark"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Kodak.png"
            alt="Kodak"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Canon-1.png"
            alt="Canon"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Brother-1.png"
            alt="Brother"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Dlink.png"
            alt="D-Link"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Apple.png"
            alt="Apple"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/Dell.png"
            alt="Dell"
            width={100} 
            height={100} 
          />
        </a>
      </Marquee>
    </div>
  </div>
</div>

    
   )
 }
 
 export default suppliers