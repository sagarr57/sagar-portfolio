import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Doctrine from './components/Doctrine'
import Preloader from './components/Preloader'

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Doctrine />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </>
  )
}
