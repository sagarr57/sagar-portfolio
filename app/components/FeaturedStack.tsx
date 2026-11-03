'use client'

import { useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import type { FeaturedProject } from './Work'
import Tags from './Tags'

const RINGS = [90, 66, 42]

function Visual({ p }: { p: FeaturedProject }) {
  const hue = p.color ?? 'var(--accent)'
  return (
    <div className="stack-visual" aria-hidden>
      <div className="viz">
        <div className="viz-orb" style={{ width: '70%', height: '70%', right: '-15%', top: '-10%', background: hue, opacity: 0.35 }} />
        <div className="viz-orb" style={{ width: '45%', height: '45%', left: '5%', bottom: '10%', background: '#ff6a00', opacity: 0.18 }} />
      </div>
      <div className="viz-rings">
        {RINGS.map((s, i) => (
          <span
            key={s}
            style={
              {
                width: `${s}%`,
                aspectRatio: '1',
                animationDuration: `${30 + i * 14}s`,
                animationDirection: i % 2 ? 'reverse' : 'normal',
                '--c': i === 1 ? 'var(--green)' : hue,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      {p.code && (
        <pre className="viz-code">
          {p.code.map((l, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: l }} />
          ))}
        </pre>
      )}
      {p.metric && (
        <div className="metric-big">
          <b>{p.metric.value}</b>
          <span>{p.metric.label}</span>
        </div>
      )}
    </div>
  )
}

function StackCard({ p, i, n, progress }: { p: FeaturedProject; i: number; n: number; progress: MotionValue<number> }) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - i) * 0.035])
  const dim = useTransform(progress, [i / n, (i + 1) / n], [1, i === n - 1 ? 1 : 0.5])
  const [first, ...rest] = p.title.split(' — ')[0].split(' ')
  return (
    <div className="stack-card" style={{ top: `calc(var(--stack-top) + ${i} * var(--stack-step))` }}>
      <motion.article className="stack-inner shimmer" style={{ scale }}>
        <span className="stk-accent" style={{ background: `linear-gradient(90deg, transparent, ${p.color ?? 'var(--accent)'}, transparent)` }} />
        <motion.div className="stack-copy" style={{ opacity: dim }}>
          <div className="stack-meta">
            <span className="idx">0{i + 1}</span>
            <span>{p.category}</span>
            <span>{p.year}</span>
          </div>
          <h3>
            <span className="grad-text">{first}</span> {rest.join(' ')}
          </h3>
          <p>{p.tagline}</p>
          {p.highlights && (
            <div className="hl">
              {p.highlights.map((h) => (
                <div key={h.l}>
                  <b>{h.v}</b>
                  <span>{h.l}</span>
                </div>
              ))}
            </div>
          )}
          <div className="stack-foot">
            <Tags items={p.stack} />
            {p.link && (
              <a className="btn btn-ghost" href={p.link.href} target="_blank" rel="noreferrer" style={{ height: 44 }}>
                {p.link.label} <span className="arrow">↗</span>
              </a>
            )}
          </div>
        </motion.div>
        <Visual p={p} />
      </motion.article>
    </div>
  )
}

/** Featured projects as sticky cards that stack, shrink and dim as you scroll. */
export default function FeaturedStack({ projects }: { projects: FeaturedProject[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return (
    <div className="stack" ref={ref}>
      {projects.map((p, i) => (
        <StackCard key={p.slug} p={p} i={i} n={projects.length} progress={scrollYProgress} />
      ))}
    </div>
  )
}
