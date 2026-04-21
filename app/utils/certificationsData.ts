export type CertificationIssuerKey = 'linkedin' | 'meta' | 'coursera' | 'udemy' | 'newrelic'

export interface Certification {
  title: string
  issuer: string
  issuerKey: CertificationIssuerKey
  issued: string
  expires?: string
  skills?: string[]
  credentialId?: string
  /** Primary verification (Coursera verify, LinkedIn Learning certificate, Udemy certificate URL, etc.) */
  verifyUrl?: string
  /** Optional label for the primary link (default: “Verify credential”) */
  verifyLabel?: string
  /** Optional extra link (e.g. Coursera share for a program) */
  infoUrl?: string
  /** Label for the secondary link (default: “View program”) */
  infoLabel?: string
}

export const certifications: Certification[] = [
  {
    title: 'Prompt Engineering: How to Talk to the AIs',
    issuer: 'LinkedIn Learning',
    issuerKey: 'linkedin',
    issued: 'Oct 2025',
    skills: ['Large Language Models (LLM)', 'Artificial Intelligence (AI)', 'Prompt Engineering', 'Generative AI'],
    verifyUrl:
      'https://www.linkedin.com/learning/certificates/60c8bc65295f6f27eadcb0317b3c62d940dfa72caebf12473390dba0fe66f882?u=2374954',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    issuerKey: 'meta',
    issued: 'Mar 2024',
    skills: ['Front-End Development', 'React', 'JavaScript', 'HTML', 'CSS', 'UI/UX'],
    credentialId: 'D7QMN3WV9KEV',
    verifyUrl: 'https://coursera.org/verify/professional-cert/D7QMN3WV9KEV',
    infoUrl: 'https://coursera.org/share/51432707f6a45ac182e911d870bcb7bc',
    infoLabel: 'Program (Coursera)',
  },
  {
    title: 'Principles of UX/UI Design',
    issuer: 'Meta (Coursera)',
    issuerKey: 'meta',
    issued: 'Mar 2024',
    skills: ['Figma', 'User Interface Design', 'User Experience (UX)'],
    credentialId: 'K5RHMA4MBACN',
    verifyUrl: 'https://coursera.org/verify/K5RHMA4MBACN',
  },
  {
    title: 'Advanced React',
    issuer: 'Meta (Coursera)',
    issuerKey: 'meta',
    issued: 'Mar 2023',
    skills: ['React.js', 'React Hooks', 'Context API'],
    credentialId: '2U5HTGB5GQMG',
    verifyUrl: 'https://coursera.org/verify/2U5HTGB5GQMG',
  },
  {
    title: 'Version Control',
    issuer: 'Meta (Coursera)',
    issuerKey: 'meta',
    issued: 'Mar 2024',
    skills: ['Git', 'GitHub', 'Version Control'],
    credentialId: 'G6WWNDP748A2',
    verifyUrl: 'https://coursera.org/verify/G6WWNDP748A2',
  },
  {
    title: 'HTML and CSS in depth',
    issuer: 'Meta (Coursera)',
    issuerKey: 'meta',
    issued: 'Mar 2024',
    skills: ['HTML5', 'CSS3', 'Responsive Web Design', 'Iframes', 'Animations'],
    credentialId: 'Y7SVREG8E87B',
    verifyUrl: 'https://coursera.org/verify/Y7SVREG8E87B',
  },
  {
    title: 'React basics',
    issuer: 'Meta (Coursera)',
    issuerKey: 'meta',
    issued: 'Mar 2024',
    skills: ['React.js', 'React Hooks'],
    credentialId: 'PJZ46259JT9X',
    verifyUrl: 'https://coursera.org/verify/PJZ46259JT9X',
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta (Coursera)',
    issuerKey: 'meta',
    issued: 'Mar 2024',
    skills: ['JavaScript', 'Functional Programming', 'Jest', 'Testing', 'Object-Oriented Programming (OOP)'],
    credentialId: 'JCE46RHSJST5',
    verifyUrl: 'https://coursera.org/verify/JCE46RHSJST5',
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
  {
    title: 'JavaScript Basics',
    issuer: 'Udemy',
    issuerKey: 'udemy',
    issued: 'Jan 2022',
    skills: ['JavaScript'],
    credentialId: 'UC-1ea8e358-69cd-40b6-94c1-3a2d7b36b956',
    verifyUrl: 'https://www.udemy.com/certificate/UC-1ea8e358-69cd-40b6-94c1-3a2d7b36b956/',
  },
  {
    title: 'Figma UI UX Design Essentials',
    issuer: 'Udemy',
    issuerKey: 'udemy',
    issued: 'Aug 2023',
    skills: ['UI/UX', 'Figma'],
    credentialId: 'UC-d52b1992-1fe9-49a7-9d3e-de1182c6b2a8',
    verifyUrl: 'https://www.udemy.com/certificate/UC-d52b1992-1fe9-49a7-9d3e-de1182c6b2a8/',
  },
]
