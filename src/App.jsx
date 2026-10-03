import ProfileCard from './components/ProfileCard'

export default function App() {
  return (
    <main className="min-h-screen bg-[#D9D9D9] flex items-center justify-center p-6">
      <ProfileCard
        name="김서령"
        role="Frontend Developer"
        intro="자기소개를 입력하세요"
        skills={['React', 'Tailwind', 'Figma', 'JavaScript']}
        githubUrl="https://github.com/"
      />
    </main>
  )
}
