import ProfileCard from './components/ProfileCard'

const profile = {
  name: '문정우',
  role: 'Frontend Developer',
  intro: '안녕하세요. 접니다.',
  skills: ['React', 'Tailwind', 'Figma', 'Java Script'],
  githubUrl: 'https://github.com/moonjw727?tab=repositories',
}

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-canvas p-4 font-sans text-black">
      <ProfileCard {...profile} />
    </main>
  )
}

export default App
