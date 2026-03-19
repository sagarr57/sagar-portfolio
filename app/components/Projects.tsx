'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import { colors } from '../utils/colors'

const projects = [
  { id: 1, title: 'AI-Powered Performance Monitoring Platform', category: 'Professional', techStack: ['React', 'Node.js', 'AI/ML', 'Data Visualization'], description: ['Built a React-based performance monitoring solution with AI-driven analytics.', 'Delivered 25% reduction in page load times and 35% increase in user engagement.'], link: 'https://one.newrelic.com/website-grader', type: 'live' as const },
  { id: 2, title: 'Intelligent Observability Landing Page', category: 'Professional', techStack: ['React', 'Next.js', 'Material UI', 'AI Personalization'], description: ['Developed high-converting landing page with AI-powered personalization.', 'Achieved 40% improvement in conversion rates through UX optimization.'], link: 'https://newrelic.com/instant-observability', type: 'live' as const },
  { id: 4, title: 'Louis Charles International - Official Business Website', category: 'Professional', techStack: ['Next.js', 'React', 'SEO', 'Analytics'], description: ['Designed and developed the official website for Louis Charles International.', 'Implemented responsive layouts and SEO-friendly structure for lead generation.'], link: 'https://louis-charles.com', type: 'live' as const },
  { id: 5, title: 'QuickCash Direct - Instant Loan Application Platform', category: 'Professional', techStack: ['Next.js', 'React', 'Loan Matching', 'Financial Services'], description: ['Developed US-based instant loan application website with $250-$3000 loans.', 'Built 3-step loan application process connecting borrowers with trusted lenders.'], link: 'https://www.quickcashdirect.com/', type: 'live' as const },
  { id: 6, title: 'MediConnect360 - AI-Powered Healthcare Platform', category: 'Coursework', techStack: ['Node.js', 'Express.js', 'MongoDB', 'AI/NLP', 'Docker'], description: ['Built hospital management system with AI-powered patient care workflows.', 'Integrated AI chatbot using NLP, reducing admin overhead by 50%.'], link: 'https://github.com/sagarr57/F29AI_Group-17', type: 'github' as const },
  { id: 7, title: 'Biologically-Inspired ANN + PSO for Concrete Strength Prediction', category: 'Coursework', techStack: ['Python', 'Neural Networks', 'PSO', 'Machine Learning'], description: ['Implemented multi-layer ANN from scratch with flexible layers and activations.', 'Developed PSO algorithm with informant topology on UCI dataset.'], link: 'https://github.com/sagarr57/F21BC_PG09', type: 'github' as const },
  { id: 8, title: 'SudoSage - Intelligent Sudoku Solver', category: 'Coursework', techStack: ['Next.js', 'React', 'CSP', 'Backtracking'], description: ['Built intelligent Sudoku solver using recursive backtracking and constraint propagation.', 'Developed Next.js/React interface with interactive puzzle input.'], link: 'https://github.com/sagarr57/F29AI_Group-17', type: 'github' as const },
  { id: 9, title: 'Lunar Mission Visualizer - PDDL Planning Simulator', category: 'Coursework', techStack: ['React', 'Next.js', 'PDDL', 'Automated Planning'], description: ['Designed frontend simulator for lunar exploration domain with PDDL-style plans.', 'Implemented mission selection, visualization, and animated SVG maps.'], link: 'https://github.com/sagarr57/F29AI_Group-17', type: 'github' as const },
  { id: 10, title: 'Crop Recommendation & Disease Detection - ML Platform', category: 'Coursework', techStack: ['Python', 'Scikit-learn', 'CNN', 'MLP', 'Random Forest'], description: ['ML platform for crop recommendation (99.72% accuracy) and plant disease detection.', 'Applied feature engineering, SMOTE, GridSearchCV, and data augmentation.'], link: 'https://github.com/sagarr57/PG-Group-3', type: 'github' as const },
]

export default function Projects() {
  const accentFor = (cat: string) => cat === 'Coursework' ? colors.status.success : colors.accent.primary

  return (
    <section id="projects" style={{ padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)', background: colors.background.tertiary, position: 'relative' }}>
      <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vw, 3rem)' }}>
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: colors.text.primary }}>Featured Projects</h2>
          <div style={{ width: 48, height: 3, background: colors.gradient.primary, borderRadius: 2, margin: '0 auto 1rem' }} />
          <p style={{ color: colors.text.secondary, maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>Where AI innovation meets execution - intelligent solutions that drive business value</p>
        </motion.div>
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(1rem, 4vw, 1.5rem)' }}>
          {projects.map(function (project, index) {
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ y: -2 }}
              style={{ background: colors.background.card, borderRadius: 12, border: `1px solid ${colors.overlay.cardBorder}`, padding: 'clamp(1.25rem, 4vw, 1.75rem)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: colors.text.primary, margin: 0 }}>{project.title}</h3>
                  <span style={{ background: `${accentFor(project.category)}20`, color: accentFor(project.category), padding: '0.2rem 0.5rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 600 }}>{project.category}</span>
                </div>
                {project.techStack && project.techStack.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {project.techStack.map((tech) => <span key={tech} style={{ background: colors.background.tertiary, color: colors.text.secondary, padding: '0.2rem 0.5rem', borderRadius: 6, fontSize: '0.75rem' }}>{tech}</span>)}
                  </div>
                )}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', color: colors.text.secondary, fontSize: '0.9375rem' }}>
                {project.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.375rem', paddingLeft: '1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: accentFor(project.category) }}>▸</span>
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/<strong>/g, `<strong style="color: ${accentFor(project.category)}">`) }} />
                  </li>
                ))}
              </ul>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem', padding: '0.625rem 1.25rem', borderRadius: 8, background: colors.gradient.primary, boxShadow: '0 2px 10px rgba(66,165,245,0.3)' }}
              >
                {project.type === 'github' ? <><FaCode size={14} /> View on GitHub</> : <><FaExternalLinkAlt size={14} /> View Live Project</>}
              </motion.a>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
