'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { colors } from '../utils/colors'
import { education } from '../utils/educationData'

function InitialBadge({ label }: { label: string }) {
  return (
    <div
      aria-hidden
      style={{
        width: 52,
        height: 52,
        borderRadius: 12,
        background: colors.overlay.blueStrong,
        border: `1px solid ${colors.overlay.cardBorder}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '0.8125rem',
        color: colors.accent.primary,
        flexShrink: 0,
        letterSpacing: '-0.02em',
      }}
    >
      {label}
    </div>
  )
}

export default function Education() {
  const badges = ['HW', 'KMIT']

  return (
    <section
      id="education"
      className="section-surface"
      style={{
        padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
        background: colors.background.secondary,
        position: 'relative',
      }}
    >
      <div className="section-glow" aria-hidden />
      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.25rem)' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>
            Education
          </h2>
          <div style={{ width: 48, height: 3, background: colors.gradient.primary, borderRadius: 2, margin: '0 auto 1rem' }} />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
            Formal training in AI and computer science
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((entry, index) => (
            <motion.article
              key={entry.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: colors.background.card,
                borderRadius: 12,
                border: `1px solid ${colors.overlay.cardBorder}`,
                borderLeft: `4px solid ${colors.accent.primary}`,
                padding: 'clamp(1.25rem, 4vw, 1.75rem)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <InitialBadge label={badges[index] ?? '•'} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <FaGraduationCap style={{ color: colors.accent.primary, flexShrink: 0 }} aria-hidden />
                  <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700, color: colors.text.primary }}>{entry.institution}</h3>
                </div>
                <p style={{ margin: '0 0 0.5rem', fontWeight: 600, color: colors.text.secondary, fontSize: '0.9375rem' }}>{entry.degree}</p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: colors.text.muted }}>
                  {entry.dates}
                  {entry.location ? ` · ${entry.location}` : ''}
                </p>
                {entry.grade ? (
                  <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: colors.text.secondary }}>
                    <span style={{ color: colors.text.muted }}>Grade: </span>
                    {entry.grade}
                  </p>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
