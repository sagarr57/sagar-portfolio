'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb'
import { HiArrowDown } from 'react-icons/hi'
import { colors } from '../utils/colors'

const PORTRAIT = '/images/sagar-mamindla-portrait.jpeg'

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <TbBrandGithub />, link: 'https://github.com/sagarr57', label: 'GitHub' },
    { icon: <TbBrandLinkedin />, link: 'https://linkedin.com/in/sagar-mamindla', label: 'LinkedIn' },
  ]

  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        paddingTop: 'clamp(104px, 16vw, 124px)',
        paddingRight: 'clamp(1rem, 4vw, 1.75rem)',
        paddingBottom: 'clamp(1.35rem, 4vw, 2.4rem)',
        paddingLeft: 'clamp(1rem, 4vw, 1.75rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: `linear-gradient(180deg, ${colors.background.primary} 0%, ${colors.background.secondary} 55%, ${colors.background.tertiary} 100%)`,
        position: 'relative',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 50% at 85% 15%, rgba(59, 130, 246, 0.1) 0%, transparent 52%), radial-gradient(ellipse 60% 40% at 10% 80%, rgba(125, 211, 252, 0.08) 0%, transparent 48%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="hero-inner-grid"
        style={{
          flex: 1,
          display: 'grid',
          alignItems: 'center',
          gap: 'clamp(1.75rem, 4vw, 3rem)',
          maxWidth: 1120,
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          gridTemplateColumns: '1fr',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1rem, 2.5vh, 1.5rem)',
          }}
          className="hero-copy hero-copy-block"
        >
          <div>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.45 }}
              style={{
                marginBottom: '0.35rem',
                color: colors.text.primary,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Sagar Mamindla
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.45 }}
              style={{
                margin: 0,
                color: colors.accent.primary,
                fontWeight: 600,
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                letterSpacing: '-0.02em',
              }}
            >
              AI Engineer & Full-Stack Developer
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
            style={{
              margin: 0,
              color: colors.text.secondary,
              maxWidth: '34rem',
              lineHeight: 1.65,
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
            }}
          >
            Crafting intelligent solutions at the intersection of AI and software engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}
          >
            {['4+ years experience', 'Fintech & AI products'].map((point) => (
              <span
                key={point}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 999,
                  border: `1px solid ${colors.overlay.cardBorder}`,
                  background: colors.background.card,
                  color: colors.text.secondary,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                }}
              >
                {point}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: colors.gradient.primary,
                color: '#fff',
                padding: '0.65rem 1.15rem',
                borderRadius: 10,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.875rem',
                boxShadow: '0 6px 20px rgba(66,165,245,0.28)',
                minHeight: 44,
              }}
            >
              Get in touch
            </motion.a>
            <motion.a
              href="/resume/sagar-mamindla-resume.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: colors.background.card,
                color: colors.text.primary,
                padding: '0.65rem 1.15rem',
                borderRadius: 10,
                border: `1px solid ${colors.overlay.cardBorder}`,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.875rem',
                minHeight: 44,
              }}
            >
              Download resume
            </motion.a>
            <div style={{ display: 'flex', gap: '0.45rem' }}>
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    border: `1px solid ${colors.overlay.cardBorder}`,
                    background: colors.background.card,
                    color: colors.accent.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            position: 'relative',
            width: 'clamp(200px, 62vw, 300px)',
            margin: '0 auto',
            aspectRatio: '4 / 5',
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.12)',
          }}
          className="hero-portrait-wrap"
        >
          <Image
            src={PORTRAIT}
            alt="Sagar Mamindla — AI engineer and full-stack developer"
            fill
            priority
            sizes="(max-width: 768px) 62vw, 300px"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        onClick={scrollToNext}
        whileHover={{ y: 4 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          color: colors.accent.primary,
          cursor: 'pointer',
          flexShrink: 0,
          border: 'none',
          background: 'transparent',
          font: 'inherit',
          padding: '0.5rem',
          marginTop: '0.5rem',
        }}
        aria-label="Scroll to about section"
      >
        <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>Explore</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} aria-hidden>
          <HiArrowDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  )
}
