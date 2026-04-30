'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { colors } from '../utils/colors'

const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string | null>(null)

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
    setActiveHref(href)
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
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
          border: '1px solid rgba(15, 23, 42, 0.09)',
          borderRadius: 18,
          boxShadow: '0 4px 24px rgba(15, 23, 42, 0.09), 0 1px 0 rgba(255, 255, 255, 0.95) inset',
          overflow: mobileOpen ? 'visible' : 'hidden',
        }}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          style={{
            margin: '0 auto',
            padding: '0.6rem clamp(0.85rem, 3vw, 1.25rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none',
              flexShrink: 0,
              zIndex: 2,
            }}
          >
            {/* Name */}
            <span
              className="header-brand"
              style={{
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.8vw, 0.9375rem)',
                background: 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}
            >
              Sagar Mamindla
            </span>
          </a>

          {/* Desktop nav */}
          <div
            className="header-nav-desktop"
            style={{
              display: 'none',
              gap: '0.15rem',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                style={{
                  position: 'relative',
                  padding: '0.45rem 0.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: activeHref === link.href ? colors.accent.primary : colors.text.secondary,
                  textDecoration: 'none',
                  borderRadius: 10,
                  transition: 'color 0.2s, background 0.2s',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.accent.primary
                  e.currentTarget.style.background = 'rgba(37,99,235,0.07)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = activeHref === link.href ? colors.accent.primary : colors.text.secondary
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: CTA + mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            {/* Hire Me button — desktop only */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className="header-hire-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                padding: '0.45rem 1rem',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#ffffff',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: 999,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                boxShadow: '0 2px 8px rgba(37,99,235,0.30)',
                transition: 'opacity 0.2s, transform 0.15s',
                whiteSpace: 'nowrap',
                minHeight: 0,
                minWidth: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.88'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Hire Me
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="header-nav-mobile-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                border: '1px solid rgba(15,23,42,0.10)',
                background: mobileOpen ? 'rgba(37,99,235,0.07)' : 'rgba(15,23,42,0.04)',
                color: colors.text.primary,
                cursor: 'pointer',
                borderRadius: 10,
                fontSize: '1.25rem',
                transition: 'background 0.2s',
                padding: 0,
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ borderTop: '1px solid rgba(15,23,42,0.07)', margin: '0 0.75rem' }} />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0.65rem 0.75rem 0.85rem',
                  gap: '0.1rem',
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    style={{
                      padding: '0.7rem 0.9rem',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: activeHref === link.href ? colors.accent.primary : colors.text.secondary,
                      textDecoration: 'none',
                      borderRadius: 10,
                      transition: 'background 0.15s, color 0.15s',
                      display: 'flex',
                      alignItems: 'center',
                      minHeight: 0,
                      justifyContent: 'flex-start',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(37,99,235,0.07)'
                      e.currentTarget.style.color = colors.accent.primary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = activeHref === link.href ? colors.accent.primary : colors.text.secondary
                    }}
                  >
                    {link.label}
                  </a>
                ))}

                {/* Hire Me in mobile menu */}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                  style={{
                    marginTop: '0.5rem',
                    padding: '0.75rem 0.9rem',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    textDecoration: 'none',
                    borderRadius: 12,
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 0,
                  }}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
