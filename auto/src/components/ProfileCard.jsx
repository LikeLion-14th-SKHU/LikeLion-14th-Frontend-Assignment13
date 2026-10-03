import { LinkButton, Tag } from './Pill'

export default function ProfileCard({ name, role, intro, skills, githubUrl }) {
  return (
    // 카드: Vertical, Gap 60, Padding 50, Width 716 (Fixed), Radius 30
    <article className="flex w-full max-w-[716px] flex-col items-start gap-[60px] rounded-[30px] bg-white p-[50px]">
      {/* 프로필 영역: Horizontal, Gap 50, 가운데 정렬, Fill Container */}
      <header className="flex w-full items-center justify-center gap-[50px]">
        {/* 원형 도형: Ellipse 100×100, Fill #FF7137 */}
        <div aria-hidden="true" className="size-[100px] shrink-0 rounded-full bg-brand-orange" />
        {/* 이름/직무: Vertical, Gap 20, Fill Container */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-5 break-words">
          <h1 className="w-full text-5xl leading-normal">{name}</h1>
          <p className="w-full text-[32px] leading-normal">{role}</p>
        </div>
      </header>

      {/* 소개: Padding 10, Fill Container */}
      <section className="flex w-full items-center justify-center p-2.5">
        <p className="min-w-0 flex-1 text-4xl leading-normal break-words">{intro}</p>
      </section>

      {/* 기술 태그: Wrap, Gap 30, Fill Container */}
      <ul className="flex w-full flex-wrap content-center items-center gap-[30px]">
        {skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>

      {/* 버튼 영역: Vertical, 오른쪽 정렬, Fill Container */}
      <footer className="flex w-full flex-col items-end justify-center">
        <LinkButton href={githubUrl}>GitHub</LinkButton>
      </footer>
    </article>
  )
}
