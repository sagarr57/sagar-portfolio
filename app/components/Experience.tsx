'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'
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
      'Built and shipped a <strong>bank statement extractor</strong> using <strong>machine learning</strong> (Python, Scikit-learn, pdfplumber) to parse and categorize transactions from <strong>10 major UK banks</strong> — automatically identifying income, bills, gambling, and debt repayments for loan affordability assessments.',
      'Built an <strong>AI voice calling system</strong> powered by <strong>OpenAI GPT-4</strong>, <strong>Whisper</strong> (speech-to-text), and <strong>ElevenLabs</strong> (TTS) — orchestrated via <strong>LangChain</strong> and <strong>FastAPI</strong>, handling inbound calls, live Q&A from business knowledge, and automated call summaries.',
      'Automating the user journey through <strong>WhatsApp workflow</strong> and <strong>AI-powered conversations</strong>, cutting response time by <strong>60%</strong> and improving lead engagement.',
    ],
    tools: [
      { icon: 'TbBrandNextjs', label: 'Next.js' },
      { icon: 'TbBrandReact', label: 'React' },
      { icon: 'TbBrandNodejs', label: 'Node.js' },
      { icon: 'TbBrandPython', label: 'Python' },
      { icon: 'SiFastapi', label: 'FastAPI' },
      { icon: 'FaBrain', label: 'LangChain' },
      { icon: 'SiOpenai', label: 'OpenAI' },
      { icon: 'TbBrandMongodb', label: 'MongoDB' },
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer Intern',
    company: 'Decarbeon',
    location: 'Dubai, UAE',
    duration: 'Feb 2025 - Apr 2025',
    type: 'Professional',
    description: [
      'Contributed to <strong>Decarbeon</strong>, a sustainability analytics dashboard with interactive visualizations built using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Power BI</strong> integrations.',
      'Developed dashboards for sustainability metrics and ESG KPIs using <strong>Next.js</strong> and <strong>Chart.js</strong> to help stakeholders track performance in real time.',
      'Built a short-term <strong>WordPress</strong>-based web app to rapidly deliver marketing content and sustainability insights for stakeholders.',
      'Collaborated on data visualizations for <strong>energy consumption</strong> and <strong>carbon footprint</strong>, improving clarity for decision-makers.',
      'Applied <strong>AI-driven insights</strong> to reporting modules, surfacing data-driven recommendations on sustainability performance.',
    ],
    tools: [
      { icon: 'TbBrandNextjs', label: 'Next.js' },
      { icon: 'TbBrandReact', label: 'React' },
      { icon: 'SiHtml5', label: 'Tailwind & HTML' },
      { icon: 'SiCss3', label: 'CSS' },
      { icon: 'TbBrandMysql', label: 'Data Integrations' },
      { icon: 'TbBrandGit', label: 'Git & Version Control' },
    ],
  },
  {
    id: 3,
    title: 'Associate Software Engineer',
    company: 'New Relic',
    location: 'Hyderabad, India',
    duration: 'Feb 2023 - Mar 2024',
    type: 'Professional',
    description: [
      'Architected and built reusable <strong>React</strong> components for performance monitoring dashboards, resulting in <strong>25% faster load times</strong> and improved UX.',
      'Designed and developed a domain validation landing page that increased user engagement by <strong>35%</strong> through intuitive UX and seamless interactions.',
      'Led QA automation initiatives using <strong>Playwright</strong> and <strong>Jest</strong>, achieving zero critical bugs in production releases.',
      'Optimized <strong>CI/CD pipelines</strong> and deployment workflows, reducing configuration overhead by <strong>40%</strong> and improving team productivity.',
    ],
    tools: [
      { icon: 'TbBrandReact', label: 'React' },
      { icon: 'TbBrandNextjs', label: 'Next.js' },
      { icon: 'TbBrandNodejs', label: 'Node.js' },
      { icon: 'TbBrandMongodb', label: 'MongoDB' },
      { icon: 'BiTestTube', label: 'Playwright' },
      { icon: 'SiJest', label: 'Jest' },
      { icon: 'SiGooglecloud', label: 'Google Cloud' },
    ],
  },
  {
    id: 4,
    title: 'Junior Level Engineer',
    company: 'XRG Consulting',
    location: 'Hyderabad, India',
    duration: 'Sept 2021 - Jan 2023',
    type: 'Professional',
    description: [
      'Developed a robust Java-based backend service for automated user invitation system, eliminating 40% of manual follow-up tasks.',
      'Created an interactive React modal component for team invitations, significantly enhancing user engagement and workflow efficiency.',
      'Comprehensive API documentation using Swagger, reducing new developer onboarding time by two weeks.',
    ],
    tools: [
      { icon: 'TbBrandJavascript', label: 'JavaScript' },
      { icon: 'TbBrandTypescript', label: 'TypeScript' },
      { icon: 'TbBrandPython', label: 'Python' },
      { icon: 'TbBrandDocker', label: 'Docker' },
      { icon: 'SiSwagger', label: 'Swagger' },
    ],
  },
]

