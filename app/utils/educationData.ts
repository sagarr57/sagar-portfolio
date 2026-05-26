export interface EducationEntry {
  institution: string
  degree: string
  dates: string
  location?: string
  grade?: string
  coursework?: string
}

export const education: EducationEntry[] = [
  {
    institution: 'Heriot-Watt University',
    degree: 'Master of Science (MS), Artificial Intelligence',
    dates: 'Jan 2025 – Dec 2026 (Expected)',
    location: 'Dubai, United Arab Emirates',
    coursework: 'Machine Learning · Deep Learning · Computer Vision · NLP · Intelligent Agents',
  },
  {
    institution: 'Keshav Memorial Institute of Technology',
    degree: 'B.Tech, Computer Science & Engineering',
    dates: 'Jun 2018 – Aug 2021',
    location: 'Hyderabad, India',
  },
]
