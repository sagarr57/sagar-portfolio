'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import { colors } from '../utils/colors'
import { projects, type Project } from '../utils/projectsData'

type ProjectTab = 'professional' | 'coursework'

const DESCRIPTION_PREVIEW = 2

function filterByTab(tab: ProjectTab): Project[] {
  if (tab === 'professional') return projects.filter((p) => p.category === 'Professional')
  return projects.filter((p) => p.category === 'Coursework')
}

function ProjectCard({ project, index, accent }: { project: Project; index: number; accent: string }) {
  const [expanded, setExpanded] = useState(false)
  const bullets = project.description
  const needsToggle = bullets.length > DESCRIPTION_PREVIEW
  const visible = !needsToggle || expanded ? bullets : bullets.slice(0, DESCRIPTION_PREVIEW)
  const rest = bullets.length - DESCRIPTION_PREVIEW

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
        borderRadius: 16,
        border: `1px solid ${colors.overlay.cardBorder}`,
        padding: 'clamp(1.15rem, 3vw, 1.6rem)',
        boxShadow: '0 4px 24px rgba(15, 23, 42, 0.06)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${accent}, ${colors.accent.secondary})`,
          opacity: 0.85,
        }}
      />
      <div style={{ marginBottom: '1rem', paddingTop: 4, flexShrink: 0 }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: colors.text.primary, margin: '0 0 0.5rem', lineHeight: 1.35 }}>
          {project.title}
        </h3>
        {project.techStack?.length ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  background: colors.background.tertiary,
                  color: colors.text.secondary,
                  padding: '0.2rem 0.55rem',
                  borderRadius: 8,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  border: `1px solid ${colors.overlay.cardBorder}`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <ul
        id={'project-desc-' + project.id}
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          color: colors.text.secondary,
          fontSize: '0.9rem',
        }}
      >
        {visible.map((item, i) => (
          <li key={i} style={{ marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative', lineHeight: 1.55 }}>
            <span style={{ position: 'absolute', left: 0, color: accent }}>▸</span>
            <span
              dangerouslySetInnerHTML={{
                __html: item.replace(/<strong>/g, `<strong style="color:${accent}">`),
              }}
            />
          </li>
        ))}
      </ul>
      {needsToggle ? (
        <button
          type="button"
          className="project-expand-btn"
          aria-expanded={expanded}
          aria-controls={'project-desc-' + project.id}
          onClick={() => setExpanded(!expanded)}
          style={{
            color: accent,
            borderColor: accent + '44',
            alignSelf: 'flex-start',
          }}
        >
          {expanded ? 'Show less' : 'Show ' + rest + ' more detail' + (rest === 1 ? '' : 's')}
        </button>
      ) : null}
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="compact-cta"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '0.55rem 1.1rem',
          borderRadius: 10,
          background: colors.gradient.primary,
          boxShadow: '0 4px 16px rgba(66,165,245,0.28)',
          marginTop: 'auto',
          alignSelf: 'flex-start',
        }}
      >
        {project.type === 'github' ? (
          <>
            <FaCode size={14} /> View on GitHub
          </>
        ) : (
          <>
            <FaExternalLinkAlt size={14} /> View live
          </>
        )}
      </motion.a>
    </motion.article>
  )
}

export default function Projects() {
  const [tab, setTab] = useState<ProjectTab>('professional')
  const list = useMemo(() => filterByTab(tab), [tab])
  const accent = tab === 'coursework' ? colors.status.success : colors.accent.primary

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
      <div className="section-glow" aria-hidden />
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
          <div style={{ width: 48, height: 3, background: colors.gradient.primary, borderRadius: 2, margin: '0 auto 1rem' }} />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
            Highlights first — expand a card when you want the full project notes.
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
                  border: active ? 'none' : `1px solid ${colors.overlay.cardBorder}`,
                  background: active ? colors.gradient.primary : colors.background.card,
                  color: active ? '#fff' : colors.text.secondary,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  padding: '0.65rem 1.35rem',
                  borderRadius: 999,
                  cursor: 'pointer',
                  boxShadow: active ? '0 8px 24px rgba(66,165,245,0.28)' : '0 2px 10px rgba(0,0,0,0.04)',
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
