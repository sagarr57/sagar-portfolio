'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { colors } from '../utils/colors'
import { projects, type Project } from '../utils/projectsData'

type ProjectTab = 'professional' | 'coursework'

function filterByTab(tab: ProjectTab): Project[] {
  if (tab === 'professional') return projects.filter((p) => p.category === 'Professional')
  return projects.filter((p) => p.category === 'Coursework')
}

function ProjectCard({ project, index, accent }: { project: Project; index: number; accent: string }) {
  const bullets = project.description
  const linkSuffix = project.type === 'github' ? 'on GitHub' : 'live'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="project-card"
      style={{
        background: colors.background.card,
        borderRadius: 14,
        border: `1px solid ${colors.overlay.cardBorder}`,
        padding: 'clamp(1.15rem, 3vw, 1.6rem)',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.35)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        minHeight: 0,
        borderTop: `1px solid rgba(255, 255, 255, 0.06)`,
      }}
    >
      <div style={{ marginBottom: '1rem', paddingTop: 2, flexShrink: 0 }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: colors.text.primary, margin: '0 0 0.5rem', lineHeight: 1.35 }}>
          {project.title}
        </h3>
        {project.techStack?.length ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          color: colors.text.secondary,
          fontSize: '0.9rem',
        }}
      >
        {bullets.map((item, i) => (
          <li key={i} style={{ marginBottom: '0.4rem', paddingLeft: '0.85rem', position: 'relative', lineHeight: 1.55 }}>
            <span
              className="list-marker-dot"
              style={{ background: accent }}
              aria-hidden
            />
            <span
              dangerouslySetInnerHTML={{
                __html: item.replace(/<strong>/g, `<strong style="color:${colors.keyword}; font-weight: 500;">`),
              }}
            />
          </li>
        ))}
      </ul>
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-view-link"
        whileHover={{ opacity: 0.9 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="project-view-link__label">
          <span className="project-view-link__verb">View</span>
          <span className="project-view-link__rest">{linkSuffix}</span>
        </span>
        <HiArrowUpRight size={16} aria-hidden className="project-view-link__arrow" />
      </motion.a>
    </motion.article>
  )
}

export default function Projects() {
  const [tab, setTab] = useState<ProjectTab>('professional')
  const list = useMemo(() => filterByTab(tab), [tab])
  const accent = tab === 'coursework' ? colors.accent.secondary : colors.accent.primary

  return (
    <section
      id="projects"
      className="section-surface"
      style={{
        padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
        background: colors.background.tertiary,
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>
            Featured Projects
          </h2>
          <div style={{ width: 48, height: 2, background: colors.accent.primary, borderRadius: 2, margin: '0 auto 1rem' }} />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
            Selected work across professional builds and coursework.
          </p>
        </motion.div>

        <div
          role="tablist"
          aria-label="Project categories"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: 'clamp(1.5rem, 4vw, 2.25rem)',
          }}
        >
          {(
            [
              { id: 'professional' as const, label: 'Professional' },
              { id: 'coursework' as const, label: 'Coursework' },
            ] as const
          ).map((t) => {
            const active = tab === t.id
            return (
              <motion.button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  border: active ? '1px solid transparent' : '1px solid rgba(255, 255, 255, 0.12)',
                  background: active ? colors.accent.primary : 'rgba(255, 255, 255, 0.05)',
                  color: active ? colors.accentForeground : colors.text.secondary,
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  padding: '0.55rem 1.2rem',
                  borderRadius: 999,
                  cursor: 'pointer',
                  boxShadow: 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {t.label}
              </motion.button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'clamp(1rem, 3vw, 1.35rem)',
              alignItems: 'stretch',
            }}
          >
            {list.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} accent={accent} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
