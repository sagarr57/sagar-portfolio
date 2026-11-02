'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

/** Text that "decodes" from random glyphs when it scrolls into view. Re-scrambles on hover. */
export default function Scramble({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const [out, setOut] = useState(text)
  const raf = useRef(0)

  const run = () => {
    cancelAnimationFrame(raf.current)
    const start = performance.now()
    const dur = 700 + text.length * 18
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      const reveal = Math.floor(p * text.length)
      setOut(
        text
          .split('')
          .map((ch, i) => (ch === ' ' || i < reveal ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(''),
      )
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    if (inView && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) run()
    return () => cancelAnimationFrame(raf.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref} className={className} onMouseEnter={run} aria-label={text}>
      <span aria-hidden>{out}</span>
    </span>
  )
}
