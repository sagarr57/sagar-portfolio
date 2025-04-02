'use client'

import { motion } from 'framer-motion'
import { FaProjectDiagram } from 'react-icons/fa'
import { styled } from 'styled-components'
import { PROJECTS } from '../constants/projects'

interface Project {
  id: number
  title: string
  description: string[]
  link: string
}

const ProjectsContainer = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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

  .project-title {
    color: #3b82f6;
    font-size: 1.2rem;
    margin: 0;
  }

  .project-description {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(59, 130, 246, 0.5);

    &:hover {
      background-color: rgba(59, 130, 246, 0.1);
      color: #6366f1;
    }
  }
`

const ProjectDetails = styled.div`
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

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: '#ffffff', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}
      >
        <FaProjectDiagram /> Projects
      </motion.h2>

      <ProjectsGrid>
        {PROJECTS.map((project: Project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="content">
              <h3 className="project-title">{project.title}</h3>
              <ProjectDetails>
                <ul>
                  {project.description.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                  <span className="arrow">→</span>
                </a>
              </ProjectDetails>
            </div>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}
