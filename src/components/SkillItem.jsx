import Image from "next/image"

export default function SkillItem({ name }) {
  return (
    <div className="flex flex-col gap-y-4 items-center">
    <div className="item">
      <div className="h-[2.3rem] w-[2.3rem] relative">
        <Image
        src={`/../public/assets/skills/${name}.png`}
        alt='/'
        fill={true}
        style={{objectFit: "contain"}}
        loading="lazy"
        />
      </div>
    </div>
    <p className="uppercase text-gray-600 font-semibold text-sm">{name}</p>
  </div>
  )
}
