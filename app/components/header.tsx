'use client'

import { styled } from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { FaUser, FaBriefcase, FaCode, FaGraduationCap, FaCertificate, FaMapMarkerAlt } from 'react-icons/fa'

interface ActiveProps {
  $isActive: boolean
}

interface OptionalActiveProps {
  $isActive?: boolean
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  max-width: 700px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileOverlay = styled.div.attrs<ActiveProps>(({ $isActive }) => ({
  style: {
    display: $isActive ? 'block' : 'none',
    opacity: $isActive ? 1 : 0,
  },
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1002;
  transition: opacity 0.3s ease-in-out;
`

const MobileNav = styled.nav.attrs<ActiveProps>(({ $isActive }) => ({
  style: {
    display: $isActive ? 'flex' : 'none',
    transform: $isActive ? 'translateX(0)' : 'translateX(-100%)',
  },
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1003;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

const NavLink = styled.a.attrs<OptionalActiveProps>(({ $isActive }) => ({
  style: {
    color: $isActive ? '#3b82f6' : '#ffffff',
  },
}))`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
  background: transparent;
  border: none;

  svg {
    font-size: 0.9rem;
  }

  &:hover {
    color: #3b82f6;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.6rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-shrink: 0;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`

const Location = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  margin-right: 0.5rem;

  .icon {
    margin-right: 0.3rem;
  }
`

const MobileMenuButton = styled.button.attrs(() => ({
  style: {
    padding: '0.5rem',
  },
}))`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1004;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    font-size: 1.2rem;
  }
`

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      if (isOpen) {
        body.style.overflowX = 'hidden'
      } else {
        body.style.overflowX = 'visible'
      }
    }

    return () => {
      if (body) {
        body.style.overflowX = 'visible'
      }
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavLinkClick = () => {
    setIsOpen(false)
  }

  const handleOverlayClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Header>
        <Nav>
          <NavLink href="#" $isActive={false} onClick={handleNavLinkClick}>
            <FaUser className="icon" />
            Home
          </NavLink>
          <NavLink href="#experience" onClick={handleNavLinkClick}>
            <FaBriefcase className="icon" />
            Experience
          </NavLink>
          <NavLink href="#skills" onClick={handleNavLinkClick}>
            <FaCode className="icon" />
            Skills
          </NavLink>
          <NavLink href="#education" onClick={handleNavLinkClick}>
            <FaGraduationCap className="icon" />
            Education
          </NavLink>
          <NavLink href="#projects" onClick={handleNavLinkClick}>
            <FaCode className="icon" />
            Projects
          </NavLink>
          <NavLink href="#certifications" onClick={handleNavLinkClick}>
            <FaCertificate className="icon" />
            Certifications
          </NavLink>
        </Nav>
        <SocialLinks>
          <Location>
            <FaMapMarkerAlt className="icon" />
            Dubai, UAE
          </Location>
        </SocialLinks>
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Header>
      <MobileOverlay $isActive={isOpen} onClick={handleOverlayClick} />
      <MobileNav $isActive={isOpen}>
        <NavLink href="#" $isActive={false} onClick={handleNavLinkClick}>
          <FaUser className="icon" />
          Home
        </NavLink>
        <NavLink href="#experience" onClick={handleNavLinkClick}>
          <FaBriefcase className="icon" />
          Experience
        </NavLink>
        <NavLink href="#skills" onClick={handleNavLinkClick}>
          <FaCode className="icon" />
          Skills
        </NavLink>
        <NavLink href="#education" onClick={handleNavLinkClick}>
          <FaGraduationCap className="icon" />
          Education
        </NavLink>
        <NavLink href="#projects" onClick={handleNavLinkClick}>
          <FaCode className="icon" />
          Projects
        </NavLink>
        <NavLink href="#certifications" onClick={handleNavLinkClick}>
          <FaCertificate className="icon" />
          Certifications
        </NavLink>
      </MobileNav>
    </>
  )
}
