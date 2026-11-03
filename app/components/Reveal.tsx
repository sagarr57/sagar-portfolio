'use client'

import { motion } from 'framer-motion'
import { EASE_SOFT } from '../lib/motion'

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay, ease: EASE_SOFT }}
    >
      {children}
    </motion.div>
  )
}

/** Big uppercase heading where each line slides up from a mask. */
// The in-view trigger lives on the (unclipped) heading; masked lines inherit via variants.
const lineVariants = {
  hidden: { y: '110%' },
  shown: (i: number) => ({ y: 0, transition: { duration: 1, delay: i * 0.1, ease: EASE_SOFT } }),
}

export function MaskHeading({
  lines,
  className = 'h2',
  as = 'h2',
}: {
  lines: React.ReactNode[]
  className?: string
  as?: 'h2' | 'div'
}) {
  const Tag = as === 'h2' ? motion.h2 : motion.div
  return (
    <Tag className={className} initial="hidden" whileInView="shown" viewport={{ once: true, margin: '-10% 0px' }}>
      {lines.map((l, i) => (
        <span key={i} className="line-mask">
          <motion.span custom={i} variants={lineVariants}>
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
