export type ProjectType = 'live' | 'github'

export interface Project {
  id: number
  title: string
  category: 'Professional' | 'Coursework'
  techStack: string[]
  description: string[]
  link: string
  type: ProjectType
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Performance Monitoring Platform',
    category: 'Professional',
    techStack: ['React', 'Node.js', 'AI/ML', 'Data Visualization'],
    featured: true,
    description: [
      '<strong>Problem:</strong> Engineering teams needed real-time web vitals visibility across thousands of monitored properties at New Relic.',
      '<strong>Built:</strong> React-based performance monitoring dashboard with AI-driven alerting, interactive metrics, and intelligent anomaly detection.',
      '<strong>Impact:</strong> Delivered <strong>25% faster page load times</strong> and <strong>35% higher user engagement</strong> — shipped to production at New Relic.',
    ],
    link: 'https://one.newrelic.com/website-grader',
    type: 'live',
  },
  {
    id: 2,
    title: 'Intelligent Observability Landing Page',
    category: 'Professional',
    techStack: ['React', 'Next.js', 'Material UI', 'A/B Testing'],
    description: [
      '<strong>Problem:</strong> New Relic needed a high-converting entry point for their observability product to drive developer signups.',
      '<strong>Built:</strong> SEO-optimized Next.js landing page with AI-driven personalization, clean UX, and performance-tuned load paths.',
      '<strong>Impact:</strong> <strong>40% lift in conversion rates</strong> — page still live at newrelic.com.',
    ],
    link: 'https://newrelic.com/instant-observability',
    type: 'live',
  },
  {
    id: 5,
    title: 'QuickCash Direct — US Instant Loan Platform',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Node.js', 'Financial API'],
    featured: true,
    description: [
      '<strong>Problem:</strong> US borrowers needed fast, frictionless access to short-term loans ($250–$3,000) without lengthy approval cycles.',
      '<strong>Built:</strong> 3-step loan application platform connecting borrowers to a real-time lender matching network, built end-to-end.',
      '<strong>Impact:</strong> Live in the US market at quickcashdirect.com — processing active loan applications daily.',
    ],
    link: 'https://www.quickcashdirect.com/',
    type: 'live',
  },
  {
    id: 11,
    title: 'All Day Loans — UK Instalment Loan Journey',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Python', 'FastAPI', 'PingFree'],
    featured: true,
    description: [
      '<strong>Problem:</strong> UK customers needed a compliant, seamless loan journey with real-time lender matching and fast decision logic.',
      '<strong>Built:</strong> Full loan application flow with PingFree pingtree integration routing applicants to panel lenders; Python/FastAPI for broker logic.',
      '<strong>Impact:</strong> Live at alldayloans.co.uk — handling real UK loan applications with <strong>60% reduction in response time</strong> via automation.',
    ],
    link: 'https://loan.alldayloans.co.uk/',
    type: 'live',
  },
  {
    id: 12,
    title: 'PingFree Admin — Lead & Conversion Dashboard',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Python', 'FastAPI', 'Google Ads API'],
    description: [
      '<strong>Problem:</strong> Fintech teams had no single view to correlate loan applications, affiliate traffic, and lender acceptance rates.',
      '<strong>Built:</strong> Full-stack admin dashboard with Google Ads conversion tracking per lead, lender outcome reports, and real-time traffic analytics.',
      '<strong>Impact:</strong> Enabled teams to tie ad spend directly to funded applications — measurable ROI per channel.',
    ],
    link: 'https://admin.pingfree.co.uk/login',
    type: 'live',
  },
  {
    id: 4,
    title: 'Louis Charles International — Business Website',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'SEO', 'Analytics'],
    description: [
      '<strong>Problem:</strong> Dubai-based financial advisory firm needed a professional web presence to generate IVA and debt solution leads.',
      '<strong>Built:</strong> Conversion-optimized Next.js site with SEO foundations, structured content, and lead generation flows.',
      '<strong>Impact:</strong> Primary digital presence for the company — driving inbound inquiries for IVA and financial services.',
    ],
    link: 'https://louis-charles.com',
    type: 'live',
  },
  {
    id: 14,
    title: 'Dravyx AI — Voice Agent & Automation Platform',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Node.js', 'Supabase', 'Voice AI'],
    description: [
      '<strong>Problem:</strong> Sales teams needed 24/7 lead qualification and booking without adding headcount.',
      '<strong>Built:</strong> AI voice agent platform handling inbound calls, WhatsApp qualification, and calendar booking in Arabic and English.',
      '<strong>Impact:</strong> Positions Dravyx AI as an end-to-end operating layer replacing manual CRM, form, and handoff workflows.',
    ],
    link: 'https://dravyxai.com/',
    type: 'live',
  },
  {
    id: 13,
    title: 'SRR Auto Spare Parts — Company Website',
    category: 'Professional',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Zod'],
    description: [
      'Static company site showcasing Korean/Japanese auto parts, batteries, and lubricants with product catalog and gallery.',
      'Dark-mode responsive design using Tailwind 4.x, Radix UI, shadcn/ui, and type-safe contact forms (React Hook Form + Zod).',
    ],
    link: 'https://srrautomobileparts.com/',
    type: 'live',
  },
  {
    id: 15,
    title: 'The Kaash Journal — AI × Fintech Editorial',
    category: 'Professional',
    techStack: ['Next.js', 'React', 'Node.js', 'Supabase'],
    description: [
      'Live publication covering AI, fintech, and personal finance — data-driven takes on AI-powered debt management and emerging trends.',
      'Full-stack delivery: Next.js/React frontend, Node.js API layer, Supabase for content, auth, and data persistence.',
    ],
    link: 'https://www.thekaashjournal.com/',
    type: 'live',
  },
  {
    id: 6,
    title: 'MediConnect360 — AI-Powered Healthcare Platform',
    category: 'Coursework',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'NLP', 'Docker'],
    description: [
      '<strong>Problem:</strong> Hospital management processes were manual, slow, and fragmented across patient care workflows.',
      '<strong>Built:</strong> Full hospital management system with AI-powered scheduling, NLP chatbot for patient inquiries, and CI/CD pipelines via Docker/Jenkins.',
      '<strong>Impact:</strong> <strong>50% reduction in admin overhead</strong>; ML models added for predictive healthcare analytics.',
    ],
    link: 'https://github.com/sagarr57/F29AI_Group-17',
    type: 'github',
  },
  {
    id: 7,
    title: 'Biologically-Inspired ANN + PSO — Concrete Strength Prediction',
    category: 'Coursework',
    techStack: ['Python', 'Neural Networks', 'PSO', 'Scikit-learn'],
    description: [
      'Implemented a multi-layer ANN from scratch with configurable hidden layers, activation functions, and weight initialization strategies.',
      'Developed Particle Swarm Optimisation (PSO) with informant topology on UCI concrete strength dataset; compared against standard gradient descent.',
    ],
    link: 'https://github.com/sagarr57/F21BC_PG09',
    type: 'github',
  },
  {
    id: 8,
    title: 'SudoSage — Intelligent Sudoku Solver',
    category: 'Coursework',
    techStack: ['Next.js', 'React', 'CSP', 'Backtracking'],
    description: [
      'AI-powered Sudoku solver using recursive backtracking with constraint propagation (arc consistency) to reduce search space.',
      'Next.js/React interface with real-time board interaction, step-by-step visualization, and difficulty selection.',
    ],
    link: 'https://github.com/sagarr57/F29AI_Group-17',
    type: 'github',
  },
  {
    id: 9,
    title: 'Lunar Mission Visualizer — PDDL Planning Simulator',
    category: 'Coursework',
    techStack: ['React', 'Next.js', 'PDDL', 'Automated Planning'],
    description: [
      'Frontend simulator for a lunar exploration domain — animated SVG maps visualizing PDDL-style mission plans and state transitions.',
      'Supports mission selection, terrain rendering, rover path animation, and plan step inspection.',
    ],
    link: 'https://github.com/sagarr57/F29AI_Group-17',
    type: 'github',
  },
  {
    id: 10,
    title: 'Crop Recommendation & Disease Detection — ML Platform',
    category: 'Coursework',
    techStack: ['Python', 'CNN', 'MLP', 'Random Forest', 'SMOTE'],
    description: [
      '<strong>Result:</strong> <strong>99.72% accuracy</strong> on crop recommendation using ensemble ML (Random Forest, MLP, SVM) with SMOTE balancing and GridSearchCV tuning.',
      'Plant disease detection via CNN with data augmentation; compared architectures on leaf image dataset with precision/recall analysis.',
    ],
    link: 'https://github.com/sagarr57/PG-Group-3',
    type: 'github',
  },
]
