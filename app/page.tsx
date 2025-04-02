'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb'
import { styled } from 'styled-components'
import Experience from './components/experience'
import Skills from './components/skills'
import Education from './components/education'
import Projects from './components/projects'
import Certifications from './components/certifications'
import HeaderComponent from './components/header'
import Background from './components/background'
import Contact from './components/contact'
import { PageProvider } from './context/pageContext'
import { useState } from 'react'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const ContentWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  color: #ffffff;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.9);

  svg {
    font-size: 1.5rem;
    color: #3b82f6;
  }

  div {
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &:last-child {
    margin-top: 1rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    svg {
      font-size: 1.2rem;
    }

    div {
      h3 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
`

const HireMeButton = styled.a`
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border: 2px solid transparent;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(45deg, #6366f1, #8b5cf6);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    span {
      font-size: 0.9rem;
    }
  }
`

const SocialLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0.5rem;

  &:hover {
    color: #6366f1;
    transform: translateY(-2px);

    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.3rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const ViewWorkText = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.1rem;
  background: linear-gradient(45deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ProfessionalSummary = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1.5rem auto;
  }
`

// const InfoItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   color: rgba(255, 255, 255, 0.9);

//   svg {
//     font-size: 1.5rem;
//     color: #3b82f6;
//   }

//   div {
//     h3 {
//       font-size: 1.2rem;
//       font-weight: 600;
//       margin-bottom: 0.5rem;
//     }

//     p {
//       font-size: 1rem;
//       color: rgba(255, 255, 255, 0.9);
//     }
//   }

//   @media (max-width: 768px) {
//     svg {
//       font-size: 1.2rem;
//     }
//   }
// `

export default function Home() {
  const [activeTab, setActiveTab] = useState('Frontend')

  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   e.preventDefault();
  //   const href = e.currentTarget.getAttribute('href');
  //   if (href) {
  //     const targetId = href.replace('#', '');
  //     const element = document.getElementById(targetId);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // };

  return (
    <PageProvider>
      <Container>
        <BackgroundWrapper>
          <Background />
        </BackgroundWrapper>
        <ContentWrapper>
          <HeaderComponent />
          <HeroSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Name>Sagar Mamindla</Name>
              <Title>Software Engineer</Title>
            </motion.div>

            <ContactInfo>
              <ContactItem>
                <FaBriefcase className="icon" />
                <span>3+ Years</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope className="icon" />
                <a href="mailto:sagar05.ms@gmail.com">sagar05.ms@gmail.com</a>
              </ContactItem>
              <ContactItem>
                <FaPhone className="icon" />
                <span>+971 553084546</span>
              </ContactItem>
              <ContactItem>
                <FaMapMarkerAlt className="icon" />
                <span>Dubai, UAE</span>
              </ContactItem>

              <ContactItem>
                <HireMeButton href="#contact">
                  <span>Hire Me</span>
                </HireMeButton>
              </ContactItem>
            </ContactInfo>

            <ViewWorkText>Know more</ViewWorkText>
            <SocialLinks>
              <SocialLink href="https://github.com/sagarr57" target="_blank" rel="noopener noreferrer">
                <TbBrandGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/sagar-mamindla" target="_blank" rel="noopener noreferrer">
                <TbBrandLinkedin />
              </SocialLink>
            </SocialLinks>

            <ProfessionalSummary>
              Software Engineer with 3+ years of experience in front-end development, now pursuing an MSc in Artificial Intelligence. Passionate about leveraging AI and machine learning to enhance user experiences and optimize system performance. Skilled in React JS, JavaScript, and Python, with hands-on experience in automation, data-driven applications, and AI integration. Eager to apply AI techniques to real-world challenges.
            </ProfessionalSummary>
          </HeroSection>

          <Skills activeTab={activeTab} setActiveTab={setActiveTab} />
          <Experience />
          <Education />
          <Projects />
          <Certifications />

          <Contact id="contact" />
        </ContentWrapper>
      </Container>
    </PageProvider>
  )
}