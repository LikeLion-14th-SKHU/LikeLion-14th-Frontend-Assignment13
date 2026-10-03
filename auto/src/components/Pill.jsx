// 태그·버튼 공통 모양 (Figma: Hug Contents, Padding 40/10, Radius 20)
// inline-flex + shrink-0 + whitespace-nowrap → 내용 크기만큼만 차지
const base =
  'inline-flex shrink-0 items-center justify-center px-10 py-2.5 rounded-[20px] text-[32px] leading-normal whitespace-nowrap'

export function Tag({ children }) {
  return <span className={`${base} bg-tag-blue text-white`}>{children}</span>
}

export function LinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} bg-github-green text-black transition hover:brightness-95`}
    >
      {children}
    </a>
  )
}
