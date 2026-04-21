'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { colors } from '../../utils/colors'

interface ContactCardProps {
  icon: ReactNode
  text: string
  subtext: string
  description?: string
  link?: string
  index?: number
}

export default function ContactCard({ 
  icon, 
  text, 
  subtext, 
  description, 
  link,
  index = 0 
}: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        y: -3,
        borderColor: 'rgba(255, 255, 255, 0.12)',
      }}
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'clamp(1rem, 3vw, 1.5rem) clamp(0.75rem, 2vw, 1rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(0.5rem, 1.5vw, 0.75rem)',
        cursor: link ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
      }}
      onClick={link ? () => window.open(link) : undefined}
    >
      <div style={{
        fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
        color: colors.accent.primary,
      }}>
        {icon}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          color: 'var(--text-primary)', 
          fontWeight: 500, 
          fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
          marginBottom: '0.25rem' 
        }}>
          {text}
        </div>
        <div style={{ 
          color: colors.accent.primary, 
          fontWeight: 500, 
          fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)', 
          marginBottom: description ? '0.25rem' : 0
        }}>
          {subtext}
        </div>
        {description && (
          <div className="meta-text" style={{ 
            fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)' 
          }}>
            {description}
          </div>
        )}
      </div>
    </motion.div>
  )
}

