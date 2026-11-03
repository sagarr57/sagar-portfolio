'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import { EASE_SOFT } from '../lib/motion'

/** Counts up to `to` when scrolled into view. Writes to the DOM directly — no React re-render per frame. */
export default function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, {
      duration: 1.8,
      ease: EASE_SOFT,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('en-US')
      },
    })
    return () => c.stop()
  }, [inView, to])

  return <span ref={ref}>0</span>
}
