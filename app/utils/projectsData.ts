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
    id: 16,
    title: 'UK Bank Statement Extractor — ML Transaction Classifier',
    category: 'Professional',
    techStack: ['Python', 'Scikit-learn', 'pdfplumber', 'FastAPI', 'NLP'],
    featured: true,
    description: [
      '<strong>Problem:</strong> UK fintech loan applications required manual review of bank statements from 10 different banks — each with different PDF layouts, date formats, and transaction structures.',
      '<strong>Built:</strong> ML pipeline using Python, Scikit-learn, and pdfplumber to parse, extract, and categorize transactions from <strong>10 major UK bank formats</strong> — automatically classifying income, bills, gambling spend, and debt repayments.',
      '<strong>Tech:</strong> NLP-based text normalization → feature engineering → classification model → FastAPI endpoint consumed by the loan affordability engine.',
      '<strong>Impact:</strong> Shipped to production at Louis Charles — automating manual affordability assessment and cutting underwriting review time significantly.',
    ],
    link: 'https://louis-charles.com',
    type: 'live',
  },
  {
    id: 6,
    title: 'MediConnect360 — AI-Powered Healthcare Platform',
    category: 'Coursework',
    techStack: ['Python', 'NLP', 'Scikit-learn', 'Node.js', 'MongoDB', 'Docker'],
    description: [
      '<strong>Problem:</strong> Hospital management processes were manual, slow, and fragmented across patient care workflows.',
      '<strong>Built:</strong> Full hospital management system with an <strong>NLP-powered chatbot</strong> (NLTK + spaCy) for patient intent classification and appointment scheduling, plus <strong>Random Forest</strong> and <strong>Logistic Regression</strong> models for predictive analytics.',
      '<strong>AI Pipeline:</strong> Text preprocessing → TF-IDF vectorization → intent classification → automated workflow routing via Node.js/Express.',
      '<strong>Impact:</strong> <strong>50% reduction in admin overhead</strong> — CI/CD via Docker and Jenkins with 99.9% uptime.',
    ],
    link: 'https://github.com/sagarr57/F29AI_Group-17',
    type: 'github',
  },
  {
    id: 7,
    title: 'Biologically-Inspired ANN + PSO — Concrete Strength Prediction',
    category: 'Coursework',
    techStack: ['Python', 'NumPy', 'Neural Networks', 'PSO', 'Scikit-learn'],
    description: [
      '<strong>Architecture:</strong> Implemented a multi-layer ANN from scratch in Python/NumPy — configurable hidden layers, ReLU/sigmoid activations, Xavier weight initialization, and gradient descent with momentum.',
      '<strong>Optimization:</strong> Built Particle Swarm Optimisation (PSO) with ring topology and informant selection as an alternative trainer — compared convergence speed and generalization against standard backpropagation on the UCI concrete strength dataset.',
      '<strong>Evaluation:</strong> Validated on MSE, RMSE, and R² — PSO achieved competitive generalization on non-convex loss surfaces where gradient methods plateaued.',
    ],
    link: 'https://github.com/sagarr57/F21BC_PG09',
    type: 'github',
  },
  {
    id: 8,
    title: 'SudoSage — Intelligent Sudoku Solver',
    category: 'Coursework',
    techStack: ['Next.js', 'React', 'CSP', 'AC-3', 'Backtracking'],
    description: [
      '<strong>AI Core:</strong> Constraint Satisfaction Problem (CSP) solver using recursive backtracking with <strong>AC-3 arc consistency</strong> to propagate constraints and prune the search space before each assignment.',
      'Implemented <strong>MRV (Minimum Remaining Values)</strong> heuristic and forward checking to dramatically reduce backtracking — solving expert-level puzzles in milliseconds.',
      '<strong>Interface:</strong> Next.js/React board with real-time step-by-step AI reasoning visualization, solution replay, and difficulty selection.',
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
      '<strong>AI Planning:</strong> Modelled a lunar exploration domain in PDDL — defining types, predicates, and action schemas (move, sample, recharge) with preconditions and conditional effects.',
      'Built a plan validator and state-transition engine to verify plan correctness and simulate mission execution across dynamic terrain graphs.',
      '<strong>Interface:</strong> Animated SVG mission map in React/Next.js — terrain rendering, rover path animation, and step-by-step plan inspection.',
    ],
    link: 'https://github.com/sagarr57/F29AI_Group-17',
    type: 'github',
  },
  {
    id: 10,
    title: 'Crop Recommendation & Disease Detection — ML Platform',
    category: 'Coursework',
    techStack: ['Python', 'TensorFlow', 'CNN', 'Random Forest', 'Scikit-learn', 'SMOTE'],
    featured: true,
    description: [
      '<strong>Result:</strong> <strong>99.72% accuracy</strong> on crop recommendation using ensemble ML — <strong>Random Forest</strong>, <strong>MLP</strong>, <strong>SVM</strong> — with SMOTE class balancing and GridSearchCV hyperparameter tuning.',
      '<strong>CNN (TensorFlow/Keras):</strong> Built a convolutional neural network for plant disease detection from leaf images — data augmentation (rotation, flips, zoom), compared custom vs ResNet-style architectures on precision, recall, and F1.',
      '<strong>Full ML pipeline:</strong> Data cleaning → SMOTE oversampling → feature scaling → model selection → cross-validation → confusion matrix analysis.',
    ],
    link: 'https://github.com/sagarr57/PG-Group-3',
    type: 'github',
  },
]
