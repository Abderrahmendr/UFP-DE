 'use client'
import { useState } from 'react'; 
import { useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import  '@/app/globals.css';







function slide() {
    const slides = 
    [
        {
         url: "/65f9a418e9921000228c2853_1226x500.png",
        },
        {
            url: "/home.jpg",
        },
        {
            url: "/GLS.png",
        },
        {
            url: "/hero_1.jpg",
        },
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoScroll = true;
    let slideInterval;    
    let  intervalTime = 4000;
    
          {/** --------------------------------------------------------Prev ARROW------------------------------------ */}

    const prevSlide = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };
              {/** --------------------------------------------------------Next ARROW------------------------------------ */}

    const nextSlide = ()=>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    };

    const goToSlide =  (slideIndex)=>{
        setCurrentIndex(slideIndex);
    };
                  {/** --------------------------------------------------------Auto Slide------------------------------------ */}

// eslint-disable-next-line react-hooks/exhaustive-deps
function auto ()
    {
        
        let slideInterval = setInterval(nextSlide,intervalTime);
    }
    useEffect(()=>{
      if(autoScroll){
        auto();
      }
    }, [currentIndex]);
              {/** --------------------------------------------------------Up ARROW------------------------------------ */}


    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group  '>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='max-w-7xl h-4/6   ml-16 mr-16 rounded-2xl bg-center bg-cover duration-500 shadow-[#e5e5e5]'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[37%] -translate-x-0 translate-y-[-50%] left-20 text-2xl rounded-full p-2 bg-teal-500 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[37%] -translate-x-0 translate-y-[-50%] right-20 text-2xl rounded-full p-2 bg-teal-500 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center w-30 py-2 '>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer   '
              >
                <RxDotFilled className='text-teal-500 '/>
              </div>
              
            ))}
          

          </div>
         </div>
      );
    }
    
    export default slide;