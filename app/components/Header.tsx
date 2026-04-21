'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { colors } from '../utils/colors'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <div
      className="header-float-root"
      style={{
        position: 'fixed',
        top: 'clamp(10px, 2.2vw, 16px)',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 'clamp(12px, 3vw, 28px)',
        paddingRight: 'clamp(12px, 3vw, 28px)',
        pointerEvents: 'none',
      }}
    >
      <motion.header
        className="header-float-bar"
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: 1180,
          background: 'rgba(26, 39, 64, 0.88)',
          backdropFilter: 'blur(18px) saturate(1.35)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.35)',
          border: `1px solid ${colors.overlay.cardBorder}`,
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35), 0 1px 0 rgba(255, 255, 255, 0.05) inset',
          overflow: mobileOpen ? 'visible' : 'hidden',
        }}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          style={{
            margin: '0 auto',
            padding: '0.65rem clamp(0.85rem, 3vw, 1.35rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            position: 'relative',
          }}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="header-brand"
            style={{
              fontWeight: 500,
              fontSize: 'clamp(0.9375rem, 2vw, 1rem)',
              color: colors.text.primary,
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              flexShrink: 0,
              zIndex: 2,
              paddingRight: '0.25rem',
            }}
          >
            Sagar Mamindla
          </a>

          <div
            className="header-nav-desktop"
            style={{
              display: 'none',
              gap: '0.2rem',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                style={{
                  padding: '0.45rem 0.7rem',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: colors.text.secondary,
                  textDecoration: 'none',
                  borderRadius: 10,
                  transition: 'color 0.2s, background 0.2s',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.accent.primary
                  e.currentTarget.style.background = colors.overlay.blue
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.text.secondary
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="header-nav-mobile-btn"
            style={{
              position: 'absolute',
              right: 'clamp(0.65rem, 2.5vw, 1.1rem)',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              border: 'none',
              background: 'transparent',
              color: colors.text.primary,
              cursor: 'pointer',
              borderRadius: 10,
              fontSize: '1.5rem',
            }}
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              style={{
                overflow: 'hidden',
                borderTop: `1px solid ${colors.overlay.cardBorder}`,
                background: 'rgba(15, 23, 42, 0.98)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0.35rem 0.75rem 0.85rem',
                  gap: '0.15rem',
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    style={{
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: colors.text.secondary,
                      textDecoration: 'none',
                      borderRadius: 10,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.overlay.blue
                      e.currentTarget.style.color = colors.accent.primary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = colors.text.secondary
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
