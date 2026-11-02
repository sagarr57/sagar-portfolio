'use client'

import { useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { about } from '../data/portfolio'
import { Reveal } from './Reveal'
import Scramble from './Scramble'

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  const accent = children.startsWith('*')
  return (
    <motion.span className="word" style={{ opacity, color: accent ? 'var(--accent)' : undefined }}>
      {accent ? children.slice(1) : children}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = about.statement.split(' ')

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ marginBottom: 32, display: 'inline-flex' }}>
            <Scramble text="About" />
          </span>
        </Reveal>
        <p ref={ref} className="about-statement">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

      </div>
    </section>
  )
}
