"use client"

import Image from 'next/image'
import {useState} from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
export default function Carousel({data}) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? data.length -1 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? 0 : slide - 1);
  };
  console.log(slide)
  return (
    <div className='flex justify-center items-center relative w-[576px] h-[315px] bg-blue-200 group transition-all duration-300'>
      <div onClick={prevSlide} className={`${slide === 0 ? ' bg-primary/80 text-gray-500 cursor-default' : ''} bg-primary/90 p-2 rounded-full text-xl absolute left-4 z-10 cursor-pointer hidden group-hover:block`}>
        <HiArrowLeft />
      </div>
      
      {data.map((item, idx) => {
      return (
      <div key={idx} className={`${slide === idx ? 'block relative w-full h-full' : 'hidden' }`}>
        <Image 
        src={item.src} 
        alt={item.alt}
        fill={true}
        style={{objectFit: "contain"}}
        loading="lazy"
        className='w-full h-full rounded-xl'/>
      </div>
      )
    })}
    <div onClick={nextSlide} className={`${slide === data.length - 1 ? ' bg-primary/80 text-gray-500 cursor-default' : ''} bg-primary/90 p-2 rounded-full text-xl absolute right-4 z-10 cursor-pointer hidden group-hover:block`}>
        <HiArrowRight />
    </div>
    <span className='hidden group-hover:flex absolute bottom-4 gap-x-2'>{data.map((_, idx) => {
      return (<button key={idx} onClick={null} className={`${slide === idx ? 'bg-blue-500 cursor-default' : 'bg-gray-300 cursor-pointer'} h-2 w-2 rounded-full shadow-md`}></button>)
    })}</span>
    </div>
  )
}
