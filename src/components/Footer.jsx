import { BsLinkedin, BsGithub } from "react-icons/bs"
import { IoMail } from "react-icons/io5"

export default function Footer() {
  return (
    <div className="w-full bg-content py-8 px-16 text-primary flex justify-between items-center">
      <p>&copy; 2023 <span className="text-2xl font-bold text-white">kann.</span> All rights reserved.</p>
      <div className="flex gap-x-6 items-center">
        <a href="https://www.linkedin.com/in/kann-jittiwan/" target="_blank">
          <BsLinkedin className="text-2xl hover:scale-110 transition-all duration-300"/>
        </a>
        <a href="https://github.com/kjittiwan" target="_blank">
          <BsGithub className="text-2xl hover:scale-110 transition-all duration-300"/>
        </a>
        <a href="mailto: kann.jittiwan@gmail.com">
          <IoMail className="text-2xl hover:scale-110 transition-all duration-300"/>
        </a>
      </div>
      
    </div>
  )
}
