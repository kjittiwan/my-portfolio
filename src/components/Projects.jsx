import React from 'react'
import { cleoData, atomData, cryptoData, highkingData } from '@/data/projectsData'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <div className='min-h-screen w-full my-24'>
      <div className="self-center text-center mb-16">
          <p className="text-accent mb-2">PORTFOLIO</p>
          <h3>What I&apos;ve Built</h3>
      </div>
      <div className='w-full flex flex-col items-center gap-y-16 px-4'>
        <ProjectItem data={cleoData} />
        <ProjectItem data={atomData} />
        <ProjectItem data={cryptoData} />
        <ProjectItem data={highkingData} />
      </div>
      
    </div>
  )
}
