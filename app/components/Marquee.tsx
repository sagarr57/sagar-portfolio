'use client'

import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion'
import { marquee } from '../data/portfolio'

/** Infinite marquee whose speed, direction and skew react to scroll velocity. */
function Row({ items, base, outline }: { items: string[]; base: number; outline?: boolean }) {
  const x = useMotionValue(0)
  const { scrollY } = useScroll()
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const factor = useTransform(vel, [-1500, 0, 1500], [-5, 0, 5], { clamp: false })
  const skew = useTransform(vel, [-2000, 2000], [8, -8])
  const dir = useRef(1)

  useAnimationFrame((_, delta) => {
    let move = dir.current * base * (delta / 1000)
    const f = factor.get()
    if (f < 0) dir.current = -1
    else if (f > 0) dir.current = 1
    move += dir.current * move * f
    x.set(wrap(-50, 0, x.get() + move))
  })

  const tx = useTransform(x, (v) => `${v}%`)
  const doubled = [...items, ...items]
  return (
    <motion.div className={`marquee-track ${outline ? 'outline-row' : ''}`} style={{ x: tx, skewX: skew }}>
      {doubled.map((m, i) => (
        <span className="marquee-item" key={i} aria-hidden={i >= items.length}>
          {m}
        </span>
      ))}
    </motion.div>
  )
}

export default function Marquee() {
  const half = Math.ceil(marquee.length / 2)
  const ref = useRef(null)
  return (
    <div className="marquee" aria-label="Technologies" ref={ref}>
      <Row items={marquee.slice(0, half)} base={-2.2} />
      <Row items={marquee.slice(half)} base={2.2} outline />
    </div>
  )
}
