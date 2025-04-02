'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'
import { styled } from 'styled-components'

const EducationSection = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const EducationTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const EducationTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #3b82f6;
    font-size: 1.2rem;
    margin: 0;
  }

  .institution {
    color: #ffffff;
    font-size: 1.1rem;
    margin-right: 1rem;
  }

  .duration {
    color: #818cf8;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const EducationIcon = styled.div<{ color: string }>`
  font-size: 2rem;
  color: ${props => props.color};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

const EducationSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const EducationPeriod = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const EducationDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export default function Education() {
  const education = [
    {
      id: 1,
      title: 'MSc Artificial Intelligence',
      institution: 'Heriot-Watt University',
      location: 'Dubai, United Arab Emirates',
      duration: 'Part time - 2026',
      description: 'Pursuing advanced studies in artificial intelligence with a focus on machine learning, deep learning, and AI applications.',
      icon: <FaGraduationCap className="icon" />,
      color: '#6366f1'
    },
    {
      id: 2,
      title: 'Bachelor of Technology',
      specialization: 'Computer Science & Engineering',
      institution: 'Keshav Memorial Institute of Technology',
      university: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad',
      duration: '2021',
      GPA: '7.1 CGPA',
      description: 'Completed undergraduate studies with a strong foundation in computer science and engineering principles.',
      icon: <FaUniversity className="icon" />,
      color: '#3b82f6'
    }
  ]

  return (
    <EducationSection id="education">
      <EducationTitle><FaGraduationCap /> Education</EducationTitle>
      <EducationTimeline>
        {education.map((edu) => (
          <EducationCard
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EducationHeader>
              <EducationIcon color={edu.color}>{edu.icon}</EducationIcon>
              <div>
                <h3>{edu.title}</h3>
                {edu.specialization && (
                  <EducationSubtitle>{edu.specialization}</EducationSubtitle>
                )}
                <span className="institution">{edu.institution}</span>
                {edu.university && (
                  <EducationSubtitle>{edu.university}</EducationSubtitle>
                )}
              </div>
            </EducationHeader>
            <EducationPeriod>• <span className="duration">{edu.duration}</span> • {edu.GPA}</EducationPeriod>
            <EducationDescription>{edu.description}</EducationDescription>
          </EducationCard>
        ))}
      </EducationTimeline>
    </EducationSection>
  )
}
