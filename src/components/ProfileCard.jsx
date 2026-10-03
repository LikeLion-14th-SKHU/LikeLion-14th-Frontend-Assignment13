export default function ProfileCard({ name, role, intro, skills, githubUrl }) {
  return (
    <article className="flex flex-col w-full max-w-[700px] h-fit gap-[60px] p-[50px] rounded-[30px] bg-white">
      <section className="flex flex-row items-center gap-[50px] w-full">
        <div className="size-[100px] shrink-0 rounded-full bg-[#FF6B35]" />
        <div className="flex flex-col gap-[20px] w-fit min-w-0">
          <h1 className="text-[48px] font-medium leading-tight break-all">{name}</h1>
          <p className="text-[32px] leading-tight">{role}</p>
        </div>
      </section>
      <p className="w-full text-[36px] leading-snug">{intro}</p>
      <ul className="flex flex-row flex-wrap gap-[30px] w-full">
        {skills.map((skill) => (
          <li
            key={skill}
            className="w-fit px-[40px] py-[10px] rounded-[20px] bg-[#00B2FF] text-white text-[32px]"
          >
            {skill}
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-end">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="w-fit px-[40px] py-[10px] rounded-[20px] bg-[#22C55E] text-black text-[32px] hover:brightness-95"
        >
          GitHub
        </a>
      </div>
    </article>
  )
}
