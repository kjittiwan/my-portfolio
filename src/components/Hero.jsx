"use client"
import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { IoMail } from "react-icons/io5"
export default function Hero() {
  return (
    <div id='home' className="w-full h-screen text-center">
      <Fade duration={3000} triggerOnce={true} className="w-full h-full ">
        <div className="w-full h-full mx-auto px-6 p-2 flex flex-col justify-center items-center gap-y-4 md:gap-y-6 pt-14">
          <div className="flex gap-x-4 items-center justify-center ">
            <Slide cascade direction="down" damping={0.1} triggerOnce={true}>
              <h1>Hi, I&apos;m <span className="text-accent">Kann</span></h1>
              <div className="w-[60px] h-[60px] md:w-[85px] md:h-[85px] relative">
                <Image
                src='/assets/hello.png'
                alt='/'
                fill={true}
                style={{objectFit: "contain"}}
                />
              </div>
            </Slide>
          </div>
          <Slide direction="down" delay={200} triggerOnce={true}>
            <h1>A Front-End Web Developer</h1>
          </Slide>
          <Slide direction="down" delay={300} triggerOnce={true}>
            <p className="text-xl text-gray-600 ">
            I love crafting and creating <span className="text-2xl">🛠</span> I&apos;m a lifelong learner <span className="text-2xl">📚</span><br/>and a huge cat person <span className="text-2xl">🐈</span></p>
          </Slide>
          <Slide cascade direction="down" damping={0.3} delay={400} triggerOnce={true}>
            <div className="flex items-center pt-4 gap-x-6 md:gap-x-8 text-xl md:text-3xl">
              <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 hover:text-accent transition-all duration-300">
              <a href="https://www.linkedin.com/in/kann-jittiwan/" target="_blank"><BsLinkedin /></a>  
              </div>
              <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 hover:text-accent transition-all duration-300">
              <a href="https://github.com/kjittiwan" target="_blank"><BsGithub /></a> 
              </div>
              <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 hover:text-accent transition-all duration-300">
              <a href="mailto: kann.jittiwan@gmail.com"><IoMail /></a>
              </div>
            </div>
          </Slide>


        </div>
      </Fade>
          
    </div>
  )
}
