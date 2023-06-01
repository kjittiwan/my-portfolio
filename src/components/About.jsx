import Image from "next/image"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center justify-center">
      <div className="w-full h-fit md:w-[70%] md:h-[495px] flex flex-col md:flex-row justify-between gap-x-16 px-4">
        <div className="flex flex-col justify-between  flex-1 gap-y-4 text-center md:text-left">
          <div>
            <p className="text-accent">ABOUT ME</p>
            <h3>I love <RoughNotation show={true} type='circle' color="#ff6962" strokeWidth={2} padding={[6,12,6,12]} >building stuff</RoughNotation> <span className="text-2xl">🧩</span></h3>
          </div>
          <p>
            <RoughNotationGroup show={true}>I started playing with computers when I was <RoughNotation type='highlight' iterations={1} color='#ffe7a0' multiline={true}>9 years-old.</RoughNotation> Since then, fueled by <RoughNotation type='highlight' iterations={1} color='#c1e1c1' multiline={true}>pure curiosity,</RoughNotation> I&apos;ve tinkered with all sorts of technologies. This led me to dabble in music production, sound engineering, video editing and other <RoughNotation type='highlight' iterations={1} color='#ffc0cb' multiline={true}>passion projects.</RoughNotation><br/><br/>After completing my bachelor&apos;s degree in International Business Management at <RoughNotation type='highlight' iterations={1} color='#f5e1fd' multiline={true} className='font-semibold' >Chulalongkorn University,</RoughNotation>  I discovered web development. I was quickly drawn in to learn more and became incredibly enthused with creating <RoughNotation type='highlight' iterations={1} color='#ffe7a0' multiline={true}>responsive  websites</RoughNotation> and offering <RoughNotation type='highlight' iterations={1} color='#c1e1c1' multiline={true}>smooth  user experiences.</RoughNotation><br/><br/>Currently, I&apos;m looking for opportunities as a <RoughNotation type='highlight' iterations={1} color='#ffc0cb' multiline={true}>Junior Front-End Developer,</RoughNotation> whilst <RoughNotation type='highlight' iterations={1} color='#ffe7a0' multiline={true}>continuing to learn more</RoughNotation> about back-end technologies and web development in general.
            </RoughNotationGroup>
          </p>
          <div className="flex items-center flex-col md:flex-row gap-4 w-full">
            <button className="button-dark flex-1 w-[70%]">View LinkedIn</button>
            <button className="button-outline flex-1 w-[70%]">View GitHub</button>
          </div>
        </div>
        <div className="w-[40%] h-full relative rounded-xl hidden md:block">
          <Image
          src='/../public/assets/setup.jpg'
          alt='/'
          fill={true}
          className='rounded-xl object-cover shadow-lg shadow-gray-400'
          />
        </div>
      </div>
    </div>
  )
}
