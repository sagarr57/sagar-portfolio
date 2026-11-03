'use client'

import { memo, useMemo, useState } from 'react'
import { AnimatePresence, motion, MotionValue, useMotionValue, useSpring } from 'framer-motion'
import type { IndexProject } from './Work'
import { Reveal } from './Reveal'
import Tags from './Tags'
import { EASE_OUT as ease } from '../lib/motion'

/** Floating preview card that follows the cursor over the project list (desktop only via CSS). */
function HoverPreview({ p, x, y }: { p: IndexProject | null; x: MotionValue<number>; y: MotionValue<number> }) {
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
            <Tags items={p.stack} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/** The list itself is memoised, so hovering (which only changes the preview) never re-renders 30+ rows. */
const Rows = memo(function Rows({ list, onHover }: { list: IndexProject[]; onHover: (p: IndexProject) => void }) {
  return (
    <AnimatePresence mode="popLayout">
      {list.map((p, i) => {
        const Tag = p.link ? motion.a : motion.div
        return (
          <Tag
            key={p.slug}
            layout="position"
            className="row row-btn"
            {...(p.link ? { href: p.link.href, target: '_blank', rel: 'noreferrer' } : {})}
            onPointerEnter={() => onHover(p)}
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
            {p.link ? (
              <span className="row-go" aria-hidden>
                ↗
              </span>
            ) : (
              <span aria-hidden />
            )}
          </Tag>
        )
      })}
    </AnimatePresence>
  )
})

/** Filterable list of every project. */
export default function ProjectIndex({ projects, categories, counts }: { projects: IndexProject[]; categories: string[]; counts: Record<string, number> }) {
  const [filter, setFilter] = useState('All')
  const [hover, setHover] = useState<IndexProject | null>(null)
  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter, projects])
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  return (
    <>
      <div className="index-head">
        <Reveal>
          <h3>
            All projects <span style={{ color: 'var(--fg-3)' }}>({projects.length})</span>
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="filters" role="tablist" aria-label="Filter projects">
            {categories.map((c) => (
              <button key={c} role="tab" aria-selected={filter === c} className={filter === c ? 'on' : ''} onClick={() => setFilter(c)}>
                {filter === c && <motion.span layoutId="filter-pill" className="pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                {c}
                <sup>{counts[c] ?? 0}</sup>
              </button>
            ))}
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
        <Rows list={list} onHover={setHover} />
      </div>
      <HoverPreview p={hover} x={px} y={py} />
    </>
  )
}
