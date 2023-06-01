import SkillItem from "./SkillItem"

export default function Skills() {
  return (
    <div className="w-full flex justify-center my-24">
      <div className="flex flex-col items-start  gap-y-10">
        <div className="self-center text-center">
          <p className="text-accent mb-2">SKILLS & TOOLS</p>
          <h3>What I Can Do</h3>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 md:grid-cols-6 md:grid-rows-2 gap-6">
          <SkillItem name='html'/>
          <SkillItem name='css' />
          <SkillItem name='javascript' />
          <SkillItem name='typescript' />
          <SkillItem name='react' />
          <SkillItem name='tailwind' />
          <SkillItem name='sass' />
          <SkillItem name='node.js' />
          <SkillItem name='next.js' />
          <SkillItem name='firebase' />
          <SkillItem name='git' />
          <SkillItem name='github' />
        </div>
      </div>
    </div>

  )
}
