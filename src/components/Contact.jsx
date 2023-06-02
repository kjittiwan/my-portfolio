"use client"
import { Fade, Slide } from "react-awesome-reveal"
import { IoMail } from "react-icons/io5"
import { FaMapMarkedAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <div id="contact" className="w-full lg:w-[70%] h-full mx-auto pt-24 pb-32">
      <Fade duration={3000} triggerOnce={true}>
        <div className="w-full h-fit flex flex-col md:items-center lg:items-start px-4 gap-y-12">
          <div className="md:text-center lg:text-left">
            <Slide cascade direction="down" damping={0.1} triggerOnce={true}>
              <p className="text-accent mb-2">CONTACT</p>
              <h3>Let&apos;s Connect!</h3>
            </Slide>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-16">
            <Slide cascade direction="left" damping={0.1} triggerOnce={true} className='w-full'>
              <div className="flex gap-x-6 items-center">
                <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 text-xl md:text-3xl text-accent transition-all duration-300">
                  <a href="https://goo.gl/maps/PRM459bX4uo6HpjM7" target="_blank"><FaMapMarkedAlt  /></a>   
                </div>
                <div className="flex flex-col justify-between">
                    <p className="text-xl font-bold">Location</p>
                    <a href="https://goo.gl/maps/PRM459bX4uo6HpjM7" target="_blank" className="text-gray-600 text-lg hover:text-accent transition-all duration-300">Bangkok, Thailand</a>
                </div>
              </div>
              <div className="flex gap-x-6 items-center">
                <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 text-xl md:text-3xl text-accent transition-all duration-300">
                  <a href="mailto: kann.jittiwan@gmail.com" target="_blank"><IoMail /></a>   
                </div>
                <div className="flex flex-col justify-between">
                    <p className="text-xl font-bold">Email</p>
                    <a href="mailto: kann.jittiwan@gmail.com" target="_blank" className="text-gray-600 text-lg hover:text-accent transition-all duration-300">kann.jittiwan@gmail.com</a>
                </div>
              </div>
            </Slide>
            
          </div>
        </div>
      </Fade>
      
    </div> 
  )
}
