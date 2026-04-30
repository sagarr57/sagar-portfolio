'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  TbBrandReact,
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandDocker,
  TbBrandGit,
  TbBrandPython,
  TbWebhook,
  TbBriefcase,
} from 'react-icons/tb'
import {
  SiMaterialdesign,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiJira,
  SiFigma,
  SiPostman,
  SiJest,
  SiMocha,
  SiSlack,
  SiGooglecloud,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiPytorch,
  SiZapier,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiSemrush,
  SiTailwindcss,
  SiSupabase,
  SiFastapi,
  SiOpenai,
  SiWordpress,
  SiWhatsapp,
  SiN8N,
} from 'react-icons/si'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { BiTestTube } from 'react-icons/bi'
import { FaBrain } from 'react-icons/fa'
import { colors } from '../utils/colors'

const skillsData: Record<string, { icon: React.ReactNode; name: string; color: string }[]> = {
  'AI & Machine Learning': [
    { icon: <TbBrandPython size={28} />, name: 'Python', color: '#3776AB' },
    { icon: <SiOpenai size={28} />, name: 'OpenAI / LLMs', color: '#10A37F' },
    { icon: <SiTensorflow size={28} />, name: 'TensorFlow', color: '#FF6F00' },
    { icon: <SiPytorch size={28} />, name: 'PyTorch', color: '#EE4C2C' },
    { icon: <FaBrain size={28} />, name: 'Machine Learning', color: colors.accent.primary },
    { icon: <SiJupyter size={28} />, name: 'Jupyter', color: '#F37626' },
    { icon: <FaBrain size={28} />, name: 'Scikit-learn', color: '#F7931E' },
    { icon: <SiPandas size={28} />, name: 'Pandas', color: '#e070c8' },
    { icon: <SiNumpy size={28} />, name: 'NumPy', color: '#4ab8d4' },
  ],
  'Programming & Development': [
    { icon: <TbBrandJavascript size={28} />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <TbBrandTypescript size={28} />, name: 'TypeScript', color: '#3178C6' },
    { icon: <TbBrandNodejs size={28} />, name: 'Node.js', color: '#339933' },
  ],
  'Front-End': [
    { icon: <TbBrandReact size={28} />, name: 'React', color: '#61DAFB' },
    { icon: <TbBrandNextjs size={28} />, name: 'Next.js', color: '#e2e8f0' },
    { icon: <SiTailwindcss size={28} />, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: <SiMaterialdesign size={28} />, name: 'Material UI', color: '#0081CB' },
    { icon: <SiBootstrap size={28} />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <SiRedux size={28} />, name: 'Redux', color: '#764ABC' },
    { icon: <SiHtml5 size={28} />, name: 'HTML', color: '#E34F26' },
    { icon: <SiCss3 size={28} />, name: 'CSS', color: '#1572B6' },
  ],
  'Back-End & Databases': [
    { icon: <SiExpress size={28} />, name: 'Express.js', color: '#c0c8d8' },
    { icon: <SiFastapi size={28} />, name: 'FastAPI', color: '#009688' },
    { icon: <TbBrandMongodb size={28} />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiSupabase size={28} />, name: 'Supabase', color: '#3ECF8E' },
    { icon: <TbBrandMysql size={28} />, name: 'MySQL', color: '#4479A1' },
  ],
  'SEO & Analytics': [
    { icon: <SiGooglesearchconsole size={28} />, name: 'Google Search Console', color: '#458CF5' },
    { icon: <SiGoogleanalytics size={28} />, name: 'Google Analytics', color: '#E37400' },
    { icon: <SiGoogletagmanager size={28} />, name: 'Google Tag Manager', color: '#246FDB' },
    { icon: <IoAnalyticsOutline size={28} />, name: 'Microsoft Clarity', color: '#00A4EF' },
    { icon: <SiSemrush size={28} />, name: 'SEO & research', color: '#FF642D' },
  ],
  'Automation & workflows': [
    { icon: <TbWebhook size={28} />, name: 'Pabbly Connect', color: '#1E88E5' },
    { icon: <TbBriefcase size={28} />, name: 'GoHighLevel', color: '#FF6521' },
    { icon: <SiZapier size={28} />, name: 'Zapier', color: '#FF4A00' },
    { icon: <SiN8N size={28} />, name: 'n8n', color: '#EA4B71' },
    { icon: <SiWhatsapp size={28} />, name: 'WhatsApp Business', color: '#25D366' },
  ],
  'DevOps & Cloud': [
    { icon: <TbBrandDocker size={28} />, name: 'Docker', color: '#2496ED' },
    { icon: <SiJira size={28} />, name: 'Jenkins', color: '#D24939' },
    { icon: <TbBrandGit size={28} />, name: 'GitHub Actions', color: '#2088FF' },
    { icon: <SiGooglecloud size={28} />, name: 'Google Cloud', color: '#4285F4' },
  ],
  'Testing & Tools': [
    { icon: <SiJest size={28} />, name: 'Jest', color: '#C21325' },
    { icon: <SiMocha size={28} />, name: 'Mocha', color: '#8D6748' },
    { icon: <BiTestTube size={28} />, name: 'Playwright', color: '#61DAFB' },
    { icon: <SiPostman size={28} />, name: 'Postman', color: '#FF6C37' },
    { icon: <SiJira size={28} />, name: 'Agile', color: '#2D70AD' },
    { icon: <SiFigma size={28} />, name: 'Figma', color: '#F04E37' },
    { icon: <SiSlack size={28} />, name: 'Slack', color: '#e01e5a' },
    { icon: <SiWordpress size={28} />, name: 'WordPress', color: '#21759B' },
    { icon: <TbBrandGit size={28} />, name: 'Git', color: '#0079BF' },
  ],
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('AI & Machine Learning')
  const skills = skillsData[activeTab] || []

  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
        background: '#dcfce7',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.25rem)' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>
            Technical Expertise
          </h2>
          <div
            style={{
              width: 80,
              height: 3,
              background: 'linear-gradient(90deg, #16a34a, #22c55e, transparent)',
              borderRadius: 9999,
              margin: '0 auto 1.1rem',
            }}
          />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
            A comprehensive toolkit for building modern, AI-powered applications
          </p>
        </motion.div>

        <div
          className="skills-tabs"
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            overflowX: 'auto',
            padding: '0.5rem 0',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {Object.keys(skillsData).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '0.625rem 1rem',
                cursor: 'pointer',
                color: activeTab === tab ? '#ffffff' : colors.text.secondary,
                fontWeight: 500,
                background: activeTab === tab ? '#15803d' : 'rgba(22, 163, 74, 0.15)',
                borderRadius: 999,
                whiteSpace: 'nowrap',
                fontSize: '0.875rem',
                border: activeTab === tab ? '1px solid transparent' : '1px solid rgba(22, 163, 74, 0.40)',
                flexShrink: 0,
                boxShadow: 'none',
              }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(0.75rem, 3vw, 1rem)',
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ y: -2 }}
              style={{
                background: colors.background.card,
                borderRadius: 10,
                border: `1px solid ${colors.overlay.cardBorder}`,
                padding: 'clamp(0.875rem, 3vw, 1.25rem)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 2px 10px rgba(15, 23, 42, 0.07)',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: `${skill.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: skill.color,
                  flexShrink: 0,
                }}
              >
                {skill.icon}
              </div>
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: colors.text.primary,
                  wordBreak: 'break-word',
                  textAlign: 'center',
                }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
