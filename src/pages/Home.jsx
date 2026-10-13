import Hero from '../components/home/Hero.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import PublicationsSection from '../components/home/PublicationsSection.jsx'
import AchievementsSection from '../components/home/AchievementsSection.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import JourneySection from '../components/home/JourneySection.jsx'
import SkillsSection from '../components/home/SkillsSection.jsx'
import CertificationsSection from '../components/home/CertificationsSection.jsx'
import ContactSection from '../components/home/ContactSection.jsx'
import '../styles/home.css'

function Home({ onNavigate }) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <FeaturedProjects onNavigate={onNavigate} />
      <PublicationsSection />
      <AchievementsSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}

export default Home
