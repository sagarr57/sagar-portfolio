'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaRobot, FaJava } from 'react-icons/fa'
import { TbBrandReact, TbBrandNextjs, TbBrandPython, TbBrandJavascript, TbBrandTypescript, TbBrandNodejs, TbBrandMongodb, TbBrandMysql, TbBrandDocker, TbBrandGit } from 'react-icons/tb'
import { SiMaterialdesign, SiBootstrap, SiRedux, SiExpress, SiJira, SiFigma, SiPostman, SiJest, SiMocha, SiSlack, SiGooglecloud, SiHtml5, SiCss3 } from 'react-icons/si'
import { BiTestTube } from 'react-icons/bi'
import { useState } from 'react'
import { styled } from 'styled-components'

interface Skill {
  icon: React.ReactNode
  name: string
  color: string
}

const SkillsContainer = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Tab = styled.button<{ $isActive: boolean }>`
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.$isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: ${props => props.$isActive ? '600' : '500'};
  border-bottom: ${props => props.$isActive ? '2px solid #3b82f6' : 'none'};

  &:hover {
    color: #3b82f6;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    background: rgba(59, 130, 246, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const SkillIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ color }) => color};
  color: white;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

const skillsData: Record<string, Skill[]> = {
  'Programming & Development': [
    { icon: <TbBrandPython size={24} />, name: 'Python', color: '#3776AB' },
    { icon: <TbBrandJavascript size={24} />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <TbBrandTypescript size={24} />, name: 'TypeScript', color: '#3178C6' },
    { icon: <TbBrandNodejs size={24} />, name: 'Node.js', color: '#339933' },
    { icon: <FaJava size={24} />, name: 'Core Java', color: '#007396' },
  ],
  'Front-End Technologies': [
    { icon: <TbBrandReact size={24} />, name: 'React JS', color: '#61DAFB' },
    { icon: <TbBrandNextjs size={24} />, name: 'Next JS', color: '#000000' },
    { icon: <SiMaterialdesign size={24} />, name: 'Material UI', color: '#0081CB' },
    { icon: <SiBootstrap size={24} />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <SiRedux size={24} />, name: 'Redux', color: '#764ABC' },
    { icon: <SiHtml5 size={24} />, name: 'HTML', color: '#E34F26' },
    { icon: <SiCss3 size={24} />, name: 'CSS', color: '#1572B6' },
  ],
  'Back-End & Databases': [
    { icon: <SiExpress size={24} />, name: 'Express.js', color: '#000000' },
    { icon: <TbBrandMongodb size={24} />, name: 'MongoDB', color: '#47A248' },
    { icon: <TbBrandMysql size={24} />, name: 'MySQL', color: '#4479A1' },
    { icon: <FaDatabase size={24} />, name: 'RESTful APIs', color: '#007396' },
  ],
  'DevOps & Cloud': [
    { icon: <TbBrandDocker size={24} />, name: 'Docker', color: '#2496ED' },
    { icon: <SiJira size={24} />, name: 'Jenkins', color: '#D24939' },
    { icon: <TbBrandGit size={24} />, name: 'GitHub Actions', color: '#2088FF' },
    { icon: <SiGooglecloud size={24} />, name: 'Google Cloud', color: '#4285F4' },
  ],
  'Testing & Automation': [
    { icon: <SiJest size={24} />, name: 'Jest', color: '#C21325' },
    { icon: <SiMocha size={24} />, name: 'Mocha', color: '#8D6748' },
    { icon: <BiTestTube size={24} />, name: 'Playwright', color: '#61DAFB' },
    { icon: <SiPostman size={24} />, name: 'Postman', color: '#FF6C37' },
  ],
  'Project Management & Tools': [
    { icon: <SiJira size={24} />, name: 'Agile', color: '#2D70AD' },
    { icon: <SiFigma size={24} />, name: 'Figma', color: '#F04E37' },
    { icon: <SiSlack size={24} />, name: 'Slack', color: '#4A154B' },
    { icon: <TbBrandGit size={24} />, name: 'Git', color: '#0079BF' },
  ],
  'Others': [
    { icon: <FaRobot size={24} />, name: 'AI & Big Data', color: '#3776AB' },
  ]
}

const frontendSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Styled Components',
  'Framer Motion',
  'Responsive Design',
  'UI/UX Design'
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Programming & Development')

  const tabNames = Object.keys(skillsData)

  return (
    <SkillsContainer id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: '#ffffff', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}
      >
        <FaCode /> Technical Skills
      </motion.h2>

      <TabsContainer>
        {tabNames.map((tab) => (
          <Tab
            key={tab}
            $isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>

      <SkillsGrid>
        {skillsData[activeTab].map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SkillIcon color={skill.color}>
              {skill.icon}
            </SkillIcon>
            <span>{skill.name}</span>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  )
}