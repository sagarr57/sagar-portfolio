'use client'

import { motion } from 'framer-motion'
import SectionContainer from './ui/SectionContainer'
import SectionTitle from './ui/SectionTitle'
import { aboutData } from '../utils/data'
import { getIcon } from '../utils/iconMapper'
import { colors } from '../utils/colors'

export default function About() {
  return (
    <SectionContainer id="about" backgroundColor={colors.background.secondary}>
      <SectionTitle title={aboutData.title} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(1rem, 4vw, 1.5rem)',
          marginBottom: 'clamp(2rem, 6vw, 4rem)',
        }}
      >
        {aboutData.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -2 }}
            style={{
              background: colors.background.card,
              borderRadius: 12,
              border: `1px solid ${colors.overlay.cardBorder}`,
              padding: 'clamp(1.25rem, 4vw, 1.75rem)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}
          >
            <h3 className="card-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>
              {card.title}
            </h3>
            {card.content.map((paragraph, pIndex) => {
              let highlightedText = paragraph
              if (card.highlight) {
                highlightedText = highlightedText.replace(
                  new RegExp(`(${card.highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
                  `<strong style="color: ${card.highlightColor || colors.accent.primary}">$1</strong>`
                )
              }
              const highlightKeywords = ['Louis Charles International', 'Decarbeon', 'New Relic', 'AI', 'machine learning', 'ML', '4 years', 'Heriot-Watt University', 'MSc', 'Next.js', 'React', 'MongoDB', 'Python', 'LLMs']
              highlightKeywords.sort((a, b) => b.length - a.length)
              highlightKeywords.forEach((keyword) => {
                if (card.highlight && keyword.toLowerCase() === card.highlight.toLowerCase()) return
                const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                const regex = keyword.includes(' ') ? new RegExp(`(${escaped})`, 'gi') : new RegExp(`\\b(${escaped})\\b`, 'gi')
                highlightedText = highlightedText.replace(regex, `<strong style="color: ${card.highlightColor || colors.accent.primary}; font-weight: 600;">$1</strong>`)
              })
              return (
                <p
                  key={pIndex}
                  style={{ marginBottom: pIndex < card.content.length - 1 ? '1rem' : 0, color: colors.text.secondary }}
                  dangerouslySetInnerHTML={{ __html: highlightedText }}
                />
              )
            })}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h3 style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2rem)', color: colors.text.primary }}>
          What Drives Me
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(1rem, 3vw, 1.25rem)',
          }}
        >
          {aboutData.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -2 }}
              style={{
                background: colors.background.card,
                borderRadius: 12,
                border: `1px solid ${colors.overlay.cardBorder}`,
                padding: 'clamp(1.25rem, 4vw, 1.5rem)',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ fontSize: '1.75rem', color: value.color, marginBottom: '0.5rem' }}>
                {getIcon(value.icon)}
              </div>
              <h4 className="card-title" style={{ marginBottom: '0.5rem', color: colors.text.primary }}>
                {value.title}
              </h4>
              <p style={{ fontSize: '0.9375rem', color: colors.text.secondary }}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  )
}
