export default function ProfileCard({ name, role, introduction, tags, githubUrl }) {
  return (
    <article
      aria-label={`${name} 프로필 카드`}
      data-testid="profile-card"
      className="flex w-full flex-col gap-[60px] overflow-hidden rounded-[30px] bg-white p-[50px] text-black"
    >
      <header data-testid="profile-header" className="flex w-full items-center gap-[50px]">
        <div aria-hidden="true" className="h-[100px] w-[100px] shrink-0 rounded-full bg-avatar" />
        <div data-testid="profile-identity" className="flex min-w-0 flex-1 flex-col gap-[20px]">
          <h1 className="w-full text-[48px] leading-[58px] font-normal wrap-anywhere">{name}</h1>
          <p className="w-full text-[32px] leading-[39px] wrap-anywhere">{role}</p>
        </div>
      </header>

      <p data-testid="introduction" className="w-full text-[36px] leading-[44px] whitespace-pre-wrap wrap-anywhere">
        {introduction}
      </p>

      <ul aria-label="기술 태그" data-testid="tags" className="flex w-full flex-wrap items-start gap-[30px]">
        {tags.map((tag, index) => (
          <li
            key={`${index}-${tag}`}
            className="flex h-auto w-fit max-w-full shrink-0 items-center justify-center rounded-[20px] bg-tag px-[40px] py-[10px] text-[32px] leading-[39px] text-white wrap-anywhere"
          >
            {tag}
          </li>
        ))}
      </ul>

      <footer data-testid="button-area" className="flex w-full flex-col items-end gap-[10px]">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-auto w-fit max-w-full shrink-0 items-center justify-center rounded-[20px] bg-github px-[40px] py-[10px] text-[32px] leading-[39px] transition-colors hover:bg-github/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          GitHub
        </a>
      </footer>
    </article>
  )
}
