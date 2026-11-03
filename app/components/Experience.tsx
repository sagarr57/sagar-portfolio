import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import SectionHead from './SectionHead'
import Tags from './Tags'

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead eyebrow="Experience" lines={['4+ years', <>in <em>production</em></>]} />

        <div className="xp">
          {experience.map((x, i) => (
            <Reveal key={x.company} delay={i * 0.05}>
              <div className="xp-item shimmer">
                <div className="xp-when">
                  {x.dates}
                  {x.current && <span className="now">● Now</span>}
                </div>
                <div className="xp-main">
                  <h3>{x.role}</h3>
                  <span className="xp-co">
                    {x.company} · {x.location}
                  </span>
                  <Tags items={x.stack} max={5} style={{ marginTop: 16 }} />
                </div>
                <div className="xp-detail">
                  <p className="xp-summary">{x.summary}</p>
                  <ul className="xp-points">
                    {x.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
