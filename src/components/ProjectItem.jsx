import Carousel from "./Carousel"
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
export default function ProjectItem({data}) {
  return (
    <div className='bg-white w-full md:w-[90%] lg:w-[70%]  py-10 rounded-xl shadow-lg flex flex-col lg:flex-row justify-center items-center gap-x-10 gap-y-10'>
          <Carousel data={data.imgs}/>
          <div className='px-6 md:w-[450px] lg:w-[300px] text-center flex flex-col justify-between gap-y-4'>
            <h4 className='text-xl uppercase'>{data.name}<span className="ml-2 text-2xl">{data.emoji}</span></h4>
            <p className='text-lg text-gray-500'>{data.desc}</p>
            <div className='flex gap-x-4 font-semibold w-full justify-center'>
              {data.tech.map((item, idx) => {
                return (
                  <div key={idx} className='bg-white p-2 drop-shadow-xl rounded-lg'>{item}</div>
                )
              })}
            </div>
            <div className='flex justify-center gap-x-4 md:gap-x-10 lg:gap-x-0 lg:justify-between w-full font-semibold text-lg mt-4'>
              <a href={data.github} target="_blank" className='flex items-center hover:text-blue-500 transition-all duration-300 gap-x-2'>Code<BsGithub className='text-3xl'/>
              </a>
              <a href={data.demo} target="_blank" className='flex items-center  hover:text-blue-500 transition-all duration-300 gap-x-2'>Live Demo<FiExternalLink className='text-3xl'/>
              </a>
            </div>
          </div>
        </div>
  )
}