const freelanceExperience = [
  {
    id: 5,
    title: 'Freelance Developer & Automation Consultant',
    company: 'Self-employed',
    location: 'Remote',
    duration: 'Apr 2024 - Jan 2025',
    type: 'Freelance',
    description: [
      'Built and launched <strong>SRR Auto Spare Parts</strong> — full company website for a Korean/Japanese auto parts dealer with product catalog, gallery, and type-safe contact forms (<strong>React Hook Form + Zod</strong>). Implemented <strong>lead capture automation</strong> via n8n to route enquiries directly into a CRM pipeline.',
      'Developed <strong>The Kaash Journal</strong> — a live editorial platform covering AI and fintech, with <strong>Next.js</strong> frontend, <strong>Node.js</strong> API layer, and <strong>Supabase</strong> for content, auth, and data persistence.',
      'Configured automated <strong>lead generation funnels</strong> and <strong>WhatsApp Business API</strong> nurture sequences for both clients — qualifying inbound leads and triggering follow-up workflows without manual intervention.',
      'Reduced client manual follow-up effort by over <strong>50%</strong> through multi-step automation pipelines (n8n + WhatsApp), replacing ad-hoc outreach with structured, timed sequences.',
    ],
    tools: [
      { icon: 'TbBrandNextjs', label: 'Next.js' },
      { icon: 'TbBrandReact', label: 'React' },
      { icon: 'TbBrandNodejs', label: 'Node.js' },
      { icon: 'SiSupabase', label: 'Supabase' },
      { icon: 'SiN8N', label: 'n8n' },
      { icon: 'SiWhatsapp', label: 'WhatsApp API' },
    ],
  },
]

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
  'AI', 'SaaS', 'CRM', 'Next.js', 'React', 'Node.js', 'MongoDB', 'Python', 'LLMs', 'WordPress', 'Chart.js', 'Power BI', 'Tailwind CSS', 'ESG', 'sustainability', 'automation', 'WhatsApp', 'voice calling', 'Decarbeon', 'New Relic', 'Playwright', 'Jest', 'CI/CD', '25%', '35%', '40%', '45%', '50%', '60%', 'zero critical bugs', '99.9%', 'machine learning', 'ML', 'chatbot', 'NLP', 'SEO',
  'LangChain', 'FastAPI', 'OpenAI', 'GPT-4', 'Whisper', 'ElevenLabs', 'Scikit-learn', 'bank statement extractor', 'bank statement', 'UK banks', 'affordability',
  'SRR Auto Spare Parts', 'Kaash Journal', 'lead generation', 'lead capture', 'n8n', 'Supabase', 'React Hook Form', 'Zod', 'WhatsApp Business API',
]

function highlightText(text: string, keywordColor: string): string {
  let result = text
  for (const keyword of highlightKeywords) {
    const regex = new RegExp('\\b(' + keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'gi')
    result = result.replace(regex, '<strong style="color: ' + keywordColor + '; font-weight: 500;">$1</strong>')
  }
  return result
}

type ExpItem = (typeof professionalExperience)[0]

