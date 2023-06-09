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
  return (
    <div className='flex justify-center items-center relative w-full h-[230px] md:w-[576px] md:h-[315px] group transition-all duration-300'>
      <div onClick={prevSlide} className={`${slide === 0 
        ? 'bg-primary/80 text-gray-400 cursor-default' 
        : 'cursor-pointer hover:scale-110'} bg-primary/90 p-2 rounded-full lg:text-xl absolute left-4 z-10 hidden group-hover:block`}>
        <HiArrowLeft />
      </div>
      {data.map((item, idx) => {
      return (
      <div key={idx} className={`${slide === idx ? 'block relative w-full h-full' : 'hidden' }`}>
        <Image 
        src={item.src} 
        alt={item.alt}
        fill={true}
        loading="lazy"
        className='w-full h-full rounded-xl drop-shadow-2xl object-contain'/>
      </div>
      )
    })}
    <div onClick={nextSlide} className={`${slide === data.length - 1 
      ? 'bg-primary/80 text-gray-400 cursor-default' 
      : 'cursor-pointer hover:scale-110'} bg-primary/90 p-2 rounded-full lg:text-xl absolute right-4 z-10 hidden group-hover:block`}>
        <HiArrowRight />
    </div>
    <span className='flex absolute bottom-8 lg:bottom-4 gap-x-2'>{data.map((_, idx) => {
      return (
        <button key={idx} onClick={() => setSlide(idx)} className={`${slide === idx ? 'bg-blue-500 cursor-default' : 'bg-gray-300 cursor-pointer'} h-2 w-2 rounded-full shadow-lg`}></button>
      )
    })}</span>
    </div>
  )
}
