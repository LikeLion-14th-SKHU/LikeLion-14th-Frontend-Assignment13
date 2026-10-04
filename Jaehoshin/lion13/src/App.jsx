// Figma 플러그인으로 생성한 코드 수치를 참고함
export default function App() {
  return (
    <div className="min-h-screen bg-[#D9D9D9] flex items-center justify-center py-40 px-4">
      <div className="flex flex-col w-full max-w-[750px] gap-[60px] p-[50px] rounded-[20px] bg-white">
        <div className="flex flex-col gap-[54px] pb-[27px] w-full">
          <div className="flex items-center gap-[50px] w-full">
            <div className="w-[100px] h-[100px] rounded-full bg-[#01B6FF] shrink-0" />
            <div className="flex flex-col gap-[19px] flex-1">
              <p className="text-5xl">신재호</p>
              <p className="text-[32px]">Frontend Developer</p>
            </div>
          </div>
          <p className="text-4xl">자기소개를 입력하세요</p>
        </div>

        <div className="flex flex-wrap gap-[30px] pr-[47px] w-full">
          {["React", "Tailwind", "Figma", "JavaScript"].map((skill) => (
            <div
              key={skill}
              className="px-10 py-3.5 rounded-[20px] bg-[#01B6FF] text-white text-[32px]"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="flex justify-end w-full">
          <div className="px-10 py-2.5 rounded-[20px] bg-[#24CB72] text-4xl">
            GitHub
          </div>
        </div>
      </div>
    </div>
  );
}
