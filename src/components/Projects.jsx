"use client"
import React from 'react'
import { cleoData, atomData, cryptoData, highkingData } from '@/data/projectsData'
import ProjectItem from './ProjectItem'
import { Fade, Slide } from 'react-awesome-reveal'

export default function Projects() {
  return (
    <div id='projects' className='min-h-screen w-full my-24 scroll-mt-40 py-14'>
      <Fade duration={3000} triggerOnce={true} className='h-full w-full'>
        <div className="self-center text-center mb-16">
          <Slide direction='down' cascade damping={0.1} triggerOnce={true}>
            <p className="text-accent mb-2">PORTFOLIO</p>
            <h3>What I&apos;ve Built</h3>
        </Slide> 
        </div>
        <div className='w-full flex flex-col items-center gap-y-20 px-4'>
          <Slide direction='right' triggerOnce={true} duration={1500} className='w-full md:w-[90%] lg:w-[70%]'>
            <ProjectItem data={cleoData} />
          </Slide>
          <Slide direction='left' triggerOnce={true} duration={1500} className='w-full md:w-[90%] lg:w-[70%]'>
            <ProjectItem data={atomData} />
          </Slide>
          <Slide direction='right' triggerOnce={true} duration={1500} className='w-full md:w-[90%] lg:w-[70%]'>
            <ProjectItem data={cryptoData} />
          </Slide>
          <Slide direction='left' triggerOnce={true} duration={1500} className='w-full md:w-[90%] lg:w-[70%]'>
            <ProjectItem data={highkingData} />
          </Slide> 
        </div>
      </Fade>

      
    </div>
  )
}
