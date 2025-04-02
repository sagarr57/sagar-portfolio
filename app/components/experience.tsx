'use client'

import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { TbBrandReact, TbBrandNextjs, TbBrandPython, TbBrandJavascript, TbBrandTypescript, TbBrandNodejs, TbBrandMongodb, TbBrandMysql, TbBrandDocker, TbBrandGit } from 'react-icons/tb'
import { SiJest, SiGooglecloud, SiSwagger, SiHtml5, SiCss3 } from 'react-icons/si'
import { BiTestTube } from 'react-icons/bi'
import { styled } from 'styled-components'

const ExperienceContainer = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    opacity: 0.5;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
  }

  .logo {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    color: #3b82f6;
    font-size: 1.2rem;
    margin: 0;
  }

  .company {
    color: #ffffff;
    font-size: 1.1rem;
    margin-right: 1rem;
  }

  .duration {
    color: #818cf8;
    font-size: 0.9rem;
  }
`

const ExperienceDetails = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;

  ul {
    list-style: none;
    padding-left: 1rem;
    margin-top: 1rem;

    li {
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1rem;

      &:before {
        content: '•';
        position: absolute;
        left: 0;
        color: #3b82f6;
      }
    }
  }
`

const ExperienceTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  .tool {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
  }
`

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Associate Software Engineer',
      company: 'New Relic',
      location: 'Hyderabad',
      duration: 'Feb 2023 - Mar 2024',
      description: [
        'Built reusable components for performance monitoring, cutting load times by 25%.',
        'Designed a domain validation landing page, increasing engagement by 35%.',
        'Led QA automation with Playwright and Jest, ensuring zero critical bugs post-launch.',
        'Streamlined deployment workflows, reducing configuration time by 40%.',
      ],
      tools: [
        { icon: <TbBrandReact />, label: 'React JS' },
        { icon: <TbBrandNextjs />, label: 'Next.js' },
        { icon: <TbBrandNodejs />, label: 'Node.js' },
        { icon: <TbBrandMongodb />, label: 'MongoDB' },
        { icon: <BiTestTube />, label: 'Playwright' },
        { icon: <SiJest />, label: 'Jest' },
        { icon: <SiGooglecloud />, label: 'Google Cloud' },
      ],
    },
    {
      id: 2,
      title: 'Junior Level Engineer',
      company: 'XRG consulting pvt ltd',
      location: 'Hyderabad',
      duration: 'Sept 2021 - Jan 2023',
      description: [
        'Developed a Java-based backend service for user invitations, reducing manual follow-ups by 40%.',
        'Created a React JS modal for team invitations, enhancing user engagement.',
        'Documented API workflows with Swagger, cutting developer onboarding time by two weeks.',
      ],
      tools: [
        { icon: <TbBrandJavascript />, label: 'JavaScript' },
        { icon: <TbBrandTypescript />, label: 'TypeScript' },
        { icon: <TbBrandPython />, label: 'Python' },
        { icon: <TbBrandDocker />, label: 'Docker' },
        { icon: <SiSwagger />, label: 'Swagger' },
      ],
    },
    {
      id: 3,
      title: 'Internship Trainee',
      company: 'Manac Infotech pvt ltd',
      location: 'Hyderabad',
      duration: 'Mar 2021 - Aug 2021',
      description: [
        'Gained hands-on experience in HTML, CSS, JavaScript, and web development principles.',
      ],
      tools: [
        { icon: <SiHtml5 />, label: 'HTML' },
        { icon: <SiCss3 />, label: 'CSS' },
        { icon: <TbBrandJavascript />, label: 'JavaScript' },
        { icon: <TbBrandMysql />, label: 'MySQL'},
        { icon: <TbBrandGit />, label: 'Git' }
      ],
    },
  ]

  return (
    <ExperienceContainer id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: '#ffffff', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}
      >
        <FaBriefcase /> Work Experience
      </motion.h2>

      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: exp.id * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="content">
            <ExperienceHeader>
              <div>
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">• {exp.location} • {exp.duration}</span>
              </div>
            </ExperienceHeader>
            <ExperienceDetails>
              <ul>
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ExperienceTools>
                {exp.tools.map((tool, index) => (
                  <div className="tool" key={index}>
                    {tool.icon}
                    {tool.label}
                  </div>
                ))}
              </ExperienceTools>
            </ExperienceDetails>
          </div>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  )
}
