'use client'

import { motion } from 'framer-motion'
import SectionContainer from './ui/SectionContainer'
import SectionTitle from './ui/SectionTitle'
import { aboutData } from '../utils/data'
import { getIcon } from '../utils/iconMapper'
import { colors } from '../utils/colors'

const ABOUT_KEYWORDS = [
  'Louis Charles International',
  'Heriot-Watt University',
  'Keshav Memorial Institute of Technology',
  'PingFree Admin',
  'PingFree',
  'All Day Loans',
  'QuickCash Direct',
  'Microsoft Clarity',
  'Google Search Console',
  'Google Tag Manager',
  'Google Analytics',
  'GoHighLevel',
  'Pabbly',
  'MSc in Artificial Intelligence',
  'FastAPI',
  'Supabase',
  'MongoDB',
  'Next.js',
  'TypeScript',
  'New Relic',
  'Decarbeon',
  'AI',
  'machine learning',
  'ML',
  'LLMs',
  'Python',
  'React',
  'Node.js',
  '4+ years',
  'B.Tech',
  'CRM',
  'WhatsApp',
]

export default function About() {
  return (
    <SectionContainer id="about" backgroundColor={colors.background.secondary} className="section-surface about-section">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle title={aboutData.title} subtitle={aboutData.subtitle} />

        <div className="about-bento">
          {aboutData.cards.map((card, index) => {
            const isWide = Boolean((card as { wide?: boolean }).wide)
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`about-card${isWide ? ' about-card--wide' : ''}`}
                style={{
                  background: colors.background.card,
                  borderRadius: 16,
                  border: `1px solid ${colors.overlay.cardBorder}`,
                  padding: 'clamp(1.25rem, 4vw, 1.85rem)',
                  boxShadow: '0 1px 10px rgba(0, 0, 0, 0.32)',
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
                    opacity: 0.9,
                  }}
                />
                <h3
                  className="card-title"
                  style={{ marginBottom: '0.85rem', marginTop: 4, color: colors.text.primary, fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)' }}
                >
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
                  const sorted = [...ABOUT_KEYWORDS].sort((a, b) => b.length - a.length)
                  sorted.forEach((keyword) => {
                    if (card.highlight && keyword.toLowerCase() === card.highlight.toLowerCase()) return
                    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                    const regex = keyword.includes(' ') ? new RegExp(`(${escaped})`, 'gi') : new RegExp(`\\b(${escaped})\\b`, 'gi')
                    highlightedText = highlightedText.replace(
                      regex,
                      `<strong style="color: ${card.highlightColor || colors.accent.primary}; font-weight: 500;">$1</strong>`
                    )
                  })
                  return (
                    <p
                      key={pIndex}
                      style={{
                        marginBottom: pIndex < card.content.length - 1 ? '1rem' : 0,
                        color: colors.text.secondary,
                        lineHeight: 1.7,
                        fontSize: '0.9375rem',
                      }}
                      dangerouslySetInnerHTML={{ __html: highlightedText }}
                    />
                  )
                })}
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <h3
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(1.25rem, 3vw, 1.75rem)',
              color: colors.text.primary,
              fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
              fontWeight: 500,
            }}
          >
            What drives me
          </h3>
          <div className="about-values-grid">
            {aboutData.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                style={{
                  background: colors.background.card,
                  borderRadius: 14,
                  border: `1px solid ${colors.overlay.cardBorder}`,
                  padding: 'clamp(1.15rem, 3vw, 1.5rem)',
                  textAlign: 'center',
                  boxShadow: '0 1px 10px rgba(0, 0, 0, 0.32)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    margin: '0 auto 0.65rem',
                    borderRadius: 12,
                    background: `${value.color}14`,
                    border: `1px solid ${colors.overlay.cardBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    color: value.color,
                  }}
                >
                  {getIcon(value.icon)}
                </div>
                <h4 className="card-title" style={{ marginBottom: '0.45rem', color: colors.text.primary, fontSize: '1.05rem' }}>
                  {value.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: colors.text.secondary, lineHeight: 1.6, margin: 0 }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
