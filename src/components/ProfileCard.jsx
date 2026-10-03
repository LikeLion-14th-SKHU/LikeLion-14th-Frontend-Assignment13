import SkillTag from './SkillTag'

function ProfileCard() {
  const skills = ['React', 'Tailwind', 'Figma', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript',]

  return (
    <div className="flex w-[700px] flex-col gap-[60px] rounded-[30px] bg-white p-[50px]">
      <div className="flex w-full items-center gap-[50px]">
        <div className="h-[100px] w-[100px] shrink-0 rounded-full bg-[#ff7137]" />

        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">
            이우빈
          </h1>

          <p className="text-[32px]">
            Frontend Developer
          </p>
        </div>
      </div>

      <div className="w-full">
        <p className="text-4xl leading-tight">
          안녕하세요. 이우빈입니다.
          <br />
          잘 부탁드립니다.
        </p>
      </div>

      <div className="flex w-full flex-wrap gap-[30px]">
        {skills.map((skill, index) => (
          <SkillTag key={index}>
            {skill}
          </SkillTag>
        ))}
      </div>

      <div className="flex w-full justify-end">
        <button
          className="w-fit rounded-[20px] bg-emerald-500 px-10 py-2.5 text-[32px] hover:bg-emerald-600">
          GitHub
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
