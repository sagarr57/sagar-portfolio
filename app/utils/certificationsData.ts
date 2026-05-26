export type CertificationIssuerKey = 'linkedin' | 'meta' | 'coursera' | 'udemy' | 'newrelic'

export interface Certification {
  title: string
  issuer: string
  issuerKey: CertificationIssuerKey
  issued: string
  expires?: string
  skills?: string[]
  credentialId?: string
  verifyUrl?: string
  verifyLabel?: string
  infoUrl?: string
  infoLabel?: string
}

export const certifications: Certification[] = [
  {
    title: 'Prompt Engineering: How to Talk to the AIs',
    issuer: 'LinkedIn Learning',
    issuerKey: 'linkedin',
    issued: 'Oct 2025',
    skills: ['Large Language Models (LLM)', 'Prompt Engineering', 'Generative AI', 'Artificial Intelligence (AI)'],
    verifyUrl:
      'https://www.linkedin.com/learning/certificates/60c8bc65295f6f27eadcb0317b3c62d940dfa72caebf12473390dba0fe66f882?u=2374954',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    issuerKey: 'meta',
    issued: 'Mar 2024',
    skills: ['React', 'JavaScript', 'Front-End Development', 'HTML', 'CSS', 'UI/UX'],
    credentialId: 'D7QMN3WV9KEV',
    verifyUrl: 'https://coursera.org/verify/professional-cert/D7QMN3WV9KEV',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan (Coursera)',
    issuerKey: 'coursera',
    issued: 'Nov 2019',
    skills: ['Python (Programming Language)'],
    credentialId: 'YDHX5JHS4V9X',
    verifyUrl: 'https://coursera.org/verify/YDHX5JHS4V9X',
  },
]
