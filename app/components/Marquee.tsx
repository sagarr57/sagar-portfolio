'use client'

import { useRef } from 'react'
import {
  motion,
  MotionValue,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion'
import { marquee } from '../data/portfolio'

type RowProps = { items: string[]; base: number; outline?: boolean; factor: MotionValue<number>; skew: MotionValue<number>; active: boolean }

/** One infinite row. Speed/direction follow the shared scroll velocity; paused while off screen. */
function Row({ items, base, outline, factor, skew, active }: RowProps) {
  const x = useMotionValue(0)
  const dir = useRef(1)

  useAnimationFrame((_, delta) => {
    if (!active) return
    let move = dir.current * base * (delta / 1000)
    const f = factor.get()
    if (f < 0) dir.current = -1
    else if (f > 0) dir.current = 1
    move += dir.current * move * f
    x.set(wrap(-50, 0, x.get() + move))
  })

  const tx = useTransform(x, (v) => `${v}%`)
  return (
    <motion.div className={`marquee-track ${outline ? 'outline-row' : ''}`} style={{ x: tx, skewX: skew }}>
      {[...items, ...items].map((m, i) => (
        <span className="marquee-item" key={i} aria-hidden={i >= items.length}>
          {m}
        </span>
      ))}
    </motion.div>
  )
}

const half = Math.ceil(marquee.length / 2)
const top = marquee.slice(0, half)
const bottom = marquee.slice(half)

/** Two-row marquee whose speed, direction and skew react to scroll velocity. */
export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref)
  // One velocity pipeline shared by both rows.
  const { scrollY } = useScroll()
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const factor = useTransform(vel, [-1500, 0, 1500], [-5, 0, 5], { clamp: false })
  const skew = useTransform(vel, [-2000, 2000], [8, -8])

  return (
    <div className="marquee" aria-label="Technologies" ref={ref}>
      <Row items={top} base={-2.2} factor={factor} skew={skew} active={active} />
      <Row items={bottom} base={2.2} factor={factor} skew={skew} active={active} outline />
    </div>
  )
}
