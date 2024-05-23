 import React from 'react'
import Marquee from 'react-fast-marquee' 
import Image from 'next/image'
 function suppliers() {
   return ( 

<div >
  <div className="flex justify-center items-center w-full min-h-full  ">
    <Image 
      className="opacity-20"
      src="/UFP_logo.png" 
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
            src="/panasonic.png"
            alt="Panasonic"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/hp.png"
            alt="HP"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/printmate.png"
            alt="Printmate"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/printronix.png"
            alt="Printronix"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/quantum.png"
            alt="Quantum"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/samsung.png"
            alt="Samsung"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/ricoh.png"
            alt="Ricoh"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/sharp.png"
            alt="Sharp"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/toshiba.png"
            alt="Toshiba"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/olivetti.png"
            alt="Olivetti"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/oki.png"
            alt="Oki"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/lexmark.png"
            alt="Lexmark"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/kodak.png"
            alt="Kodak"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/canon-1.png"
            alt="Canon"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/brother-1.png"
            alt="Brother"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/dlink.png"
            alt="D-Link"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/apple.png"
            alt="Apple"
            width={100} 
            height={100} 
          />
        </a>
        <a href="#">
          <Image
            src="/dell.png"
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