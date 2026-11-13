import Counter from './components/Counter'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import SkillsList from './components/SkillsList'
import TaskList from './components/TaskList'

function App() {
  return (
    <>
      <Header />
      <ProfileCard
        name="Pavithra Athukorala"
        role="Full Stack Developer"
        description="I work as a full-stack developer.
                    Basically, I build both sides of websites and web apps —
                    everything from what users see and click on, to the
                    behind-the-scenes servers and databases that make it all work."/>
      <ProfileCard
        name="Yashoman Wickramasinghe"
        role="Full Stack Developer"
        description="I work as a full-stack developer.
                    Basically, I build both sides of websites and web apps —
                    everything from what users see and click on, to the
                    behind-the-scenes servers and databases that make it all work."
      />
      <SkillsList />
      <Counter/>
      <TaskList/>
    </>
  )
}

export default App