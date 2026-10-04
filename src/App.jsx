import ProfileCard from './ProfileCard.jsx'

const initialProfile = {
  name: '김석환',
  role: 'Frontend Developer',
  introduction: '해야 할 일을 미루기보다 미리 끝내고, 확보한 시간을 새로운 것을 시도하는 개발자입니다',
  tags: ['React', 'java', 'Spring', 'Javascript'],
  githubUrl: 'https://github.com/',
}

export default function App() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-canvas px-4 py-[50px] font-sans">
      <div data-testid="preview" className="w-full max-w-[700px]">
        <ProfileCard {...initialProfile} />
      </div>
    </main>
  )
}
