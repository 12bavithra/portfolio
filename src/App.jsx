import { useEffect, useState } from 'react'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import Project from './pages/Project.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [sectionId, setSectionId] = useState(null)
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  function scrollToId(id) {
    const element = document.getElementById(id)

    if (!element) {
      return
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    element.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  function onNavigate(page, section, projectId) {
    if (section && page === 'home' && currentPage === 'home') {
      scrollToId(section)
      return
    }

    setCurrentPage(page)
    setSectionId(section || null)
    setSelectedProjectId(page === 'project' ? projectId : null)

    if (!section) {
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    if (currentPage !== 'home' || !sectionId) {
      return
    }

    const id = sectionId
    const frame = window.requestAnimationFrame(() => {
      scrollToId(id)
      setSectionId(null)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [currentPage, sectionId])

  function renderPage() {
    if (currentPage === 'home') {
      return <Home onNavigate={onNavigate} />
    }

    if (currentPage === 'about') {
      return <About />
    }

    if (currentPage === 'work') {
      return <Work />
    }

    if (currentPage === 'project') {
      return <Project projectId={selectedProjectId} onNavigate={onNavigate} />
    }

    if (currentPage === 'skills') {
      return <Skills />
    }

    if (currentPage === 'contact') {
      return <Contact />
    }

    return <Home onNavigate={onNavigate} />
  }

  return (
    <Layout currentPage={currentPage} onNavigate={onNavigate}>
      {renderPage()}
    </Layout>
  )
}

export default App
