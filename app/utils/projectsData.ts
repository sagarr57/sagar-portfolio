export type ProjectType = 'live' | 'github'

export interface Project {
  id: number
  title: string
  category: 'Professional' | 'Coursework'
  techStack: string[]
  description: string[]
  link: string
  type: ProjectType
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Performance Monitoring Platform',
    category: 'Professional',
    techStack: ['React', 'Node.js', 'AI/ML', 'Data Visualization'],
    description: [
      'Built a React-based performance monitoring solution with AI-driven analytics.',
      'Delivered 25% reduction in page load times and 35% increase in user engagement.',
    ],
    link: 'https://one.newrelic.com/website-grader',
    type: 'live',
  },
  {
    id: 2,
    title: 'Intelligent Observability Landing Page',
    category: 'Professional',
    techStack: ['React', 'Next.js', 'Material UI', 'AI Personalization'],
    description: [
      'Developed high-converting landing page with AI-powered personalization.',
      'Achieved 40% improvement in conversion rates through UX optimization.',
    ],
    link: 'https://newrelic.com/instant-observability',
    type: 'live',
  },
  {
    id: 4,
    title: 'Louis Charles International - Official Business Website',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'SEO', 'Analytics'],
    description: [
      'Designed and developed the official website for Louis Charles International.',
      'Implemented responsive layouts and SEO-friendly structure for lead generation.',
    ],
    link: 'https://louis-charles.com',
    type: 'live',
  },
  {
    id: 5,
    title: 'QuickCash Direct - Instant Loan Application Platform',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Loan Matching', 'Financial Services'],
    description: [
      'Developed US-based instant loan application website with $250-$3000 loans.',
      'Built 3-step loan application process connecting borrowers with trusted lenders.',
    ],
    link: 'https://www.quickcashdirect.com/',
    type: 'live',
  },
  {
    id: 11,
    title: 'All Day Loans — UK instalment loan journeys',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Python', 'FastAPI', 'PingFree', 'UK lending'],
    description: [
      'Public loan journey for UK customers on All Day Loans, built with Next.js and React.',
      'Integrated PingFree pingtree flows to match applicants with panel lenders and route leads in real time.',
      'Backed by Python and FastAPI services for reliable broker and lender integrations.',
    ],
    link: 'https://loan.alldayloans.co.uk/',
    type: 'live',
  },
  {
    id: 12,
    title: 'PingFree Admin — lead & conversion dashboard',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Python', 'FastAPI', 'Analytics', 'Google Ads'],
    description: [
      'Admin dashboard for PingFree to monitor loan applications, affiliate traffic, and lender outcomes.',
      'Surfaces Google Ads conversion data per lead so teams can tie spend to funded applications.',
      'Full-stack delivery with Next.js/React front end and FastAPI APIs for reporting and operations.',
    ],
    link: 'https://admin.pingfree.co.uk/login',
    type: 'live',
  },
  {
    id: 13,
    title: 'SRR Auto Spare Parts — static company website',
    category: 'Professional',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'React Hook Form', 'Zod'],
    description: [
      'Next.js 15 static site for auto spare parts, company profile, and product showcase.',
      'Responsive pages: Home, About, Products, Gallery, and Contact with modern UI/UX.',
      'Product areas for Korean and Japanese parts, batteries, and lubricants; dark mode with Tailwind CSS 4.x, Radix UI, shadcn/ui, and validated forms (React Hook Form + Zod).',
    ],
    link: 'https://srrautomobileparts.com/',
    type: 'live',
  },
  {
    id: 14,
    title: 'Dravyx AI — automation that helps you sell faster',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Node.js', 'Supabase', 'Voice AI', 'Automation'],
    description: [
      'Marketing site for Dravyx AI: voice agents for phone and WhatsApp (24/7 inbound, qualification, booking, Arabic & English).',
      'Intelligent automation positioning — CRM, forms, calendars, and handoffs as one operating layer.',
      'Strategic BI reporting narrative: conversion visibility, channel quality, and monthly optimization for leadership.',
    ],
    link: 'https://dravyxai.com/',
    type: 'live',
  },
  {
    id: 15,
    title: 'The Kaash Journal — AI × fintech editorial',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Node.js', 'Supabase'],
    description: [
      'Live publication covering AI, fintech, and how people manage money, invest, and plan ahead.',
      'Editorial mission: clear, data-driven takes on real-time financial tools, AI-powered debt management, and emerging fintech trends.',
      'Built with Next.js and React, Node.js APIs, and Supabase for content, auth, and data.',
    ],
    link: 'https://www.thekaashjournal.com/',
    type: 'live',
  },
  {
    id: 6,
    title: 'MediConnect360 - AI-Powered Healthcare Platform',
    category: 'Coursework',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'AI/NLP', 'Docker'],
    description: [
      'Built hospital management system with AI-powered patient care workflows.',
      'Integrated AI chatbot using NLP, reducing admin overhead by 50%.',
    ],
    link: 'https://github.com/sagarr57/F29AI_Group-17',
    type: 'github',
  },
  {
    id: 7,
    title: 'Biologically-Inspired ANN + PSO for Concrete Strength Prediction',
    category: 'Coursework',
    techStack: ['Python', 'Neural Networks', 'PSO', 'Machine Learning'],
    description: [
      'Implemented multi-layer ANN from scratch with flexible layers and activations.',
      'Developed PSO algorithm with informant topology on UCI dataset.',
    ],
    link: 'https://github.com/sagarr57/F21BC_PG09',
    type: 'github',
  },
  {
    id: 8,
    title: 'SudoSage - Intelligent Sudoku Solver',
    category: 'Coursework',
    techStack: ['Next.js', 'React', 'CSP', 'Backtracking'],
    description: [
      'Built intelligent Sudoku solver using recursive backtracking and constraint propagation.',
      'Developed Next.js/React interface with interactive puzzle input.',
    ],
    link: 'https://github.com/sagarr57/F29AI_Group-17',
    type: 'github',
  },
  {
    id: 9,
    title: 'Lunar Mission Visualizer - PDDL Planning Simulator',
    category: 'Coursework',
    techStack: ['React', 'Next.js', 'PDDL', 'Automated Planning'],
    description: [
      'Designed frontend simulator for lunar exploration domain with PDDL-style plans.',
      'Implemented mission selection, visualization, and animated SVG maps.',
    ],
    link: 'https://github.com/sagarr57/F29AI_Group-17',
    type: 'github',
  },
  {
    id: 10,
    title: 'Crop Recommendation & Disease Detection - ML Platform',
    category: 'Coursework',
    techStack: ['Python', 'Scikit-learn', 'CNN', 'MLP', 'Random Forest'],
    description: [
      'ML platform for crop recommendation (99.72% accuracy) and plant disease detection.',
      'Applied feature engineering, SMOTE, GridSearchCV, and data augmentation.',
    ],
    link: 'https://github.com/sagarr57/PG-Group-3',
    type: 'github',
  },
]
