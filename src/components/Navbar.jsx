"use client"

import Link from "next/link"
import { HiOutlineMenu } from 'react-icons/hi'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useState, useEffect } from "react"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleActive = () => {
      if (window.scrollY >= 90) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
    window.addEventListener('scroll', handleActive)
  }, []) 
  return (
    <div className={`fixed w-full h-20 z-[100] ${isActive ? 'bg-primary shadow-xl' : 'bg-transparent'} `}>
      <div className="flex justify-between items-center w-full h-full px-6 md:px-16">
        <h3 className="md:text-4xl">kann.</h3>
        <div>
          <ul className="hidden md:flex gap-x-6 font-semibold text-lg">
              <li className="hover:text-accent">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-accent">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:text-accent">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-accent">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-accent">
                <a href="">Contact</a>
              </li>

          </ul>
          <div onClick={toggleNav} className="md:hidden">
            <HiOutlineMenu className="text-2xl"/>
          </div>
        </div>
      </div>
      <div className={isOpen 
        ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70 ease-in duration-300' 
        : '' }>
        <div className={`${isOpen ? 'right-0 ' : '-right-[100%]'} fixed top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-6 ease-in duration-300 flex items-center justify-center `}>
          <div onClick={toggleNav}>
            <BsArrowLeftShort className="text-4xl absolute top-6 left-6"/>
          </div>
          <div>
            <ul className="flex flex-col gap-y-6 font-semibold text-xl text-center">
              <Link href='/#home' onClick={toggleNav}>
                <li className="hover:text-accent">Home</li>
              </Link>
              <Link href='/#about' onClick={toggleNav}>
                <li className="hover:text-accent">About</li>
              </Link>
              <Link href='/#skills' onClick={toggleNav}>
                <li className="hover:text-accent">Skills</li>
              </Link>
              <Link href='/#projects' onClick={toggleNav}>
                <li className="hover:text-accent">Projects</li>
              </Link>
              <Link href='/' onClick={toggleNav}>
                <li className="hover:text-accent">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
