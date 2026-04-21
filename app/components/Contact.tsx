'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import SectionWithGradient from './ui/SectionWithGradient'
import { colors } from '../utils/colors'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields')
      return
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Failed to send message')
      setSuccessMessage("Message sent! I'll get back to you soon.")
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setErrorMessage('Failed to send. Please try again or email directly.')
    }
  }

  const contactItems = [
    { icon: <IoMailOutline />, title: 'Email', text: 'sagar05.ms@gmail.com', link: 'mailto:sagar05.ms@gmail.com', description: 'Drop me a line' },
    { icon: <IoCallOutline />, title: 'Call', text: '+971 553084546', link: 'tel:+971553084546', description: 'Available for calls' },
    { icon: <IoLocationOutline />, title: 'Location', text: 'Dubai, UAE', description: 'Open to remote work' },
  ]

  return (
    <SectionWithGradient id="contact" variant="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.25rem)' }}
      >
        <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>
          Let&apos;s Build Something Intelligent
        </h2>
        <div
          style={{
            width: 48,
            height: 2,
            background: colors.accent.primary,
            borderRadius: 2,
            margin: '0 auto 1rem',
          }}
        />
        <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
          Whether you need an AI engineer or full-stack developer, I&apos;m here to bring your vision to life.
        </p>
      </motion.div>

      <div
        className="contact-cards"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0.75rem',
          marginBottom: 'clamp(1.25rem, 3vw, 1.75rem)',
          width: '100%',
          maxWidth: 980,
          marginInline: 'auto',
        }}
      >
        {contactItems.map((item, index) => {
          const cardStyle = {
            background: colors.background.card,
            borderRadius: 12,
            border: `1px solid ${colors.overlay.cardBorder}`,
            padding: 'clamp(0.8rem, 2.4vw, 1rem)',
            textAlign: 'center' as const,
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            gap: '0.35rem',
            boxShadow: '0 1px 10px rgba(0, 0, 0, 0.32)',
            cursor: item.link ? 'pointer' : 'default',
            width: '100%',
            minWidth: 0,
            maxWidth: '100%',
            textDecoration: 'none',
          }

          const content = (
            <>
              <div style={{ fontSize: '1.3rem', color: colors.accent.primary }}>{item.icon}</div>
              <div style={{ width: '100%', minWidth: 0, wordBreak: 'break-word' }}>
                <div style={{ fontWeight: 500, fontSize: '0.875rem', color: colors.text.primary }}>{item.title}</div>
                <div style={{ fontWeight: 500, fontSize: '0.8125rem', color: colors.accent.primary }}>{item.text}</div>
                <div style={{ fontSize: '0.75rem', color: colors.text.muted }}>{item.description}</div>
              </div>
            </>
          )

          if (item.link) {
            return (
              <motion.a
                key={index}
                href={item.link}
                aria-label={`${item.title}: ${item.text}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                style={cardStyle}
              >
                {content}
              </motion.a>
            )
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -2 }}
              style={cardStyle}
            >
              {content}
            </motion.div>
          )
        })}
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        style={{
          background: colors.background.card,
          borderRadius: 12,
          border: `1px solid ${colors.overlay.cardBorder}`,
          padding: 'clamp(1rem, 3vw, 1.25rem)',
          maxWidth: 500,
          width: '100%',
          minWidth: 0,
          margin: '0 auto',
          boxShadow: '0 1px 10px rgba(0, 0, 0, 0.32)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h3 style={{ marginBottom: '0.4rem', fontSize: '1.125rem', color: colors.text.primary }}>Start a Conversation</h3>
          <p style={{ color: colors.text.secondary, fontSize: '0.875rem' }}>
            Tell me about your project and let&apos;s explore how we can work together.
          </p>
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem',
              border: `1px solid ${colors.overlay.cardBorder}`,
              borderRadius: 8,
              fontSize: '0.9375rem',
              background: colors.background.tertiary,
              color: colors.text.primary,
            }}
          />
        </div>
        <div style={{ marginBottom: '0.75rem' }}>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem',
              border: `1px solid ${colors.overlay.cardBorder}`,
              borderRadius: 8,
              fontSize: '0.9375rem',
              background: colors.background.tertiary,
              color: colors.text.primary,
            }}
          />
        </div>
        <div style={{ marginBottom: '0.75rem' }}>
          <textarea
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem',
              border: `1px solid ${colors.overlay.cardBorder}`,
              borderRadius: 8,
              fontSize: '0.9375rem',
              background: colors.background.tertiary,
              color: colors.text.primary,
              resize: 'vertical',
              minHeight: 88,
            }}
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          style={{
            width: '100%',
            padding: '0.62rem 1rem',
            background: colors.accent.primary,
            color: colors.accentForeground,
            border: 'none',
            borderRadius: 8,
            fontSize: '0.9375rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: 'none',
          }}
        >
          Send Message <FaPaperPlane size={14} />
        </motion.button>
        <p style={{ color: colors.text.muted, textAlign: 'center', marginTop: '0.65rem', fontSize: '0.8125rem' }}>
          Prefer email? Reach me directly at{' '}
          <a href="mailto:sagar05.ms@gmail.com" style={{ color: colors.accent.primary, textDecoration: 'none', fontWeight: 500 }}>
            sagar05.ms@gmail.com
          </a>
        </p>
        {successMessage && <p style={{ color: colors.status.success, textAlign: 'center', marginTop: '1rem', fontSize: '0.9375rem' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: colors.status.error, textAlign: 'center', marginTop: '1rem', fontSize: '0.9375rem' }}>{errorMessage}</p>}
      </motion.form>
    </SectionWithGradient>
  )
}
