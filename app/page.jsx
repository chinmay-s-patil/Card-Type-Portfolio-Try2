import NavDots from './components/NavDots'
import Header from './components/Header'
import ExperienceNormalized from './sections/ExperienceNormalized'
import SkillsNormalized from './sections/SkillsNormalized'
import Footer from './components/Footer'
import './page.css'

const sectionsMeta = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' }
]

export default function Page() {
  return (
    <>
      <Header />
      <NavDots sections={sectionsMeta} />
      
      <main id="sections" className="scroll-container" aria-label="Portfolio sections">
        <section id="experience" className="section">
          <ExperienceNormalized />
        </section>
        
        <section id="skills" className="section">
          <SkillsNormalized />
        </section>
        
        <section id="contact" className="section" style={{ minHeight: 'auto', height: 'auto', padding: 0 }}>
          <Footer />
        </section>
      </main>
    </>
  )
}