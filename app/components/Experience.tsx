'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { getIcon } from '../utils/iconMapper'
import { colors } from '../utils/colors'

const professionalExperience = [
  {
    id: 1,
    title: 'AI Solution Engineer',
    company: 'Louis Charles International LLC FZ',
    location: 'Dubai, UAE',
    duration: 'Jul 2025 - Present',
    type: 'Professional',
    description: [
      'Manage and maintain the official public website for <strong>Louis Charles International LLC FZ</strong>, preserving a high-conversion landing experience and clean information architecture as requirements change.',
      'Designed, developed, and launched the official <strong>QuickCash Direct</strong> website, a US-based instant loan application platform connecting borrowers with trusted lenders.',
      'Delivered <strong>All Day Loans</strong> (UK): public loan journeys with <strong>PingFree</strong> lender integrations, and the <strong>PingFree Admin</strong> dashboard to monitor applications, affiliate traffic, lender outcomes, and conversion signals.',
      'Configured <strong>Pabbly</strong> and <strong>GoHighLevel</strong> automations for WhatsApp lead chase, scheduled reminders, and multi-step follow-up workflows so teams stay on cadence with less manual outreach.',
      'Improved acquisition SEO and measurement using <strong>Google Search Console</strong>, <strong>Microsoft Clarity</strong>, <strong>Google Analytics</strong>, and <strong>Google Tag Manager</strong> across <strong>QuickCash Direct</strong>, <strong>All Day Loans</strong>, and core loan application funnels.',
      'Building a <strong>SaaS-based CRM</strong> to manage loan leads end-to-end with automation across the full lead lifecycle.',
      'Implementing core CRM features including <strong>calendar scheduling</strong>, <strong>in-built WhatsApp chat</strong>, and automated status updates to keep stakeholders aligned.',
      'Designing an <strong>AI-driven internal voice calling system</strong> trained on business data to improve agent productivity and call quality.',
      'Automating the user journey through <strong>WhatsApp workflow</strong> and <strong>AI-powered conversations</strong>, cutting response time by <strong>60%</strong> and improving lead engagement.',
    ],
    tools: [
      { icon: 'TbBrandNextjs', label: 'Next.js' },
      { icon: 'TbBrandReact', label: 'React' },
      { icon: 'TbBrandNodejs', label: 'Node.js' },
      { icon: 'TbBrandMongodb', label: 'MongoDB' },
      { icon: 'TbBrandGit', label: 'Git & CI/CD' },
      { icon: 'TbBrandPython', label: 'Python AI' },
      { icon: 'FaBrain', label: 'AI & LLMs' },
    ],
  },
  { id: 2, title: 'Full Stack Developer Intern', company: 'Decarbeon', location: 'Dubai, UAE', duration: 'Feb 2025 - Apr 2025', type: 'Professional', description: ['Contributed to <strong>Decarbeon</strong>, a sustainability analytics dashboard with interactive visualizations built using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Power BI</strong> integrations.', 'Developed dashboards for sustainability metrics and ESG KPIs using <strong>Next.js</strong> and <strong>Chart.js</strong> to help stakeholders track performance in real time.', 'Built a short-term <strong>WordPress</strong>-based web app to rapidly deliver marketing content and sustainability insights for stakeholders.', 'Collaborated on data visualizations for <strong>energy consumption</strong> and <strong>carbon footprint</strong>, improving clarity for decision-makers.', 'Applied <strong>AI-driven insights</strong> to reporting modules, surfacing data-driven recommendations on sustainability performance.'], tools: [{ icon: 'TbBrandNextjs', label: 'Next.js' }, { icon: 'TbBrandReact', label: 'React' }, { icon: 'SiHtml5', label: 'Tailwind & HTML' }, { icon: 'SiCss3', label: 'CSS' }, { icon: 'TbBrandMysql', label: 'Data Integrations' }, { icon: 'TbBrandGit', label: 'Git & Version Control' }] },
  { id: 3, title: 'Associate Software Engineer', company: 'New Relic', location: 'Hyderabad, India', duration: 'Feb 2023 - Mar 2024', type: 'Professional', description: ['Architected and built reusable <strong>React</strong> components for performance monitoring dashboards, resulting in <strong>25% faster load times</strong> and improved UX.', 'Designed and developed a domain validation landing page that increased user engagement by <strong>35%</strong> through intuitive UX and seamless interactions.', 'Led QA automation initiatives using <strong>Playwright</strong> and <strong>Jest</strong>, achieving zero critical bugs in production releases.', 'Optimized <strong>CI/CD pipelines</strong> and deployment workflows, reducing configuration overhead by <strong>40%</strong> and improving team productivity.'], tools: [{ icon: 'TbBrandReact', label: 'React' }, { icon: 'TbBrandNextjs', label: 'Next.js' }, { icon: 'TbBrandNodejs', label: 'Node.js' }, { icon: 'TbBrandMongodb', label: 'MongoDB' }, { icon: 'BiTestTube', label: 'Playwright' }, { icon: 'SiJest', label: 'Jest' }, { icon: 'SiGooglecloud', label: 'Google Cloud' }] },
  { id: 4, title: 'Junior Level Engineer', company: 'XRG Consulting', location: 'Hyderabad, India', duration: 'Sept 2021 - Jan 2023', type: 'Professional', description: ['Developed a robust Java-based backend service for automated user invitation system, eliminating 40% of manual follow-up tasks.', 'Created an interactive React modal component for team invitations, significantly enhancing user engagement and workflow efficiency.', 'Comprehensive API documentation using Swagger, reducing new developer onboarding time by two weeks.'], tools: [{ icon: 'TbBrandJavascript', label: 'JavaScript' }, { icon: 'TbBrandTypescript', label: 'TypeScript' }, { icon: 'TbBrandPython', label: 'Python' }, { icon: 'TbBrandDocker', label: 'Docker' }, { icon: 'SiSwagger', label: 'Swagger' }] },
]

