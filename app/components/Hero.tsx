'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb'
import { HiArrowDown } from 'react-icons/hi'
import { IoLocationOutline } from 'react-icons/io5'
import { colors } from '../utils/colors'

const PORTRAIT = '/images/sagar-mamindla-portrait.jpeg'

const PROOF_BADGES = [
  { value: '4+', label: 'Years Engineering' },
  { value: 'LLM', label: 'NLP & AI Apps' },
  { value: '10+', label: 'Shipped Projects' },
  { value: 'MSc', label: 'AI · Heriot-Watt' },
]

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <TbBrandGithub size={18} />, link: 'https://github.com/sagarr57', label: 'GitHub' },
    { icon: <TbBrandLinkedin size={18} />, link: 'https://linkedin.com/in/sagar-mamindla', label: 'LinkedIn' },
  ]

  return (
    <section id="hero">
      <div className="hero-glow hero-glow--left" aria-hidden />
      <div className="hero-glow hero-glow--right" aria-hidden />

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
            gap: 'clamp(0.9rem, 2.2vw, 1.2rem)',
          }}
          className="hero-copy hero-copy-block"
        >
          {/* Location / Relocation badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.02, duration: 0.4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.8rem',
              borderRadius: 999,
              border: `1px solid ${colors.accent.primary}50`,
              background: `${colors.accent.primary}12`,
              color: colors.accent.secondary,
              fontSize: '0.8125rem',
              fontWeight: 500,
              alignSelf: 'flex-start',
              letterSpacing: '0.01em',
            }}
          >
            <IoLocationOutline size={13} />
            Dubai, UAE · Open to relocation
          </motion.div>

          <div>
            <motion.h1
              className="hero-title font-display"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.07, duration: 0.45 }}
              style={{
                marginBottom: '0.4rem',
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
              }}
            >
              Sagar Mamindla
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.13, duration: 0.45 }}
              style={{
                margin: 0,
                color: colors.accent.primary,
                fontWeight: 600,
                fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                letterSpacing: '-0.02em',
              }}
            >
              AI Engineer & Full-Stack Developer
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.19, duration: 0.45 }}
            style={{
              margin: 0,
              color: colors.text.secondary,
              maxWidth: '34rem',
              lineHeight: 1.68,
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
            }}
          >
            Building production-grade AI applications with real-time data processing and scalable backend systems.{' '}
            Deploying LLM-powered fintech products to real users.
          </motion.p>

          {/* Proof bar — 4 stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="hero-proof-bar"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
          >
            {PROOF_BADGES.map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0.5rem 0.9rem',
                  borderRadius: 10,
                  border: `1px solid ${colors.overlay.cardBorder}`,
                  background: colors.background.card,
                  gap: '0.1rem',
                  minWidth: 72,
                }}
              >
                <span
                  style={{
                    color: colors.accent.primary,
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    lineHeight: 1,
                    fontFamily: 'var(--font-display-stack)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {badge.value}
                </span>
                <span
                  style={{
                    color: colors.text.muted,
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    textAlign: 'center',
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34 }}
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
              whileHover={{ y: -2, boxShadow: `0 6px 20px ${colors.accent.primary}40` }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: colors.accent.primary,
                color: colors.accentForeground,
                padding: '0.65rem 1.35rem',
                borderRadius: 10,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem',
                minHeight: 44,
                boxShadow: `0 2px 12px ${colors.accent.primary}30`,
                letterSpacing: '-0.01em',
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
                padding: '0.65rem 1.35rem',
                borderRadius: 10,
                border: `1px solid ${colors.overlay.cardBorder}`,
                fontWeight: 500,
                textDecoration: 'none',
                fontSize: '0.9rem',
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
                  whileHover={{ scale: 1.08, borderColor: colors.accent.primary }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    border: `1px solid ${colors.overlay.cardBorder}`,
                    background: colors.background.card,
                    color: colors.accent.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            position: 'relative',
            margin: '0 auto',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.5), 0 0 48px ${colors.accent.primary}18`,
          }}
          className="hero-portrait-wrap"
        >
          <Image
            src={PORTRAIT}
            alt="Sagar Mamindla — AI engineer and backend developer"
            fill
            priority
            sizes="(max-width: 768px) 40vw, 300px"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="hero-scroll-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
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
