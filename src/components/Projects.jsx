import React from 'react'
import Carousel from './Carousel'
import { cleoData, atomData, cryptoData, highkingData } from '@/data/carouselData'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <div className='h-[3000px] w-full'>
      <div className='w-full flex flex-col items-center gap-y-16'>
        <ProjectItem data={cleoData} />
        <ProjectItem data={atomData} />
        <ProjectItem data={cryptoData} />
        <ProjectItem data={highkingData} />
      </div>
      
    </div>
  )
}
