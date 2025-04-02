'use client'

import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { styled } from 'styled-components'

interface FormData {
  name: string
  email: string
  message: string
}

interface ContactProps {
  id?: string;
}

const ContactSection = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-top: 2rem;
  }
`

const ContactTitle = styled.h2`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
  }

  input,
  textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    padding: 0.8rem;
    color: #ffffff;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  @media (max-width: 768px) {
    label {
      font-size: 0.9rem;
    }

    input,
    textarea {
      padding: 0.6rem;
      font-size: 0.9rem;
    }
  }
`

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`

const SuccessMessage = styled.div`
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 1rem;
`

const ErrorMessage = styled.div`
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 1rem;
`

export default function Contact({ id }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSuccessMessage('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ContactSection id={id}>
      <ContactTitle>Contact Me</ContactTitle>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </InputGroup>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <FaPaperPlane style={{ marginLeft: '0.5rem' }} />
        </SubmitButton>
      </Form>
      {successMessage && (
        <SuccessMessage>{successMessage}</SuccessMessage>
      )}
      {errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </ContactSection>
  )
}
