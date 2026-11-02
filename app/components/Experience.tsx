import { experience } from '../data/portfolio'
import { MaskHeading, Reveal } from './Reveal'
import Scramble from './Scramble'

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
                <Scramble text="Experience" />
              </span>
            </Reveal>
            <MaskHeading lines={['4+ years', <>in <em>production</em></>]} />
          </div>
        </div>

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
                  <div className="tags" style={{ marginTop: 16 }}>
                    {x.stack.slice(0, 5).map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
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
