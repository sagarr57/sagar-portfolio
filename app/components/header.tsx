'use client'

import { styled } from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb'
import { FaUser, FaBriefcase, FaCode, FaGraduationCap, FaCertificate, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    padding: 0.8rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
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

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileNav = styled.nav<{ $isActive: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  ${({ $isActive }) =>
    $isActive
      ? `
          transform: translateX(0);
        `
      : ''}
`

const NavLink = styled.a<{ $isActive?: boolean }>`
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

  ${({ $isActive }) =>
    $isActive
      ? `
          color: #3b82f6;
        `
      : ''}

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.6rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

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

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.3rem;

  @media (max-width: 768px) {
    display: block;
  }
`

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Header>
      <Nav>
        <NavLink href="#" $isActive={false}>
          <FaUser className="icon" />
          Home
        </NavLink>
        <NavLink href="#experience">
          <FaBriefcase className="icon" />
          Experience
        </NavLink>
        <NavLink href="#skills">
          <FaCode className="icon" />
          Skills
        </NavLink>
        <NavLink href="#education">
          <FaGraduationCap className="icon" />
          Education
        </NavLink>
        <NavLink href="#projects">
          <FaCode className="icon" />
          Projects
        </NavLink>
        <NavLink href="#certifications">
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
      <MobileNav $isActive={isOpen}>
        <NavLink href="#" $isActive={false}>
          <FaUser className="icon" />
          Home
        </NavLink>
        <NavLink href="#experience">
          <FaBriefcase className="icon" />
          Experience
        </NavLink>
        <NavLink href="#skills">
          <FaCode className="icon" />
          Skills
        </NavLink>
        <NavLink href="#education">
          <FaGraduationCap className="icon" />
          Education
        </NavLink>
        <NavLink href="#projects">
          <FaCode className="icon" />
          Projects
        </NavLink>
        <NavLink href="#certifications">
          <FaCertificate className="icon" />
          Certifications
        </NavLink>
      </MobileNav>
    </Header>
  )
}