const PREVIEW_BULLET_COUNT = 1

const highlightKeywords = [
  'Google Search Console',
  'Google Tag Manager',
  'Microsoft Clarity',
  'Google Analytics',
  'Louis Charles International',
  'QuickCash Direct',
  'All Day Loans',
  'PingFree Admin',
  'PingFree',
  'GoHighLevel',
  'Pabbly',
  'AI', 'SaaS', 'CRM', 'Next.js', 'React', 'Node.js', 'MongoDB', 'Python', 'LLMs', 'WordPress', 'Chart.js', 'Power BI', 'Tailwind CSS', 'ESG', 'sustainability', 'automation', 'WhatsApp', 'voice calling', 'Decarbeon', 'New Relic', 'Playwright', 'Jest', 'CI/CD', '25%', '35%', '40%', '45%', '50%', 'zero critical bugs', '99.9%', 'machine learning', 'ML', 'chatbot', 'NLP', 'SEO',
]

function highlightText(text: string, accentColor: string): string {
  let result = text
  for (const keyword of highlightKeywords) {
    const regex = new RegExp('\\b(' + keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'gi')
    result = result.replace(regex, '<strong style="color: ' + accentColor + '; font-weight: 600;">$1</strong>')
  }
  return result
}

type ExpItem = (typeof professionalExperience)[0]

function ExpCard(props: { exp: ExpItem; index: number; accentColor: string; accentBg: string; accentBorder: string; featured?: boolean }) {
  const { exp, index, accentColor, accentBg, accentBorder, featured } = props
  const [expanded, setExpanded] = useState(false)
  const totalBullets = exp.description.length
  const needsToggle = totalBullets > PREVIEW_BULLET_COUNT
  const visibleBullets = !needsToggle || expanded ? exp.description : exp.description.slice(0, PREVIEW_BULLET_COUNT)
  const moreCount = totalBullets - PREVIEW_BULLET_COUNT

  return (
    <motion.div
      className={featured ? 'exp-card--featured' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        background: colors.background.card,
        borderRadius: 12,
        border: '1px solid ' + colors.overlay.cardBorder,
        borderLeft: '4px solid ' + accentColor,
        padding: 'clamp(1.25rem, 4vw, 1.75rem)',
        boxShadow: '0 2px 14px rgba(0, 0, 0, 0.45)',
        width: '100%',
        minWidth: 0,
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: colors.text.primary, margin: 0 }}>{exp.title}</h3>
          <span style={{ background: accentBg, color: accentColor, padding: '0.2rem 0.5rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 600 }}>{exp.type}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', color: colors.text.muted, fontSize: '0.875rem' }}>
          <span style={{ fontWeight: 600, color: colors.text.primary }}>{exp.company}</span>
          <span>•</span>
          <span>{exp.location}</span>
          <span>•</span>
          <span>{exp.duration}</span>
        </div>
      </div>
      <ul id={'exp-bullets-' + exp.id} style={{ listStyle: 'none', padding: 0, margin: '0 0 0.5rem' }}>
        {visibleBullets.map(function (item, idx) {
          return (
            <li key={idx} style={{ padding: '0.25rem 0', paddingLeft: '1.25rem', position: 'relative', color: colors.text.secondary, lineHeight: 1.65, fontSize: '0.9375rem' }}>
              <span style={{ position: 'absolute', left: 0, color: accentColor, fontWeight: 'bold' }}>▸</span>
              <span dangerouslySetInnerHTML={{ __html: highlightText(item, accentColor) }} />
            </li>
          )
        })}
      </ul>
      {needsToggle ? (
        <button
          type="button"
          className="exp-expand-btn"
          aria-expanded={expanded}
          aria-controls={'exp-bullets-' + exp.id}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show less' : 'Show ' + moreCount + ' more'}
        </button>
      ) : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {exp.tools.map(function (tool, idx) {
          return (
            <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: accentBg, padding: '0.28rem 0.6rem', borderRadius: 7, fontSize: '0.75rem', color: accentColor, fontWeight: 500, border: '1px solid ' + accentBorder }}>
              {getIcon(tool.icon)} {tool.label}
            </span>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const proAccent = colors.accent.primary

  return (
    <section
      id="experience"
      className="section-surface"
      style={{ padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)', background: colors.background.primary, position: 'relative' }}
    >
      <div className="section-glow section-glow--alt" aria-hidden />
      <div style={{ maxWidth: 1180, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>Experience & Expertise</h2>
          <div style={{ width: 48, height: 3, background: colors.gradient.primary, borderRadius: 2, margin: '0 auto 1rem' }} />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>Skim roles in the grid — expand any card for the full story and stack.</p>
        </motion.div>
        <div>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: colors.text.primary, fontSize: '1.25rem' }}>
            <FaBriefcase style={{ color: proAccent }} /> Professional Experience
          </h3>
          <div className="experience-cards">
            {professionalExperience.map(function (exp, index) {
              return (
                <ExpCard
                  key={exp.id}
                  exp={exp}
                  index={index}
                  accentColor={proAccent}
                  accentBg={proAccent + '20'}
                  accentBorder={proAccent + '40'}
                  featured={exp.id === 1}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
