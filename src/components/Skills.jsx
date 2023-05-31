import Skill from "./Skill"

export default function Skills() {
  return (
    <div className="w-full flex justify-center my-24">
      <div className="flex flex-col items-start  gap-y-10">
        <div className="self-center text-center">
          <p className="text-accent mb-2">SKILLS & TOOLS</p>
          <h3>What I Can Do</h3>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 md:grid-cols-6 md:grid-rows-2 gap-6">
          <Skill name='html'/>
          <Skill name='css' />
          <Skill name='javascript' />
          <Skill name='typescript' />
          <Skill name='react' />
          <Skill name='tailwind' />
          <Skill name='sass' />
          <Skill name='node.js' />
          <Skill name='next.js' />
          <Skill name='firebase' />
          <Skill name='git' />
          <Skill name='github' />
        </div>
      </div>
    </div>

  )
}
