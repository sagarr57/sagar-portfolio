'use client'

import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { projects, categories, type Project } from '../data/portfolio'
import { MaskHeading, Reveal } from './Reveal'
import Scramble from './Scramble'

const ease = [0.16, 1, 0.3, 1] as const

function Visual({ p }: { p: Project }) {
  const hue = p.color ?? 'var(--accent)'
  return (
    <div className="stack-visual" aria-hidden>
      <div className="viz">
        <div className="viz-orb" style={{ width: '70%', height: '70%', right: '-15%', top: '-10%', background: hue, opacity: 0.35 }} />
        <div className="viz-orb" style={{ width: '45%', height: '45%', left: '5%', bottom: '10%', background: '#ff6a00', opacity: 0.18 }} />
      </div>
      <div className="viz-rings">
        {[90, 66, 42].map((s, i) => (
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

function StackCard({ p, i, n, progress }: { p: Project; i: number; n: number; progress: MotionValue<number> }) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - i) * 0.035])
  const dim = useTransform(progress, [i / n, (i + 1) / n], [1, i === n - 1 ? 1 : 0.5])
  const [first, ...rest] = p.title.split(' — ')[0].split(' ')
  return (
    <div className="stack-card" style={{ top: `calc(96px + ${i * 14}px)` }}>
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
          <div className="stack-foot">
            <div className="tags">
              {p.stack.slice(0, 6).map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
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

/** Floating preview card that follows the cursor over the project list. */
function HoverPreview({ p, x, y }: { p: Project | null; x: MotionValue<number>; y: MotionValue<number> }) {
  const sx = useSpring(x, { stiffness: 260, damping: 26 })
  const sy = useSpring(y, { stiffness: 260, damping: 26 })
  return (
    <motion.div className="preview" style={{ x: sx, y: sy }} aria-hidden>
      <AnimatePresence mode="popLayout">
        {p && (
          <motion.div
            key={p.slug}
            className="preview-card"
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease }}
            style={{ '--c': p.color ?? '#ff8c24' } as React.CSSProperties}
          >
            <span className="preview-cat">{p.category}</span>
            {p.metric ? (
              <>
                <b>{p.metric.value}</b>
                <small>{p.metric.label}</small>
              </>
            ) : (
              <b className="preview-initial">{p.title.charAt(0)}</b>
            )}
            <div className="tags">
              {p.stack.slice(0, 4).map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Work() {
  const order = ['iva-platform', 'mindvibe', 'bank-statements', 'dravyx', 'newrelic-grader']
  const featured = order.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean)
  const stackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ['start start', 'end end'] })

  const [filter, setFilter] = useState<string>('All')
  const [hover, setHover] = useState<Project | null>(null)
  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter])
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
                <Scramble text="Selected work" />
              </span>
            </Reveal>
            <MaskHeading lines={['Things I', <>have <em>shipped</em></>]} />
          </div>
        </div>

        <div className="stack" ref={stackRef}>
          {featured.map((p, i) => (
            <StackCard key={p.slug} p={p} i={i} n={featured.length} progress={scrollYProgress} />
          ))}
        </div>

        <div className="index-head">
          <Reveal>
            <h3>
              All projects <span style={{ color: 'var(--fg-3)' }}>({projects.length})</span>
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="filters" role="tablist" aria-label="Filter projects">
              {['All', ...categories].map((c) => {
                const count = c === 'All' ? projects.length : projects.filter((p) => p.category === c).length
                return (
                  <button key={c} role="tab" aria-selected={filter === c} className={filter === c ? 'on' : ''} onClick={() => setFilter(c)}>
                    {filter === c && <motion.span layoutId="filter-pill" className="pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                    {c}
                    <sup>{count}</sup>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <div
          className="rows"
          onPointerMove={(e) => {
            px.set(e.clientX)
            py.set(e.clientY)
          }}
          onPointerLeave={() => setHover(null)}
        >
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => {
              const Tag = p.link ? motion.a : motion.div
              return (
                <Tag
                  key={p.slug}
                  layout="position"
                  className="row row-btn"
                  {...(p.link ? { href: p.link.href, target: '_blank', rel: 'noreferrer' } : {})}
                  onPointerEnter={() => setHover(p)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.3), ease }}
                >
                  <span className="row-idx">{String(i + 1).padStart(2, '0')}</span>
                  <span className="row-title">
                    {p.title}
                    <small>{p.tagline}</small>
                  </span>
                  <span className="row-cat">{p.category}</span>
                  <span className="row-year">{p.year}</span>
                  <span className={`row-go ${p.link ? '' : 'off'}`} aria-hidden>
                    ↗
                  </span>
                </Tag>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
      <HoverPreview p={hover} x={px} y={py} />
    </section>
  )
}
