'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', background: '#0a0f1a', overflowX: 'hidden' }}>
      <a
        href="#about"
        className="skip-link"
        style={{
          position: 'absolute',
          left: '1rem',
          top: '0.75rem',
          zIndex: 200,
          padding: '0.5rem 1rem',
          background: '#1a2740',
          color: '#fff',
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.875rem',
          textDecoration: 'none',
          transform: 'translateY(-200%)',
          transition: 'transform 0.2s',
        }}
        onFocus={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.transform = 'translateY(-200%)'
        }}
      >
        Skip to content
      </a>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
