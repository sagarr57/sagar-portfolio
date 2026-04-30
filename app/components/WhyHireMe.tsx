'use client'

import { motion } from 'framer-motion'
import { FaBrain, FaRocket, FaCode } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { colors } from '../utils/colors'

const bullets = [
  {
    icon: <FaCode size={20} />,
    title: 'Real-world production systems',
    description:
      'Every project I list has been shipped and used by real people — US/UK fintech platforms, observability tools at New Relic, AI automation in production. Not demos.',
    color: '#3b82f6',
  },
  {
    icon: <FaBrain size={20} />,
    title: 'AI depth + full-stack breadth',
    description:
      'LLMs, NLP pipelines, and voice AI on the backend — combined with Next.js, React, and Node.js on the frontend. I cover the entire stack, end to end.',
    color: '#7B2CBF',
  },
  {
    icon: <FaRocket size={20} />,
    title: 'End-to-end delivery mindset',
    description:
      'From architecture to deployment: I design, build, ship, and iterate. Scalable APIs, clean frontends, CI/CD pipelines — no half-finished implementations.',
    color: '#10B981',
  },
  {
    icon: <TbWorld size={20} />,
    title: 'Cross-domain, fast learner',
    description:
      '4 years across enterprise (New Relic), XR consulting, and Dubai fintech SaaS. MSc AI from Heriot-Watt. I adapt fast and bring cross-domain perspective.',
    color: '#F59E0B',
  },
]

export default function WhyHireMe() {
  return (
    <section
      id="why-hire-me"
      style={{
        padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
        background: '#ffe4e6',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>
            What I Bring
          </h2>
          <div
            style={{
              width: 80,
              height: 3,
              background: 'linear-gradient(90deg, #e11d48, #f43f5e, transparent)',
              borderRadius: 9999,
              margin: '0 auto 1.1rem',
            }}
          />
          <p style={{ color: colors.text.secondary, maxWidth: 520, margin: '0 auto', fontSize: '1rem' }}>
            Beyond ticking skill boxes — here is why I stand out as a hire.
          </p>
        </motion.div>

        <div className="why-hire-grid">
          {bullets.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                background: colors.background.card,
                borderRadius: 16,
                border: `1px solid ${colors.overlay.cardBorder}`,
                padding: 'clamp(1.35rem, 3.5vw, 1.75rem)',
                boxShadow: '0 2px 12px rgba(15, 23, 42, 0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: item.color,
                  opacity: 0.9,
                }}
              />
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}35`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  marginBottom: '1rem',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  marginBottom: '0.55rem',
                  color: colors.text.primary,
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  lineHeight: 1.35,
                  letterSpacing: '-0.015em',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: colors.text.secondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
