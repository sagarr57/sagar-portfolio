'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { SiLinkedin, SiMeta, SiCoursera, SiUdemy, SiNewrelic } from 'react-icons/si'
import type { ReactNode } from 'react'
import { colors } from '../utils/colors'
import { certifications, type CertificationIssuerKey } from '../utils/certificationsData'

function IssuerIcon({ issuerKey }: { issuerKey: CertificationIssuerKey }) {
  const wrap = { size: 20 as const, style: { flexShrink: 0 } as const }
  switch (issuerKey) {
    case 'linkedin':
      return <SiLinkedin {...wrap} color="#0A66C2" title="LinkedIn" />
    case 'meta':
      return <SiMeta {...wrap} color="#0668E1" title="Meta" />
    case 'coursera':
      return <SiCoursera {...wrap} color="#0056D2" title="Coursera" />
    case 'udemy':
      return <SiUdemy {...wrap} color="#A435F0" title="Udemy" />
    case 'newrelic':
      return <SiNewrelic {...wrap} color="#00AC69" title="New Relic" />
  }
}

function CompactLink(props: { href: string; children: ReactNode; variant?: 'primary' | 'ghost' }) {
  const { href, children, variant = 'primary' } = props
  const primary = variant === 'primary'
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="compact-cta cert-tile-link"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.35rem',
        fontSize: '0.75rem',
        fontWeight: 600,
        textDecoration: 'none',
        padding: '0.4rem 0.65rem',
        borderRadius: 8,
        border: primary ? 'none' : `1px solid ${colors.overlay.cardBorder}`,
        background: primary ? colors.gradient.primary : colors.background.tertiary,
        color: primary ? '#fff' : colors.accent.primary,
      }}
    >
      {children}
      <FaExternalLinkAlt size={10} aria-hidden />
    </motion.a>
  )
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-surface"
      style={{
        padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
        background: colors.background.primary,
        position: 'relative',
      }}
    >
      <div className="section-glow section-glow--alt" aria-hidden />
      <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.25rem)' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>
            Licenses & certifications
          </h2>
          <div style={{ width: 48, height: 3, background: colors.gradient.primary, borderRadius: 2, margin: '0 auto 1rem' }} />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
            Verified credentials — compact grid, full detail on the issuer sites
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const skillsShow = cert.skills?.slice(0, 3) ?? []
            const skillsMore = (cert.skills?.length ?? 0) - skillsShow.length

            return (
              <motion.article
                key={`${cert.title}-${cert.issued}`}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.025, 0.2) }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="cert-tile"
                style={{
                  background: colors.background.card,
                  borderRadius: 14,
                  border: `1px solid ${colors.overlay.cardBorder}`,
                  padding: '1rem 1rem 0.85rem',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  minHeight: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: colors.overlay.blue,
                      border: `1px solid ${colors.overlay.cardBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IssuerIcon issuerKey={cert.issuerKey} />
                  </div>
                  <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: 600, color: colors.text.muted, textAlign: 'right', lineHeight: 1.35 }}>
                    {cert.issued}
                    {cert.expires ? (
                      <>
                        <br />
                        <span style={{ fontWeight: 500 }}>Exp. {cert.expires}</span>
                      </>
                    ) : null}
                  </p>
                </div>

                <h3
                  className="cert-tile-title"
                  style={{
                    margin: 0,
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: colors.text.primary,
                    lineHeight: 1.35,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                  }}
                >
                  {cert.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.78rem', fontWeight: 600, color: colors.text.secondary }}>{cert.issuer}</p>

                {skillsShow.length > 0 ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                    {skillsShow.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          color: colors.text.muted,
                          background: colors.background.tertiary,
                          padding: '0.15rem 0.4rem',
                          borderRadius: 6,
                          border: `1px solid ${colors.overlay.cardBorder}`,
                          maxWidth: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                        title={s}
                      >
                        {s.length > 22 ? `${s.slice(0, 20)}…` : s}
                      </span>
                    ))}
                    {skillsMore > 0 ? (
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: colors.accent.primary,
                          padding: '0.15rem 0.35rem',
                        }}
                      >
                        +{skillsMore}
                      </span>
                    ) : null}
                  </div>
                ) : null}

                {cert.credentialId ? (
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.65rem',
                      color: colors.text.muted,
                      wordBreak: 'break-all',
                      lineHeight: 1.35,
                    }}
                    title={cert.credentialId}
                  >
                    ID: <span style={{ color: colors.text.secondary, fontWeight: 500 }}>{cert.credentialId}</span>
                  </p>
                ) : null}

                <div style={{ marginTop: 'auto', paddingTop: '0.35rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {cert.verifyUrl ? (
                    <CompactLink href={cert.verifyUrl}>{cert.verifyLabel ?? 'Verify'}</CompactLink>
                  ) : null}
                  {cert.infoUrl && cert.infoUrl !== cert.verifyUrl ? (
                    <CompactLink href={cert.infoUrl} variant="ghost">
                      {cert.infoLabel ?? 'More'}
                    </CompactLink>
                  ) : null}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
