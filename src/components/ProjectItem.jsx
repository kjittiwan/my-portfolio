import Carousel from "./Carousel"
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
export default function ProjectItem({data}) {
  return (
    <div className='bg-white w-[70%]  py-10 rounded-xl shadow-lg flex justify-center gap-x-10'>
          <Carousel data={data.imgs}/>
          <div className='w-[300px] text-center flex flex-col justify-between'>
            <h4 className='text-xl uppercase'>{data.name}</h4>
            <p className='text-lg text-gray-500'>{data.desc}</p>
            <div className='flex gap-x-4 font-semibold w-full justify-center'>
              {data.tech.map((item, idx) => {
                return (
                  <div key={idx} className='bg-white p-2 drop-shadow-xl rounded-lg'>{item}</div>
                )
              })}
            </div>
            <div className='flex w-full justify-between font-semibold text-lg mt-4'>
              <a href={data.github} target="_blank" className='flex items-center gap-x-2 hover:text-blue-500 transition-all duration-300'>View Code<BsGithub className='text-3xl'/>
              </a>
              <a href={data.demo} target="_blank" className='flex items-center gap-x-2 hover:text-blue-500 transition-all duration-300'>Live Demo<FiExternalLink className='text-3xl'/>
              </a>
            </div>
          </div>
        </div>
  )
}
