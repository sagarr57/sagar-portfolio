'use client'

import { motion } from 'framer-motion'
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb'
import { HiArrowDown } from 'react-icons/hi'
import { colors } from '../utils/colors'

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  const contactItems = [
    { icon: <IoMailOutline />, text: 'Email', subtext: 'sagar05.ms@gmail.com', link: 'mailto:sagar05.ms@gmail.com' },
    { icon: <IoCallOutline />, text: 'Call', subtext: '+971 553084546', link: 'tel:+971553084546' },
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
        paddingTop: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 2.5rem)',
        background: colors.background.primary,
        position: 'relative',
      }}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '1200px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1.25rem, 3vh, 2rem)',
          }}
        >
          <div>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{ marginBottom: '0.5rem', color: colors.text.primary }}
            >
              Sagar Mamindla
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ marginBottom: 0, color: colors.accent.primary, fontWeight: 600 }}
            >
              AI Engineer & Full-Stack Developer
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ margin: 0, color: colors.text.secondary, maxWidth: '540px', lineHeight: 1.65 }}
          >
            Crafting Intelligent Solutions at the Intersection of AI and Software Engineering
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ margin: 0, color: colors.text.secondary, maxWidth: '540px', lineHeight: 1.65 }}
          >
            With <span style={{ color: colors.accent.primary, fontWeight: 600 }}>above 4 years of experience</span>, I transform complex problems into elegant AI-powered applications.
          </motion.p>

          {/* Contact chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
                {contactItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link || '#'}
                    onClick={item.link ? (e) => { e.preventDefault(); window.open(item.link); } : undefined}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: colors.background.card,
                      borderRadius: '12px',
                      border: `1px solid ${colors.overlay.cardBorder}`,
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      maxWidth: '100%',
                    }}
                  >
                    <span style={{ color: colors.accent.primary, fontSize: '1.125rem', flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '0.75rem', color: colors.text.muted }}>{item.text}</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500, color: colors.text.primary, wordBreak: 'break-all' }}>{item.subtext}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

          {/* CTA buttons + social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: colors.gradient.primary,
                    color: '#fff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 4px 14px rgba(66,165,245,0.3)',
                  }}
                >
                  Let&apos;s Build Something
                </motion.a>
                <motion.a
                  href="/resume/sagar-mamindla-resume.pdf"
                  download
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: colors.background.card,
                    color: colors.text.primary,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    border: `1px solid ${colors.overlay.cardBorder}`,
                    fontWeight: 500,
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                >
                  Download Resume
                </motion.a>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {socialLinks.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '8px',
                        border: `1px solid ${colors.overlay.cardBorder}`,
                        background: colors.background.card,
                        color: colors.accent.primary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                        textDecoration: 'none',
                      }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
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
        }}
      >
          <span style={{ fontSize: '0.8125rem' }}>Explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <HiArrowDown size={20} />
          </motion.div>
      </motion.div>
    </section>
  )
}
