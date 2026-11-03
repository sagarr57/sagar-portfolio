'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { doctrine } from '../data/portfolio'
import { EASE_OUT as ease, rafWhileVisible } from '../lib/motion'

/** Pixelated CRT static drawn on a tiny canvas and scaled up. */
function Static() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d')!
    const w = (c.width = 96), h = (c.height = 54)
    const img = ctx.createImageData(w, h)
    const px = img.data
    for (let i = 3; i < px.length; i += 4) px[i] = 255 // alpha is constant — set once
    let frame = 0
    // ~20fps static is plenty; loop only runs while the canvas is on screen.
    return rafWhileVisible(c, () => {
      if (frame++ % 3) return
      for (let i = 0; i < px.length; i += 4) {
        const v = Math.random() * 255
        px[i] = v
        px[i + 1] = v * 0.62
        px[i + 2] = v * 0.2
      }
      ctx.putImageData(img, 0, 0)
    })
  }, [])
  return <canvas ref={ref} className="dt-noise" aria-hidden />
}

function Typed({ text }: { text: string }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    setN(0)
    const id = setInterval(() => setN((v) => (v >= text.length ? (clearInterval(id), v) : v + 1)), 28)
    return () => clearInterval(id)
  }, [text])
  return (
    <span className="dt-typed">
      {text.slice(0, n)}
      <i />
    </span>
  )
}

export default function Doctrine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const [idx, setIdx] = useState(0)
  const n = doctrine.length

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setIdx(Math.min(n - 1, Math.max(0, Math.floor(v * n))))
  })

  const overlay = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.45, 0.75])
  const bigScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 270])
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const step = doctrine[idx]

  return (
    <section className="dt-root" ref={ref} style={{ '--steps': n } as React.CSSProperties} aria-label="How I work">
      <div className="dt-sticky">
        <div className="dt-right" aria-hidden>
          <Static />
          <motion.div className="dt-overlay" style={{ opacity: overlay }} />
          <motion.div className="dt-ring" style={{ rotate: ringRotate }}>
            <span />
            <span />
            <span />
          </motion.div>
          <motion.div className="dt-big" style={{ scale: bigScale }}>
            <AnimatePresence initial={false}>
              <motion.span
                key={idx}
                initial={{ y: '40%', opacity: 0, filter: 'blur(12px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: '-40%', opacity: 0, filter: 'blur(12px)' }}
                transition={{ duration: 0.6, ease }}
              >
                0{idx + 1}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="dt-left">
          <span className="eyebrow">How I work</span>
          <div className="dt-swap">
          <AnimatePresence initial={false}>
            <motion.div
              key={idx}
              className="dt-panel"
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease }}
            >
              <span className="dt-step">
                0{idx + 1} / 0{n}
              </span>
              <h2 className="dt-title">
                {step.title}
                <em>
                  <span className="grad-text">{step.accent}</span>
                </em>
              </h2>
              <Typed text={step.proof} />
            </motion.div>
          </AnimatePresence>
          </div>
          <div className="dt-dots">
            {doctrine.map((d, i) => (
              <span key={d.title} className={i === idx ? 'on' : ''} />
            ))}
            <div className="dt-bar">
              <motion.i style={{ width: bar }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
