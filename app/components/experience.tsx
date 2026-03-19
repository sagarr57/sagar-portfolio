'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaCode, FaExternalLinkAlt } from 'react-icons/fa'
import { getIcon } from '../utils/iconMapper'
import { colors } from '../utils/colors'

const professionalExperience = [
  { id: 1, title: 'AI Solution Engineer', company: 'Louis Charles International LLC FZ', location: 'Dubai, UAE', duration: 'Jul 2025 - Present', type: 'Professional', description: ['Developing and owning the official public website for <strong>Louis Charles International LLC FZ</strong>, ensuring a high-conversion landing experience and clean information architecture.', 'Designed, developed, and launched the official <strong>QuickCash Direct</strong> website, a US-based instant loan application platform connecting borrowers with trusted lenders.', 'Building a <strong>SaaS-based CRM</strong> to manage loan leads end-to-end with automation across the full lead lifecycle.', 'Implementing core CRM features including <strong>calendar scheduling</strong>, <strong>in-built WhatsApp chat</strong>, and automated status updates to keep stakeholders aligned.', 'Designing an <strong>AI-driven internal voice calling system</strong> trained on business data to improve agent productivity and call quality.', 'Automating the user journey through <strong>WhatsApp workflow</strong> and <strong>AI-powered conversations</strong>, cutting response time by <strong>60%</strong> and improving lead engagement.'], tools: [{ icon: 'TbBrandNextjs', label: 'Next.js' }, { icon: 'TbBrandReact', label: 'React JS' }, { icon: 'TbBrandNodejs', label: 'Node.js' }, { icon: 'TbBrandMongodb', label: 'MongoDB' }, { icon: 'TbBrandGit', label: 'Git & CI/CD' }, { icon: 'TbBrandPython', label: 'Python AI' }, { icon: 'FaBrain', label: 'AI & LLMs' }] },
  { id: 2, title: 'Full Stack Developer Intern', company: 'Decarbeon', location: 'Dubai, UAE', duration: 'Feb 2025 - Apr 2025', type: 'Professional', description: ['Contributed to <strong>Decarbeon</strong>, a sustainability analytics dashboard with interactive visualizations built using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Power BI</strong> integrations.', 'Developed dashboards for sustainability metrics and ESG KPIs using <strong>Next.js</strong> and <strong>Chart.js</strong> to help stakeholders track performance in real time.', 'Built a short-term <strong>WordPress</strong>-based web app to rapidly deliver marketing content and sustainability insights for stakeholders.', 'Collaborated on data visualizations for <strong>energy consumption</strong> and <strong>carbon footprint</strong>, improving clarity for decision-makers.', 'Applied <strong>AI-driven insights</strong> to reporting modules, surfacing data-driven recommendations on sustainability performance.'], tools: [{ icon: 'TbBrandNextjs', label: 'Next.js' }, { icon: 'TbBrandReact', label: 'React JS' }, { icon: 'SiHtml5', label: 'Tailwind & HTML' }, { icon: 'SiCss3', label: 'CSS' }, { icon: 'TbBrandMysql', label: 'Data Integrations' }, { icon: 'TbBrandGit', label: 'Git & Version Control' }] },
  { id: 3, title: 'Associate Software Engineer', company: 'New Relic', location: 'Hyderabad, India', duration: 'Feb 2023 - Mar 2024', type: 'Professional', description: ['Architected and built reusable <strong>React</strong> components for performance monitoring dashboards, resulting in <strong>25% faster load times</strong> and improved UX.', 'Designed and developed a domain validation landing page that increased user engagement by <strong>35%</strong> through intuitive UX and seamless interactions.', 'Led QA automation initiatives using <strong>Playwright</strong> and <strong>Jest</strong>, achieving zero critical bugs in production releases.', 'Optimized <strong>CI/CD pipelines</strong> and deployment workflows, reducing configuration overhead by <strong>40%</strong> and improving team productivity.'], tools: [{ icon: 'TbBrandReact', label: 'React JS' }, { icon: 'TbBrandNextjs', label: 'Next.js' }, { icon: 'TbBrandNodejs', label: 'Node.js' }, { icon: 'TbBrandMongodb', label: 'MongoDB' }, { icon: 'BiTestTube', label: 'Playwright' }, { icon: 'SiJest', label: 'Jest' }, { icon: 'SiGooglecloud', label: 'Google Cloud' }] },
  { id: 4, title: 'Junior Level Engineer', company: 'XRG Consulting', location: 'Hyderabad, India', duration: 'Sept 2021 - Jan 2023', type: 'Professional', description: ['Developed a robust Java-based backend service for automated user invitation system, eliminating 40% of manual follow-up tasks.', 'Created an interactive React JS modal component for team invitations, significantly enhancing user engagement and workflow efficiency.', 'Comprehensive API documentation using Swagger, reducing new developer onboarding time by two weeks.'], tools: [{ icon: 'TbBrandJavascript', label: 'JavaScript' }, { icon: 'TbBrandTypescript', label: 'TypeScript' }, { icon: 'TbBrandPython', label: 'Python' }, { icon: 'TbBrandDocker', label: 'Docker' }, { icon: 'SiSwagger', label: 'Swagger' }] },
]

