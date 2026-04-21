'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb'
import { HiArrowDown } from 'react-icons/hi'
import { colors } from '../utils/colors'

const PORTRAIT = '/images/sagar-mamindla-portrait.jpeg'

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  const contactItems: {
    icon: ReactNode
    text: string
    subtext: string
    href?: string
  }[] = [
    { icon: <IoMailOutline />, text: 'Email', subtext: 'sagar05.ms@gmail.com', href: 'mailto:sagar05.ms@gmail.com' },
    { icon: <IoCallOutline />, text: 'Call', subtext: '+971 553084546', href: 'tel:+971553084546' },
    { icon: <IoLocationOutline />, text: 'Location', subtext: 'Dubai, UAE' },
  ]

  const socialLinks = [
    { icon: <TbBrandGithub />, link: 'https://github.com/sagarr57', label: 'GitHub' },
    { icon: <TbBrandLinkedin />, link: 'https://linkedin.com/in/sagar-mamindla', label: 'LinkedIn' },
  ]

  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        paddingTop: 'clamp(88px, 14vw, 104px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2rem)',
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
            'radial-gradient(ellipse 80% 50% at 85% 15%, rgba(66, 165, 245, 0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 10% 80%, rgba(100, 181, 246, 0.08) 0%, transparent 45%)',
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

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.45 }}
            style={{
              margin: 0,
              color: colors.text.secondary,
              maxWidth: '34rem',
              lineHeight: 1.65,
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
            }}
          >
            With{' '}
            <span style={{ color: colors.accent.primary, fontWeight: 600 }}>4+ years of experience</span>, I build
            AI-powered products and full-stack applications end to end.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}
          >
            {['4+ years experience', 'Fintech & AI products', 'Dubai and remote'].map((point) => (
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
            transition={{ delay: 0.3 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
            }}
          >
            {contactItems.map((item, i) => {
              const cardStyle = {
                background: colors.background.card,
                borderRadius: 12,
                border: `1px solid ${colors.overlay.cardBorder}`,
                padding: '0.65rem 1rem',
                display: 'inline-flex' as const,
                alignItems: 'center' as const,
                gap: '0.5rem',
                textDecoration: 'none' as const,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                maxWidth: '100%' as const,
                minHeight: 0,
                minWidth: 0,
                color: 'inherit' as const,
              }
              const inner = (
                <>
                  <span style={{ color: colors.accent.primary, fontSize: '1.125rem', flexShrink: 0 }}>{item.icon}</span>
                  <div style={{ minWidth: 0, textAlign: 'left' }}>
                    <div
                      style={{
                        fontSize: '0.6875rem',
                        color: colors.text.muted,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.text}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        color: colors.text.primary,
                        wordBreak: 'break-word',
                      }}
                    >
                      {item.subtext}
                    </div>
                  </div>
                </>
              )
              if (item.href) {
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={cardStyle}
                  >
                    {inner}
                  </motion.a>
                )
              }
              return (
                <motion.div key={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={cardStyle}>
                  {inner}
                </motion.div>
              )
            })}
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
                padding: '0.7rem 1.35rem',
                borderRadius: 10,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9375rem',
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
                padding: '0.7rem 1.35rem',
                borderRadius: 10,
                border: `1px solid ${colors.overlay.cardBorder}`,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9375rem',
                minHeight: 44,
              }}
            >
              Download resume
            </motion.a>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
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
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    border: `1px solid ${colors.overlay.cardBorder}`,
                    background: colors.background.card,
                    color: colors.accent.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
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
            /* Definite width only (no %): grid `auto` + `width:100%` collapsed the portrait to 0 wide */
            width: 'clamp(260px, 88vw, 400px)',
            margin: '0 auto',
            aspectRatio: '4 / 5',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 28px 56px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(66, 165, 245, 0.15)',
          }}
          className="hero-portrait-wrap"
        >
          <Image
            src={PORTRAIT}
            alt="Sagar Mamindla — AI engineer and full-stack developer"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 400px"
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
