import Image from "next/image"

export default function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center justify-center">
      <div className="w-[70%] h-[475px] flex justify-between gap-x-16">
        <div className="flex flex-col justify-between  flex-1 gap-y-4">
          <div>
            <p className="text-accent">ABOUT ME</p>
            <p className="font-bold text-2xl">I love building stuff <span className="text-2xl">🧩</span></p>
          </div>
          <p>I started playing with computers when I was 9 years-old. Since then, fueled by pure curiosity, I&apos;ve tinkered with all sorts of technologies. This led me to dabble in music production, sound engineering, video editing and other passion projects.</p>
          <p>After completing my bachelor&apos;s degree in International Business Management at Chulalongkorn University, I let my passion for creating guide me and discovered web development. I was quickly drawn in to learn more and became incredibly enthused with creating responsive websites and offering smooth user experiences.</p>
          <p>Currently, I&apos;m looking for opportunities as a Junior Front-End Developer, whilst continuing to learn more about back-end technologies and web development in general.</p>
          <div className="flex  gap-x-4 w-[70%]">
            <button className="button-dark flex-1">View LinkedIn</button>
            <button className="button-outline flex-1">View GitHub</button>
          </div>
        </div>
        <div className="w-[40%] h-full relative rounded-xl ">
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
