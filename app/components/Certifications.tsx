'use client'

import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { SiLinkedin, SiMeta, SiCoursera, SiUdemy, SiNewrelic } from 'react-icons/si'
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

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-surface"
      style={{
        padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
        background: '#ccfbf1',
        position: 'relative',
      }}
    >
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
          <div style={{ width: 80, height: 3, background: 'linear-gradient(90deg, #0d9488, #14b8a6, transparent)', borderRadius: 9999, margin: '0 auto 1.1rem' }} />
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
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="cert-tile"
                style={{
                  background: colors.background.card,
                  borderRadius: 14,
                  border: `1px solid ${colors.overlay.cardBorder}`,
                  padding: '1rem 1rem 0.85rem',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.08)',
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
                      background: 'rgba(13, 148, 136, 0.14)',
                      border: '1px solid rgba(13, 148, 136, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IssuerIcon issuerKey={cert.issuerKey} />
                  </div>
                  <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: 500, color: colors.text.muted, textAlign: 'right', lineHeight: 1.35 }}>
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
                    fontWeight: 500,
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
                <p style={{ margin: 0, fontSize: '0.78rem', fontWeight: 500, color: colors.text.secondary }}>{cert.issuer}</p>

                {skillsShow.length > 0 ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                    {skillsShow.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: '#0f766e',
                          background: 'rgba(13, 148, 136, 0.13)',
                          padding: '0.22rem 0.55rem',
                          borderRadius: 999,
                          border: '1px solid rgba(13, 148, 136, 0.35)',
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
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: '#0f766e',
                          padding: '0.22rem 0.4rem',
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

                <div style={{ marginTop: 'auto', paddingTop: '0.35rem', display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
                  {cert.verifyUrl ? (
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-view-link cert-tile-link"
                      aria-label={cert.verifyLabel ?? 'Verify credential on issuer site'}
                      whileHover={{ opacity: 0.9 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="project-view-link__label">
                        <span className="project-view-link__verb">Verify</span>
                      </span>
                      <HiArrowUpRight size={16} aria-hidden className="project-view-link__arrow" />
                    </motion.a>
                  ) : null}
                  {cert.infoUrl && cert.infoUrl !== cert.verifyUrl ? (
                    <motion.a
                      href={cert.infoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-secondary-link cert-tile-link"
                      whileHover={{ opacity: 0.92 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="cert-secondary-link__label">
                        <span>{cert.infoLabel ?? 'More'}</span>
                      </span>
                      <HiArrowUpRight size={14} aria-hidden />
                    </motion.a>
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
