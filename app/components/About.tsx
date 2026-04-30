'use client'

import { motion } from 'framer-motion'
import SectionContainer from './ui/SectionContainer'
import SectionTitle from './ui/SectionTitle'
import { aboutData } from '../utils/data'
import { colors } from '../utils/colors'

const ABOUT_KEYWORDS = [
  'Heriot-Watt University',
  'QuickCash Direct',
  'All Day Loans',
  'New Relic',
  'FastAPI',
  'LLMs',
  'Node.js',
  'Python',
  'Next.js',
  'React',
  'open to relocation',
]

export default function About() {
  return (
    <SectionContainer id="about" backgroundColor="#dbeafe" className="section-surface about-section">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle title={aboutData.title} subtitle={aboutData.subtitle} />

        <div className="about-bento">
          {aboutData.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="about-card"
              style={{
                background: colors.background.card,
                borderRadius: 16,
                border: `1px solid ${colors.overlay.cardBorder}`,
                padding: 'clamp(1.35rem, 4vw, 1.9rem)',
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
                  background: card.special
                    ? `linear-gradient(90deg, ${colors.accent.dark}, ${colors.accent.secondary})`
                    : `linear-gradient(90deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                  opacity: 0.85,
                }}
              />
              <h3
                className="card-title"
                style={{
                  marginBottom: '0.75rem',
                  marginTop: 4,
                  color: colors.text.primary,
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                }}
              >
                {card.title}
              </h3>
              {card.content.map((paragraph, pIndex) => {
                let highlightedText = paragraph
                if (card.highlight) {
                  highlightedText = highlightedText.replace(
                    new RegExp(`(${card.highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
                    `<strong style="color: ${card.highlightColor || colors.accent.primary}; font-weight: 600;">$1</strong>`
                  )
                }
                const sorted = [...ABOUT_KEYWORDS].sort((a, b) => b.length - a.length)
                sorted.forEach((keyword) => {
                  if (card.highlight && keyword.toLowerCase() === card.highlight.toLowerCase()) return
                  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                  const regex = keyword.includes(' ') ? new RegExp(`(${escaped})`, 'gi') : new RegExp(`\\b(${escaped})\\b`, 'gi')
                  highlightedText = highlightedText.replace(
                    regex,
                    `<strong style="color: ${colors.accent.primary}; font-weight: 500;">$1</strong>`
                  )
                })
                return (
                  <p
                    key={pIndex}
                    style={{
                      marginBottom: 0,
                      color: colors.text.secondary,
                      lineHeight: 1.72,
                      fontSize: '0.9375rem',
                    }}
                    dangerouslySetInnerHTML={{ __html: highlightedText }}
                  />
                )
              })}
            </motion.article>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
