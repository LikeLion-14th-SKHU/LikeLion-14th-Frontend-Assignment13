const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#D9D9D9] p-[50px]">
      <div className="flex flex-col items-start w-[700px] bg-white p-[50px] gap-[60px] overflow-hidden rounded-[30px]">
        <div className="flex items-center self-stretch gap-[50px]">
          <div className="w-[100px] h-[100px] shrink-0 rounded-full bg-[#FF6B35]" />
          <div className="flex flex-1 flex-col items-start gap-5">
            <span className="text-black text-5xl" >
              정희정희정
            </span>
            <span className="text-black text-[32px]" >
              Frontend Developer
            </span>
          </div>
        </div>
        <span className="self-stretch text-black text-4xl" >
          자아아아아기소오오개
        </span>
        <div className="flex flex-wrap items-center self-stretch gap-[30px]">
          <button className="flex flex-col shrink-0 items-start bg-[#01B6FF] text-left py-[11px] px-10 rounded-[20px] border-0">
            <span className="text-white text-[32px]" >
              React
            </span>
          </button>
          <button className="flex flex-col shrink-0 items-start bg-[#01B6FF] text-left py-[11px] px-10 rounded-[20px] border-0">
            <span className="text-white text-[32px]" >
              Tailwind
            </span>
          </button>
          <button className="flex flex-col shrink-0 items-start bg-[#01B6FF] text-left py-[11px] px-10 rounded-[20px] border-0">
            <span className="text-white text-[32px]" >
              Figma
            </span>
          </button>
          <button className="flex flex-col shrink-0 items-start bg-[#01B6FF] text-left py-[11px] px-10 rounded-[20px] border-0">
            <span className="text-white text-[32px]" >
              JavaScript
            </span>
          </button>
        </div>
        <div className="flex flex-col items-end self-stretch">
          <button className="flex flex-col items-start bg-[#24CB72] text-left py-2.5 px-10 rounded-[20px] border-0">
            <span className="text-black text-[32px]" >
              GitHub
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
