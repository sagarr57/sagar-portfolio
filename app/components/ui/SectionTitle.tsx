'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { colors } from '../../utils/colors'

interface SectionTitleProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vw, 4rem)' }}
    >
      <motion.h2
        className="section-title"
        style={{ marginBottom: '1rem', color: colors.text.primary }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          height: 3,
          background: colors.gradient.primary,
          borderRadius: 2,
          margin: '0 auto 1rem',
        }}
      />
      {subtitle && (
        <p style={{ maxWidth: 640, margin: '0 auto', color: colors.text.secondary }}>
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  )
}
