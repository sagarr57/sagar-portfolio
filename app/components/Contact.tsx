import { profile } from '../data/portfolio'
import Magnetic from './Magnetic'
import { MaskHeading, Reveal } from './Reveal'
import Scramble from './Scramble'

export default function Contact() {
  const cards = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', value: 'in/sagar-mamindla', href: profile.linkedin },
    { label: 'GitHub', value: 'github.com/sagarr57', href: profile.github },
  ]
  return (
    <section id="contact" className="contact">
      <div className="hero-glow" style={{ left: '50%', top: '10%', transform: 'translateX(-50%)' }} aria-hidden />
      <div className="container" style={{ position: 'relative' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="eyebrow">
              <Scramble text="Contact" />
            </span>
          </div>
        </Reveal>
        <MaskHeading className="display contact-title" lines={["Let's", <em key="b">build.</em>]} />
        <Reveal delay={0.2}>
          <p className="contact-sub">{profile.contactLine}</p>
          <div className="contact-actions">
            <Magnetic>
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Start a conversation <span className="arrow">↗</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.phoneHref} className="btn btn-ghost">
                {profile.phone}
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <div className="contact-cards">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a className="contact-card shimmer" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span>{c.label}</span>
                <b>{c.value}</b>
                <i className="arrow" aria-hidden>
                  ↗
                </i>
              </a>
            </Reveal>
          ))}
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Sagar Mamindla — designed &amp; built from scratch with Next.js, WebGL shaders, Framer Motion &amp; Lenis.</span>
          <nav>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.resume} download>
              Résumé
            </a>
          </nav>
        </footer>
      </div>
      <div className="giant" aria-hidden>
        SAGAR
      </div>
    </section>
  )
}