function TimelineItem({ exp, index, isLast }: { exp: ExpItem; index: number; isLast: boolean }) {
  const isCurrent = exp.duration.includes('Present')

  return (
    <div style={{ position: 'relative', paddingLeft: 'clamp(2.75rem, 7vw, 3.75rem)', paddingBottom: isLast ? 0 : 'clamp(2rem, 5vw, 2.75rem)' }}>
      {/* Vertical connector line */}
      {!isLast && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 'clamp(0.875rem, 2.2vw, 1.1875rem)',
            top: '2.25rem',
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, rgba(37,99,235,0.40), rgba(37,99,235,0.06))',
            borderRadius: 2,
          }}
        />
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          top: '0.3125rem',
          width: 'clamp(1.75rem, 4vw, 2.125rem)',
          height: 'clamp(1.75rem, 4vw, 2.125rem)',
          borderRadius: '50%',
          background: isCurrent ? colors.accent.primary : '#ffffff',
          border: `2px solid ${isCurrent ? colors.accent.primary : 'rgba(37,99,235,0.45)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isCurrent ? '#ffffff' : colors.accent.primary,
          boxShadow: isCurrent
            ? '0 0 0 5px rgba(37,99,235,0.13), 0 2px 10px rgba(37,99,235,0.28)'
            : '0 0 0 4px rgba(37,99,235,0.07)',
          zIndex: 2,
        }}
      >
        <FaBriefcase size={11} />
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.45, delay: index * 0.07 }}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
        style={{
          background: colors.background.card,
          borderRadius: 14,
          border: `1px solid ${colors.overlay.cardBorder}`,
          borderLeft: `3px solid ${isCurrent ? colors.accent.primary : 'rgba(37,99,235,0.35)'}`,
          padding: 'clamp(1.15rem, 4vw, 1.65rem)',
          boxShadow: '0 2px 12px rgba(15,23,42,0.07)',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '0.875rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
            <h3 style={{ margin: 0, fontSize: 'clamp(0.9375rem, 2.2vw, 1.075rem)', fontWeight: 600, color: colors.text.primary, letterSpacing: '-0.015em' }}>
              {exp.title}
            </h3>
            {isCurrent && (
              <span style={{
                background: `${colors.accent.primary}15`,
                color: colors.accent.primary,
                border: `1px solid ${colors.accent.primary}30`,
                padding: '0.15rem 0.55rem',
                borderRadius: 999,
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}>
                Current
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem 0.6rem', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, color: colors.accent.primary, fontSize: '0.875rem' }}>{exp.company}</span>
            <span style={{ color: colors.text.muted, fontSize: '0.8125rem' }}>·</span>
            <span style={{ color: colors.text.secondary, fontSize: '0.8125rem' }}>{exp.location}</span>
            <span style={{ color: colors.text.muted, fontSize: '0.8125rem' }}>·</span>
            <span style={{
              color: colors.text.secondary,
              background: 'rgba(15,23,42,0.05)',
              border: '1px solid rgba(15,23,42,0.10)',
              padding: '0.1rem 0.5rem',
              borderRadius: 6,
              fontSize: '0.775rem',
              fontWeight: 500,
            }}>
              {exp.duration}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem' }}>
          {exp.description.map(function (item, idx) {
            return (
              <li key={idx} style={{ padding: '0.22rem 0', paddingLeft: '1rem', position: 'relative', color: colors.text.secondary, lineHeight: 1.65, fontSize: '0.9rem' }}>
                <span className="list-marker-dot" style={{ background: colors.accent.primary }} aria-hidden />
                <span dangerouslySetInnerHTML={{ __html: highlightText(item, colors.keyword) }} />
              </li>
            )
          })}
        </ul>

        {/* Tech pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {exp.tools.map(function (tool, idx) {
            return (
              <span key={idx} className="tech-pill tech-pill--with-icon">
                {getIcon(tool.icon)}
                <span>{tool.label}</span>
              </span>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-surface"
      style={{ padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)', background: colors.background.primary, position: 'relative' }}
    >
      <div style={{ maxWidth: 900, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>
            Experience & Expertise
          </h2>
          <div style={{ width: 80, height: 3, background: 'linear-gradient(90deg, #2563eb, #3b82f6, transparent)', borderRadius: 9999, margin: '0 auto 1.1rem' }} />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
            Roles, impact, and the tools behind each chapter.
          </p>
        </motion.div>

        {/* Sub-label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}
        >
          <FaBriefcase style={{ color: colors.accent.primary, flexShrink: 0 }} />
          <span style={{ fontWeight: 500, color: colors.text.primary, fontSize: '1rem' }}>Professional Experience</span>
        </motion.div>

        {/* Timeline */}
        <div>
          {professionalExperience.map(function (exp, index) {
            return (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={index}
                isLast={index === professionalExperience.length - 1}
              />
            )
          })}
        </div>

        {/* Freelance section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 'clamp(2rem, 5vw, 3rem) 0 2rem' }}
        >
          <FaLaptopCode style={{ color: colors.accent.primary, flexShrink: 0 }} />
          <span style={{ fontWeight: 500, color: colors.text.primary, fontSize: '1rem' }}>Freelance & Independent Projects</span>
        </motion.div>

        <div>
          {freelanceExperience.map(function (exp, index) {
            return (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={index}
                isLast={index === freelanceExperience.length - 1}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
