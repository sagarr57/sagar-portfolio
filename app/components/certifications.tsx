'use client'

import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import { styled } from 'styled-components'

const CertificationsSection = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const CertificationsTitle = styled.h2`
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`

const CertificationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
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

const CertificationIcon = styled.div<{ color: string }>`
  font-size: 2rem;
  color: ${props => props.color};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'Meta Front-End Developer',
      issuer: 'Coursera',
      date: '2024',
      link: 'https://coursera.org/share/51432707f6a45ac182e911d870bcb7bc',
      icon: <FaCertificate className="icon" />,
      color: '#3b82f6'
    },
    {
      id: 2,
      title: 'Programming for Everybody (Python)',
      issuer: 'Coursera',
      date: '2019',
      link: 'https://coursera.org/verify/YDHX5JHS4V9X',
      icon: <FaCertificate className="icon" />,
      color: '#3b82f6'
    },
    {
      id: 3,
      title: 'Google Cloud (Associate Cloud Engineer)',
      issuer: 'Udemy',
      date: '2022',
      link: 'https://www.udemy.com/certificate/UC-0fe82b05-e2fa-408f-b63c-af55fbf34238/',
      icon: <FaCertificate className="icon" />,
      color: '#3b82f6'
    }
  ]

  return (
    <CertificationsSection id="certifications">
      <CertificationsTitle><FaCertificate /> Certifications</CertificationsTitle>
      <CertificationsGrid>
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CertificationIcon color={cert.color}>{cert.icon}</CertificationIcon>
            <h3>{cert.title}</h3>
            <p className="institution">{cert.issuer}</p>
            <p className="duration">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: cert.color }}
            >
              View Certificate
            </a>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsSection>
  )
}
