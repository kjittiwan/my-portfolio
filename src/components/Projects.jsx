import React from 'react'
import Carousel from './Carousel'
import { cleoData, atomData, cryptoData, highkingData } from '@/data/carouselData'
export default function Projects() {
  return (
    <div className='h-[3000px] w-full'>
      <Carousel data={atomData}/>
    </div>
  )
}
