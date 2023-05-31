import Image from "next/image"
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"

export default function Hero() {
  return (
    <div className="w-full h-screen text-center">
      <div className="w-full h-full mx-auto px-6 p-2 flex flex-col justify-center items-center gap-y-4 md:gap-y-6">
          <div className="flex gap-x-4 items-center justify-center ">
           <h1>Hi, I&apos;m <span className="text-accent">Kann</span></h1>
           <div className="w-[60px] h-[60px] md:w-[85px] md:h-[85px] relative">
            <Image
            src='/../public/assets/hello.png'
            alt='/'
            fill={true}
            style={{objectFit: "contain"}}
            />
           </div>
           
          </div>
          <h1>A Front-End Web Developer</h1>
          <p className="text-xl text-gray-600 ">I love crafting and creating <span className="text-2xl">🛠</span> I&apos;m a lifelong learner <span className="text-2xl">📚</span><br/>and a huge cat person <span className="text-2xl">🐈</span></p>
          <div className="flex items-center pt-4 gap-x-6 md:gap-x-8 text-xl md:text-2xl">
            <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110">
              <BsLinkedin />
            </div>
            <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110">
              <BsGithub />
            </div>
            <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110">
              <IoMailOutline />
            </div>
            <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110">
              <BsFillPersonLinesFill />
            </div>
          </div>

      </div>    
    </div>
  )
}
