"use client"
import { Fade, Slide } from "react-awesome-reveal"
import SkillItem from "./SkillItem"

export default function Skills() {
  return (
    <div id='skills' className="w-full flex justify-center my-24 scroll-mt-56">
      <Fade duration={3000} triggerOnce={true}>
        <div className="flex flex-col items-start  gap-y-10">
          <div className="self-center text-center">
            <Slide cascade delay={200} direction="down" damping={0.1} triggerOnce={true}>
              <p className="text-accent mb-2">SKILLS & TOOLS</p>
              <h3>What I Can Do</h3>
            </Slide>
          </div>
          <div className="grid grid-cols-3 grid-rows-4 md:grid-cols-6 md:grid-rows-2 gap-6">
            <Slide cascade direction="down" damping={0.1} triggerOnce={true}>
              <SkillItem name='html'/>
              <SkillItem name='css' />
              <SkillItem name='javascript' />
              <SkillItem name='typescript' />
              <SkillItem name='react' />
              <SkillItem name='tailwind' />
            </Slide>
            <Slide cascade direction="down" damping={0.1} triggerOnce={true}>
              <SkillItem name='sass' />
              <SkillItem name='node.js' />
              <SkillItem name='next.js' />
              <SkillItem name='firebase' />
              <SkillItem name='git' />
              <SkillItem name='github' />
            </Slide>

          </div>
        </div>
      </Fade>
      
    </div>

  )
}
