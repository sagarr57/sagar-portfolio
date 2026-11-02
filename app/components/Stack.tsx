'use client'

import { skills, education, certifications } from '../data/portfolio'
import { MaskHeading, Reveal } from './Reveal'
import Scramble from './Scramble'
import Tilt from './Tilt'

const spans = ['span-3', 'span-3', 'span-2', 'span-2', 'span-2', 'span-4', 'span-2']

export default function Stack() {
  return (
    <section id="stack" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
                <Scramble text="Toolkit" />
              </span>
            </Reveal>
            <MaskHeading lines={['The', <><em>stack</em></>]} />
          </div>
          <Reveal delay={0.2}>
            <p>The tools I reach for — chosen for what holds up in production, not what trends.</p>
          </Reveal>
        </div>

        <div className="bento">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05} y={24} className={spans[i % spans.length]}>
              <Tilt className="bento-cell shimmer" max={6}>
              <span className="num">0{i + 1}</span>
              <h3>{s.group}</h3>
              <p>{s.note}</p>
              <div className="tags" style={{ position: 'relative' }}>
                {s.items.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <div className="creds" style={{ marginTop: 12 }}>
          <Reveal className="cred-card shimmer">
            <h3>Education</h3>
            {education.map((e) => (
              <div className="cred" key={e.school}>
                <b>{e.degree}</b>
                <span>
                  {e.school} · {e.location}
                </span>
                <small>{e.dates}</small>
                {e.note && <small>{e.note}</small>}
              </div>
            ))}
          </Reveal>
          <Reveal className="cred-card shimmer" delay={0.1}>
            <h3>Certifications</h3>
            {certifications.map((c) => (
              <div className="cred" key={c.title}>
                <b>{c.title}</b>
                <span>
                  {c.issuer} · {c.date}
                </span>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer">
                    Verify ↗
                  </a>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
