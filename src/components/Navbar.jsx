import Link from "next/link"
import { HiOutlineMenu } from 'react-icons/hi'
export default function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-30">
      <div className="flex justify-between items-center w-full h-full px-4 md:px-16">
        <h3 className="md:text-4xl">kann.dev</h3>
        <div>
          <ul className="hidden md:flex gap-x-4 font-semibold text-lg">
            <Link href='/'>
              <li>Home</li>
            </Link>
            <Link href='/'>
              <li>About</li>
            </Link>
            <Link href='/'>
              <li>Skills</li>
            </Link>
            <Link href='/'>
              <li>Projects</li>
            </Link>
            <Link href='/'>
              <li>Contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <HiOutlineMenu className="text-2xl"/>
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500">

        </div>
      </div>
    </div>
  )
}
