"use client"
import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useIntersection } from "@/utils/useIntersection";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [show, setShow] = useState(false)
  const ref = useRef();
  const inViewport = useIntersection(ref, '0px');
  useEffect(() => {
    if (inViewport) {
      setShow(true)
      console.log(show)
    }
  }, [inViewport])
  return (
    <div id='about' className="w-full lg:h-screen px-2 lg:px-0 flex items-center justify-center">
      <Fade duration={3000} triggerOnce={true} className="w-full h-fit lg:w-[70%] lg:h-[495px]">
        <div className="w-full h-fit  lg:h-[495px] flex flex-col lg:flex-row justify-between gap-x-16 px-4">
          <div ref={ref} className="flex flex-col justify-between  flex-1 gap-y-4 text-center lg:text-left">
            <Slide direction='left' triggerOnce={true}>
              <div>
                <p className="text-accent">ABOUT ME</p>
                <h3>I love <RoughNotation show={show ? true : false} type='circle' color="#ff6962" strokeWidth={2} padding={[6,12,6,12]} >building stuff</RoughNotation> <span className="text-2xl">🧩</span></h3>
              </div>
              <p>
                <RoughNotationGroup show={show ? true : false}>I started playing with computers when I was <RoughNotation type='highlight' iterations={1} color='#ffe7a0' multiline={true}>9 years-old.</RoughNotation> Since then, fueled by <RoughNotation type='highlight' iterations={1} color='#c1e1c1' multiline={true}>pure curiosity,</RoughNotation> I&apos;ve tinkered with all sorts of technologies. This led me to dabble in music production, sound engineering, video editing and other <RoughNotation type='highlight' iterations={1} color='#ffc0cb' multiline={true}>passion projects.</RoughNotation><br/><br/>After completing my bachelor&apos;s degree in International Business Management at <RoughNotation type='highlight' iterations={1} color='#f5e1fd' multiline={true} className='font-semibold' >Chulalongkorn University,</RoughNotation>  I discovered web development. I was quickly drawn in to learn more and became incredibly enthused with creating <RoughNotation type='highlight' iterations={1} color='#ffe7a0' multiline={true}>responsive  websites</RoughNotation> and offering <RoughNotation type='highlight' iterations={1} color='#c1e1c1' multiline={true}>smooth  user experiences.</RoughNotation><br/><br/>Currently, I&apos;m looking for opportunities as a <RoughNotation type='highlight' iterations={1} color='#ffc0cb' multiline={true}>Junior Front-End Developer,</RoughNotation> whilst <RoughNotation type='highlight' iterations={1} color='#ffe7a0' multiline={true}>continuing to learn more</RoughNotation> about back-end technologies and web development in general.
                </RoughNotationGroup>
              </p>
              <div className="flex items-center flex-col lg:flex-row gap-4 w-full mt-4 lg:mt-0">
                <a href="https://www.linkedin.com/in/kann-jittiwan/" target="_blank" className="button-dark flex-1 w-[70%] md:w-[40%] lg:w-[70%] text-center">
                  View LinkedIn
                </a>
                <a href="https://github.com/kjittiwan" target="_blank" className="button-outline flex-1 w-[70%] md:w-[40%] lg:w-[70%] text-center">
                  View GitHub
                </a>   
              </div>
            </Slide>  
          </div>
          <Slide direction='right' duration={2000} triggerOnce={true} className='w-[40%] h-full hidden lg:block relative'>
            <div className="w-full h-full relative rounded-xl">
              <Image
              src='/assets/setup.jpg'
              alt='/'
              fill={true}
              className='rounded-xl object-cover shadow-lg shadow-gray-400 w-full h-full'
              />
            </div>
          </Slide>  
        </div>
      </Fade>
      
    </div>
  )
}