const freelanceProjects = [
  { id: 3, title: 'SRR Auto Spare Parts - Static Website', company: 'Freelance Project', location: 'Remote', duration: '2024', type: 'Freelance', description: ['Developed a Next.js 15 static website for displaying auto spare parts products and company information.', 'Built responsive pages including Home, About Us, Products showcase, Gallery, and Contact sections with modern UI/UX design.', 'Implemented product display sections for Korean and Japanese auto spare parts, batteries, and lubricants with brand showcase.', 'Created responsive design with dark mode support using Tailwind CSS 4.x, Radix UI, shadcn/ui, and React Hook Form with Zod validation.'], tools: [{ icon: 'TbBrandNextjs', label: 'Next.js 15' }, { icon: 'TbBrandReact', label: 'React 19' }, { icon: 'TbBrandTypescript', label: 'TypeScript' }, { icon: 'SiHtml5', label: 'Tailwind CSS' }, { icon: 'FaBrain', label: 'Radix UI' }], link: 'https://srrautomobileparts.com/', linkType: 'live' as const },
]

const highlightKeywords = ['AI', 'SaaS', 'CRM', 'Next.js', 'React', 'Node.js', 'MongoDB', 'Python', 'LLMs', 'WordPress', 'Chart.js', 'Power BI', 'Tailwind CSS', 'ESG', 'sustainability', 'automation', 'WhatsApp', 'voice calling', 'QuickCash Direct', 'Louis Charles International', 'Decarbeon', 'New Relic', 'Playwright', 'Jest', 'CI/CD', '25%', '35%', '40%', '45%', '50%', 'zero critical bugs', '99.9%', 'machine learning', 'ML', 'chatbot', 'NLP']

function highlightText(text: string, accentColor: string): string {
  let result = text
  for (const keyword of highlightKeywords) {
    const regex = new RegExp('\\b(' + keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'gi')
    result = result.replace(regex, '<strong style="color: ' + accentColor + '; font-weight: 600;">$1</strong>')
  }
  return result
}

type ExpItem = (typeof professionalExperience)[0] | (typeof freelanceProjects)[0]

function ExpCard(props: { exp: ExpItem; index: number; accentColor: string; accentBg: string; accentBorder: string }) {
  const { exp, index, accentColor, accentBg, accentBorder } = props
  const hasLink = 'link' in exp && exp.link

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      style={{
        background: colors.background.card,
        borderRadius: 12,
        border: '1px solid ' + colors.overlay.cardBorder,
        borderLeft: '4px solid ' + accentColor,
        padding: 'clamp(1.25rem, 4vw, 1.75rem)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
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
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
        {exp.description.map((item, idx) => (
          <li key={idx} style={{ padding: '0.25rem 0', paddingLeft: '1.25rem', position: 'relative', color: colors.text.secondary, lineHeight: 1.65, fontSize: '0.9375rem' }}>
            <span style={{ position: 'absolute', left: 0, color: accentColor, fontWeight: 'bold' }}>▸</span>
            <span dangerouslySetInnerHTML={{ __html: highlightText(item, accentColor) }} />
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: hasLink ? '1rem' : 0 }}>
        {exp.tools.map((tool, idx) => (
          <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', background: accentBg, padding: '0.375rem 0.75rem', borderRadius: 8, fontSize: '0.8125rem', color: accentColor, fontWeight: 500, border: '1px solid ' + accentBorder }}>
            {getIcon(tool.icon)} {tool.label}
          </span>
        ))}
      </div>
      {hasLink && (
        <motion.a
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem', padding: '0.5rem 1rem', borderRadius: 8, background: colors.gradient.primary, boxShadow: '0 2px 8px rgba(66,165,245,0.3)' }}
        >
          <FaExternalLinkAlt size={14} /> View Live Website
        </motion.a>
      )}
    </motion.div>
  )
}

export default function Experience() {
  const proAccent = colors.accent.primary
  const freeAccent = colors.status.success

  return (
    <section id="experience" style={{ padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)', background: colors.background.primary, position: 'relative' }}>
      <div style={{ maxWidth: 900, width: '100%', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vw, 3rem)' }}>
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>Experience & Expertise</h2>
          <div style={{ width: 48, height: 3, background: colors.gradient.primary, borderRadius: 2, margin: '0 auto 1rem' }} />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>A blend of corporate excellence and AI-powered innovation</p>
        </motion.div>
        <div style={{ marginBottom: 'clamp(2rem, 6vw, 3rem)' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: colors.text.primary, fontSize: '1.25rem' }}>
            <FaBriefcase style={{ color: proAccent }} /> Professional Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem, 4vw, 1.5rem)' }}>
            {professionalExperience.map(function (exp, index) {
              return <ExpCard key={exp.id} exp={exp} index={index} accentColor={proAccent} accentBg={`${proAccent}20`} accentBorder={`${proAccent}40`} />
            })}
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: colors.text.primary, fontSize: '1.25rem' }}>
            <FaCode style={{ color: freeAccent }} /> AI-Powered Projects
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem, 4vw, 1.5rem)' }}>
            {freelanceProjects.map(function (exp, index) {
              return <ExpCard key={exp.id} exp={exp} index={index} accentColor={freeAccent} accentBg={`${freeAccent}20`} accentBorder={`${freeAccent}40`} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
