// Single source of truth for the portfolio content.

export const profile = {
  name: 'Sagar Mamindla',
  location: 'Dubai, UAE',
  availability: 'Open to full-stack & AI roles · relocation-ready',
  typer: ['multi-tenant SaaS.', 'AI-powered workflows.', 'integration middleware.', 'realtime web apps.', 'ML pipelines.'],
  lede: 'Full-stack, AI and software engineering — schema to UI, models to deployment. This site included.',
  email: 'sagar05.ms@gmail.com',
  phone: '+971 55 308 4546',
  phoneHref: 'tel:+971553084546',
  github: 'https://github.com/sagarr57',
  linkedin: 'https://linkedin.com/in/sagar-mamindla',
  resume: '/resume/sagar-mamindla-resume.pdf',
  contactLine: 'Open to full-stack & AI engineering roles. I reply within a day.',
}

export const stats = [
  { value: 2100, suffix: '+', label: 'Commits in 2025–26' },
  { value: 285, suffix: 'k', label: 'Lines in my largest solo build' },
  { value: 310, suffix: '+', label: 'PostgreSQL migrations' },
  { value: 300, suffix: '+', label: 'Test files on one product' },
]

export const marquee = [
  'TypeScript', 'React 19', 'Next.js 16', 'Supabase', 'PostgreSQL', 'Laravel', 'Python', 'FastAPI', 'Tailwind 4',
  'Claude API', 'MCP', 'pgvector', 'Redis', 'AWS', 'Docker', 'GitHub Actions', 'Playwright', 'Vitest',
]

export const about = {
  statement:
    'I design and ship *multi-tenant *SaaS, *AI workflows and integration middleware — database, APIs, realtime, UI and deployment, end to end.',
}

// Pinned, scroll-scrubbed "How I work" section
export const doctrine = [
  {
    title: 'Spec ',
    accent: 'it first.',
    proof: '> Written specs · ADRs · 13-phase roadmap',
  },
  {
    title: 'Engineer ',
    accent: 'the core.',
    proof: '> 290 migrations · RLS on every tenant table',
  },
  {
    title: 'Make it ',
    accent: 'smart.',
    proof: '> Claude · OpenAI · MCP · RAG · agents',
  },
  {
    title: 'Ship & ',
    accent: 'prove it.',
    proof: '> CI: types · lint · <2% duplication · RLS tests',
  },
]

export type Category = 'Professional' | 'Research' | 'MSc Coursework' | 'Products & Freelance'
export const categories: Category[] = ['Professional', 'Research', 'MSc Coursework', 'Products & Freelance']

export interface Project {
  slug: string
  title: string
  tagline: string
  category: Category
  year: string
  summary: string
  points: string[]
  stack: string[]
  link?: { href: string; label: string }
  metric?: { value: string; label: string }
  highlights?: { v: string; l: string }[]
  featured?: boolean
  color?: string
  code?: string[]
}

export const projects: Project[] = [
  // ── Professional ──
  {
    slug: 'staffena',
    title: 'Staffena — Multi-Tenant HR & Payroll SaaS',
    tagline: 'Solo-built: hiring to payroll for any number of companies, each in an isolated workspace',
    category: 'Professional',
    year: '2026',
    featured: true,
    color: '#00c47a',
    summary:
      'Mobile-first HR platform where companies run their entire people operations, plus a provider console to onboard, bill and support them. Sole architect and developer.',
    points: [
      '127 screens across 6 surfaces and 20+ modules: core HR, leave & time, payroll, recruitment, performance, engagement, billing.',
      'PostgreSQL row-level security on every tenant table, with tests proving no cross-company leaks; RBAC mirrored in TypeScript and SQL.',
      'Claude-powered HR assistant, public REST API + webhooks, PWA with offline clock-in, English & Arabic (RTL).',
      'Keyless GitHub Actions → AWS (OIDC, S3, SSM) deploys; CI with RLS tests against disposable Postgres.',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind 4', 'Claude API', 'AWS'],
    metric: { value: '285k', label: 'lines of code · solo-built' },
    highlights: [{ v: '127', l: 'screens' }, { v: '20+', l: 'modules' }, { v: '290', l: 'migrations' }],
    link: { href: 'https://staffena.com', label: 'staffena.com' },
    code: [
      '<span class="k">create policy</span> tenant_isolation',
      '  <span class="k">on</span> employees <span class="k">using</span> (',
      '    company_id = auth.company_id() )',
      '<span class="s">✓ 290 migrations · 300+ test files</span>',
    ],
  },
  {
    slug: 'crm-saas',
    title: 'Multi-Tenant CRM & Communications SaaS',
    tagline: 'Unified inbox, browser calling and AI call transcripts for financial-services firms',
    category: 'Professional',
    year: '2026',
    featured: true,
    summary:
      'Large multi-tenant CRM with platform, tenant-admin and customer-portal dashboards. Second-highest contributor in a team of 6+.',
    points: [
      'Lead & pipeline management, workflow automation builder, calendar and billing.',
      'Unified inbox (email, SMS, WhatsApp) and WebRTC calling with recordings and AI transcripts.',
      'AI document extraction, RAG and agents; MFA, passkeys and GDPR/DSAR tooling.',
    ],
    stack: ['Laravel', 'Inertia', 'React 19', 'TypeScript', 'PostgreSQL', 'pgvector', 'Redis', 'Reverb', 'Stripe', 'Playwright'],
    metric: { value: '925', label: 'commits · 2nd of 6+ engineers' },
    highlights: [{ v: '3', l: 'dashboards' }, { v: '3', l: 'inbox channels' }, { v: '6+', l: 'engineers' }],
    code: [
      '<span class="k">on</span> call.ended <span class="k">→</span> transcribe()',
      '  inbox.thread   <span class="s">email · sms · whatsapp</span>',
      '  ai.summary     <span class="s">ready</span>',
      '<span class="k">emit</span> lead.updated <span class="k">→</span> reverb://tenant',
    ],
  },
  {
    slug: 'ai-pm',
    title: 'AI Project-Management Platform',
    tagline: 'Hackathon build that replaced off-the-shelf PM tools',
    category: 'Professional',
    year: '2026',
    featured: true,
    color: '#a78bfa',
    summary: 'Ideas → specs → tasks, Gantt charts, planning and 1:1s — with AI that turns a brain dump into structured work. Top contributor in a team of 3.',
    points: [
      'AI “brain dump” that splits free text into work items; AI feature builder with GitHub-aware codebase context.',
      'Workflow engine, Slack & Notion connectors, MCP integration and a UAT Chrome extension.',
      'Four gated CI checks per PR, branch protection and CODEOWNERS.',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Neon', 'Drizzle', 'Vercel AI SDK', 'MCP', 'NextAuth', 'Playwright'],
    metric: { value: '143k', label: 'lines of code · ~430 commits' },
    highlights: [{ v: '#1', l: 'contributor' }, { v: '4', l: 'CI gates / PR' }, { v: 'MCP', l: 'integration' }],
    code: [
      '<span class="k">brain_dump</span>("fix login, add gantt export")',
      '  <span class="k">→</span> bug   <span class="s">Login fails on SSO</span>',
      '  <span class="k">→</span> task  <span class="s">Gantt CSV export</span>',
    ],
  },
  {
    slug: 'ai-middleware',
    title: 'AI Calling & CRM Integration Middleware',
    tagline: 'Connects a CRM, an AI outbound-calling agent and a booking system',
    category: 'Professional',
    year: '2026',
    featured: true,
    color: '#ff6a00',
    summary: 'Python middleware I led: scheduled AI call-backs, two-way data sync and bank-statement intelligence, running as a managed Linux service.',
    points: [
      'Scheduled automatic AI call-backs for unanswered leads.',
      'Bi-directional CRM ↔ marketing-platform sync via webhooks.',
      'Bank-statement PDF extraction with a scikit-learn classifier and LLM fallback.',
    ],
    stack: ['Python 3.11', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'APScheduler', 'scikit-learn', 'OpenAI'],
    metric: { value: '28/43', label: 'commits · lead developer' },
    highlights: [{ v: '3', l: 'systems connected' }, { v: 'ML+LLM', l: 'classifier' }, { v: '~10k', l: 'lines of Python' }],
    code: [
      '<span class="k">@scheduler</span>.every(<span class="s">"15m"</span>)',
      '<span class="k">def</span> call_back_unanswered():',
      '    <span class="k">for</span> lead <span class="k">in</span> crm.missed(): agent.dial(lead)',
    ],
  },
  {
    slug: 'hr-portal',
    title: 'Internal HR Portal',
    tagline: 'Solo-built staff self-service portal — live with real users',
    category: 'Professional',
    year: '2026',
    summary: 'Leave, records, handbook quizzes and wellbeing check-ins; its business logic later became the foundation of Staffena.',
    points: ['Role-scoped access for staff, supervisors and HR.', '26 migrations including RLS hardening.'],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Recharts', 'Vitest'],
    metric: { value: '130', label: 'commits · in production' },
  },
  {
    slug: 'telephony-rd',
    title: 'Telephony R&D — Open-Source Dialler Evaluation',
    tagline: 'Evaluated PBX/dialler platforms and built live-audio proofs of concept',
    category: 'Professional',
    year: '2026',
    summary: 'Python Asterisk AMI event listener and live-audio tap POC; co-authored the findings report.',
    points: ['Compared open-source PBX and dialler platforms for an AI calling stack.'],
    stack: ['Python', 'Asterisk AMI', 'VoIP', 'Linux'],
  },
  {
    slug: 'case-crm',
    title: 'AI Case-Management CRM Prototype',
    tagline: 'Turborepo monorepo exposing domain modules to AI agents via MCP',
    category: 'Professional',
    year: '2026',
    summary: 'Contributed CI fixes, test coverage, ESLint and ORM security upgrades.',
    points: ['Domain modules served to AI agents through MCP servers.'],
    stack: ['Next.js', 'Drizzle', 'PostgreSQL', 'MCP', 'Turborepo'],
  },
  {
    slug: 'eligibility-api',
    title: 'Eligibility Rules API',
    tagline: 'Timed full-stack exercise: 5 business rules + a validated 3-step wizard',
    category: 'Professional',
    year: '2026',
    summary: 'REST endpoint applying five business rules, with a validated three-step React wizard.',
    points: ['Tested end to end with Pest and Vitest.'],
    stack: ['Laravel', 'React', 'Pest', 'Vitest'],
  },
  {
    slug: 'bank-statements',
    title: 'UK Bank Statement Extractor — ML Transaction Classifier',
    tagline: 'Parses statements from 10 UK banks and classifies every transaction',
    category: 'Professional',
    year: '2025',
    color: '#00c47a',
    summary:
      'Loan affordability checks meant manually reading bank statements in ten different PDF layouts. I built a pipeline that parses, normalises and classifies transactions automatically, served to the affordability engine as an API.',
    points: [
      'pdfplumber parsers for 10 major UK bank layouts, each with its own date formats and column structures.',
      'NLP text normalisation → feature engineering → scikit-learn classifier for income, bills, gambling and debt repayments.',
      'FastAPI endpoint consumed by the production loan affordability engine.',
    ],
    stack: ['Python', 'scikit-learn', 'pdfplumber', 'NLP', 'FastAPI'],
    metric: { value: '10', label: 'UK bank formats automated' },
    code: [
      'TESCO STORES 2231      <span class="k">→</span> <span class="s">groceries</span>',
      'SKY BET LTD            <span class="k">→</span> <span class="s">gambling</span>',
      'HMRC SALARY BACS       <span class="k">→</span> <span class="s">income</span>',
      'KLARNA* PAYMENT        <span class="k">→</span> <span class="s">debt</span>',
    ],
  },
  {
    slug: 'alldayloans',
    title: 'All Day Loans — UK Instalment Loan Journey',
    tagline: 'Compliant UK instalment-loan application with real-time lender matching',
    category: 'Professional',
    year: '2025',
    summary: 'End-to-end loan application flow routed through a ping-tree to panel lenders, with Python/FastAPI broker logic.',
    points: ['Ping-tree integration routing applicants to panel lenders in real time.', 'Automation cut response time by 60%.'],
    stack: ['Next.js', 'React', 'Python', 'FastAPI'],
    metric: { value: '60%', label: 'faster response' },
    link: { href: 'https://loan.alldayloans.co.uk/', label: 'alldayloans.co.uk' },
  },
  {
    slug: 'pingfree',
    title: 'PingFree Admin — Lead & Conversion Dashboard',
    tagline: 'Ties ad spend to funded loans, per lead and per channel',
    category: 'Professional',
    year: '2025',
    summary: 'Admin dashboard correlating loan applications, affiliate traffic and lender acceptance, with Google Ads conversion tracking per lead.',
    points: ['Lender outcome reports and real-time traffic analytics.', 'Google Ads API conversion uploads for measurable ROI per channel.'],
    stack: ['Next.js', 'Python', 'FastAPI', 'Google Ads API'],
    link: { href: 'https://admin.pingfree.co.uk/login', label: 'admin.pingfree.co.uk' },
  },
  {
    slug: 'quickcash',
    title: 'QuickCash Direct — US Instant Loan Platform',
    tagline: 'US instant-loan platform — $250 to $3,000 in three steps',
    category: 'Professional',
    year: '2025',
    summary: 'Three-step application connecting US borrowers to a lender network, built end to end.',
    points: ['Short, trust-focused application flow.', 'Real-time lender matching network integration.'],
    stack: ['Next.js', 'React', 'Node.js'],
    link: { href: 'https://www.quickcashdirect.com/', label: 'quickcashdirect.com' },
  },
  {
    slug: 'louischarles',
    title: 'Louis Charles International — Business Website',
    tagline: 'Corporate site for a Dubai financial-services group',
    category: 'Professional',
    year: '2025',
    summary: 'Conversion-focused Next.js site with SEO foundations and lead generation for IVA and debt solutions.',
    points: ['Structured content and SEO foundations.', 'Lead capture feeding the CRM.'],
    stack: ['Next.js', 'React', 'SEO'],
    link: { href: 'https://louis-charles.com', label: 'louis-charles.com' },
  },
  {
    slug: 'newrelic-grader',
    title: 'AI-Powered Performance Monitoring Platform',
    tagline: 'New Relic website grader — web-vitals dashboards in React',
    category: 'Professional',
    year: '2023',
    color: '#1ce783',
    summary:
      'At New Relic I built reusable React components for performance-monitoring dashboards and the public website grader, used to track web vitals across monitored properties.',
    points: [
      'Component work that cut dashboard load times by 25%.',
      'Domain-validation landing page that lifted engagement by 35%.',
      'Playwright + Jest automation with zero critical bugs shipped to production.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Playwright', 'Jest', 'GCP'],
    metric: { value: '25%', label: 'faster dashboards' },
    link: { href: 'https://one.newrelic.com/website-grader', label: 'Website grader' },
    code: ['LCP   <span class="s">1.8s</span>  ▇▇▇▇▇▇▁▁', 'INP   <span class="s">120ms</span> ▇▇▇▇▇▇▇▁', 'CLS   <span class="s">0.04</span>  ▇▇▇▇▇▇▇▇', '<span class="k">grade</span> A'],
  },
  {
    slug: 'newrelic-io',
    title: 'Intelligent Observability Landing Page',
    tagline: 'New Relic landing page that lifted conversions 40%',
    category: 'Professional',
    year: '2023',
    summary: 'SEO-optimised Next.js landing experience with performance-tuned load paths.',
    points: ['40% lift in conversion rate.'],
    stack: ['React', 'Next.js', 'Material UI'],
    metric: { value: '40%', label: 'conversion lift' },
    link: { href: 'https://newrelic.com/instant-observability', label: 'newrelic.com' },
  },

  // ── Research ──
  {
    slug: 'mindvibe',
    title: 'MindVibe — Social Media Intelligence for Mental Health',
    tagline: 'MSc dissertation: explainable ML on behaviour and text, shipped as an API and a user-tested app',
    category: 'Research',
    year: '2026',
    featured: true,
    color: '#a78bfa',
    summary:
      'Can ML on everyday social-media behaviour and text give early, explainable mental-health signals — and can that be built into something people want to use? Six public datasets, 17,410 records, tabular and transformer models, then a full product.',
    points: [
      'Fine-tuned DistilBERT reached 0.834 weighted F1 on MentalDistress (5-class) and 0.797 on Dreaddit stress — beating TF-IDF baselines on every text dataset.',
      'Found label leakage from clinical features (F1 = 1.0) and rebuilt models on 9 behavioural features — XGBoost 0.774 weighted F1 across 12 classes. SHAP used to explain every model.',
      'Shipped a FastAPI analysis API, a Streamlit research dashboard and the MindVibe Next.js app; a 15-person UX study scored SUS 77.4 and 93% would use it again.',
    ],
    stack: ['Python', 'DistilBERT', 'XGBoost', 'LightGBM', 'SHAP', 'FastAPI', 'Streamlit', 'Next.js 16', 'Neon', 'Drizzle'],
    metric: { value: '0.834', label: 'weighted F1 · DistilBERT' },
    highlights: [{ v: '6', l: 'datasets' }, { v: '17k', l: 'records' }, { v: '77.4', l: 'SUS score' }],
    code: [
      '<span class="k">model</span>       dreaddit  reddit  distress',
      'tfidf+lr    0.718     0.620   0.785',
      'distilbert  <span class="s">0.797</span>     <span class="s">0.743</span>   <span class="s">0.834</span>',
    ],
  },

  // ── MSc Coursework ──
  {
    slug: 'gmaps-reviews',
    title: 'Google Maps Review Rating Prediction',
    tagline: 'F21AA · 288k reviews, classical models → transformers → Kaggle ensemble',
    category: 'MSc Coursework',
    year: '2026',
    summary: 'Predicting 1–5 star ratings from review text. I owned the vector-space features and sequence-modelling work in a group of five.',
    points: [
      'Count/TF-IDF/n-gram features and averaged GloVe; NB, LogReg, SVM, RF tuned with 5-fold CV.',
      'Bi-LSTM and DistilBERT (macro F1 0.587), then RoBERTa / DeBERTa blends.',
      'Final trimmed-mean ensemble of four transformers scored 0.694 on the Kaggle leaderboard.',
    ],
    stack: ['PyTorch', 'HuggingFace', 'scikit-learn', 'GloVe', 'LDA'],
    metric: { value: '0.694', label: 'Kaggle public score' },
  },
  {
    slug: 'crop',
    title: 'Crop Recommendation & Disease Detection — ML Platform',
    tagline: 'F21DL · ensemble ML for 22 crops + a CNN for 38 leaf diseases',
    category: 'MSc Coursework',
    year: '2025',
    summary: 'Soil and climate data recommend a crop; leaf photos diagnose disease. I built the MLP and the model-comparison framework.',
    points: [
      'Ensemble crop recommender reached 99.72% accuracy across 22 crop classes.',
      'Custom 1.3M-parameter CNN with AdamW and label smoothing: 86.7% test accuracy on 38 classes.',
    ],
    stack: ['TensorFlow', 'Keras', 'scikit-learn', 'CNN', 'Plotly'],
    metric: { value: '99.72%', label: 'crop accuracy' },
  },
  {
    slug: 'ann-pso',
    title: 'Biologically-Inspired ANN + PSO — Concrete Strength Prediction',
    tagline: 'F21BC · MLP and informant-based PSO written from scratch in NumPy',
    category: 'MSc Coursework',
    year: '2025',
    summary: 'No ML libraries: a multi-layer perceptron trained by particle swarm optimisation to predict concrete compressive strength.',
    points: [
      'Studies over architecture, PSO coefficients and evaluation budget, 10 runs per configuration.',
      'Best configuration reached a test MAE of 6.80 ± 0.51 MPa.',
    ],
    stack: ['Python', 'NumPy', 'PSO', 'Neural networks'],
  },
  {
    slug: 'sudosage',
    title: 'SudoSage — Intelligent Sudoku Solver',
    tagline: 'F29AI · CSP backtracking solver with live AI-reasoning metrics',
    category: 'MSc Coursework',
    year: '2025',
    summary: 'Constraint-satisfaction Sudoku solver with heuristics, behind a FastAPI + Next.js interface.',
    points: ['Most-constrained-variable and value-ordering heuristics.'],
    stack: ['Python', 'FastAPI', 'Next.js', 'CSP', 'pytest'],
  },
  {
    slug: 'lunar',
    title: 'Lunar Mission Visualizer — PDDL Planning Simulator',
    tagline: 'F29AI · automated planning for a lunar lander & rover',
    category: 'MSc Coursework',
    year: '2025',
    summary: 'PDDL domains for an ESA lunar mission, extended with astronauts, visualised in React.',
    points: ['Valid plans for three missions (13, 21 and 28 steps).'],
    stack: ['PDDL', 'Automated planning', 'React', 'Next.js'],
  },
  {
    slug: 'mediconnect',
    title: 'MediConnect360 — AI-Powered Healthcare Platform',
    tagline: 'Hospital management with an NLP patient chatbot',
    category: 'MSc Coursework',
    year: '2025',
    summary: 'Hospital management system with an NLP intent-classification chatbot for patient queries and scheduling.',
    points: ['NLTK/spaCy intent classification routed into Node/Express workflows.'],
    stack: ['Python', 'NLP', 'Node.js', 'MongoDB', 'Docker', 'Jenkins'],
  },
  {
    slug: 'workplace',
    title: 'Workplace Culture Sentiment Analysis',
    tagline: 'F21AA · 3,700 YouTube & Reddit comments on Google’s culture',
    category: 'MSc Coursework',
    year: '2025',
    summary: 'Collected, labelled and classified public discussion of workplace culture, with topic modelling.',
    points: ['YouTube + Reddit collectors; TextBlob/VADER ensemble labelling with manual review.', 'TF-IDF + SVM reached 68.9% test accuracy; LDA topics via pyLDAvis.'],
    stack: ['scikit-learn', 'NLTK', 'VADER', 'gensim'],
  },
  {
    slug: 'active-life',
    title: 'Active Life — Fitness for Older Adults',
    tagline: 'F21AD · multimodal (voice, gesture, haptic) app prototype for 65+',
    category: 'MSc Coursework',
    year: '2026',
    summary: 'Personas, storyboards and hi-fi Figma prototype, plus an individual evaluation protocol (think-aloud, task success, SUS).',
    points: ['Accessibility-first multimodal interaction design.', 'Evaluation protocol with design iterations.'],
    stack: ['Figma', 'HCI', 'UX research'],
  },

  // ── Products & Freelance ──
  {
    slug: 'dravyx',
    title: 'Dravyx AI — Voice Agent & Automation Platform',
    tagline: 'My AI-automation studio — voice & WhatsApp agents for service businesses',
    category: 'Products & Freelance',
    year: '2026',
    featured: true,
    color: '#ff6a00',
    summary:
      'The studio I co-founded in Dubai, building voice/WhatsApp AI agents, automation and BI for real-estate, clinics and professional services. The site itself runs a business-trained Claude assistant.',
    points: [
      '“Ask Dravyx” chat on a Vercel Edge function calling the Claude API, grounded by a detailed business system prompt and rate-limited per IP.',
      'Interactive ROI estimator, Calendly booking, and a Supabase lead pipeline with an admin dashboard.',
      'Client delivery includes the SRR Auto Parts catalogue and other sites.',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Claude API', 'Vercel Edge', 'Supabase'],
    link: { href: 'https://dravyxai.com/', label: 'dravyxai.com' },
    code: [
      '<span class="k">user</span>  Can it book viewings on WhatsApp?',
      '<span class="k">ai</span>    <span class="s">Yes — it qualifies the lead, checks</span>',
      '      <span class="s">your calendar and confirms the slot.</span>',
    ],
  },
  {
    slug: 'ipf',
    title: 'IPF UAE Digital Platform',
    tagline: 'Community & membership platform in 10 Indian languages',
    category: 'Products & Freelance',
    year: '2026',
    summary:
      'Website and member platform for a UAE diaspora organisation: 37 public routes, member portal with QR ID cards, events with RSVP and check-in, and a role-scoped CMS with approval workflow.',
    points: [
      'Role × scope RBAC enforced server-side; Supabase Postgres with row-level security on every table.',
      'Draft → review → publish workflow with an append-only audit log; 10-language i18n with fallback.',
      'Single serverless API on Vercel with Upstash rate limiting and cron jobs.',
    ],
    stack: ['React 19', 'TypeScript', 'Supabase', 'Vercel', 'Upstash Redis', 'Tailwind 4'],
    link: { href: 'https://ipf-uae-digital-platform.vercel.app', label: 'Live site' },
  },
  {
    slug: 'kaash',
    title: 'The Kaash Journal — AI × Fintech Editorial',
    tagline: 'AI × fintech publication with its own CMS and analytics',
    category: 'Products & Freelance',
    year: '2026',
    summary: 'SEO-focused publication with scheduled publishing, first-party analytics and an admin dashboard — 100+ commits, built solo.',
    points: ['Own tracking API (views, time-on-page, conversions) stored in Supabase alongside GA4.', 'Daily cron for scheduled posts; Search Console and security-header hardening.'],
    stack: ['React', 'Vite', 'Supabase', 'Vercel Cron', 'GA4'],
    link: { href: 'https://www.thekaashjournal.com/', label: 'thekaashjournal.com' },
  },
  {
    slug: 'srr',
    title: 'SRR Auto Spare Parts — Company Website',
    tagline: 'Parts catalogue with vehicle-fitment search and WhatsApp ordering',
    category: 'Products & Freelance',
    year: '2026',
    summary: 'Catalogue for a UAE parts business: pick your vehicle, see compatible parts, send the cart as a WhatsApp order.',
    points: ['Prisma schema for parts, fitments and vehicles; ~4.7k parts imported from CSV.', 'Admin panel with JWT auth, image uploads and zod-validated forms.'],
    stack: ['Next.js 15', 'Prisma', 'PostgreSQL', 'Tailwind 4', 'shadcn/ui'],
    link: { href: 'https://srrautomobileparts.com/', label: 'srrautomobileparts.com' },
  },
  {
    slug: 'enercap',
    title: 'Enercap — Immersive 3D Concept',
    tagline: 'Scroll-driven 3D website proposal for a supercapacitor company',
    category: 'Products & Freelance',
    year: '2026',
    summary: 'A rebuild proposal with scrollytelling and an explorable 3D “energy world” — guided or free-roam, with mobile quality switching.',
    points: ['Three.js / React Three Fiber scenes with post-processing and GSAP ScrollTrigger.', 'Semantic fallback for low-power devices.'],
    stack: ['Next.js', 'Three.js', 'R3F', 'GSAP'],
    link: { href: 'https://github.com/sagarr57/Enercap_demo', label: 'GitHub' },
  },
  {
    slug: 'worldcup',
    title: 'World Cup 2026 Sweepstake',
    tagline: 'Live-score prediction game for colleagues during the tournament',
    category: 'Products & Freelance',
    year: '2026',
    summary: 'Team draw, predictions that lock before kickoff, and auto-calculated leaderboards from live scores — zero-build front end on serverless functions.',
    points: ['Live scores from ESPN with fallback source and caching.', 'Group + knockout scoring, picks stored in Netlify Blobs.'],
    stack: ['JavaScript', 'Netlify Functions', 'Netlify Blobs'],
  },
  {
    slug: 'vibeinn-backend',
    title: 'VibeInn — Social App Backend',
    tagline: 'API for a social app with real-time chat, calls and stories',
    category: 'Products & Freelance',
    year: '2025',
    summary: 'Express/TypeScript backend for a mobile social app: real-time messaging, media, moderation.',
    points: ['Socket.io real-time layer; Postgres via Sequelize plus MongoDB.', 'S3 media with AWS Rekognition moderation; Swagger-documented API.'],
    stack: ['Node.js', 'Express', 'TypeScript', 'Socket.io', 'PostgreSQL', 'AWS'],
  },
]

export const experience = [
  {
    role: 'AI Solution Engineer',
    company: 'Louis Charles International',
    location: 'Dubai, UAE',
    dates: 'Jul 2025 — Present',
    current: true,
    summary: 'Full-stack engineer on multi-tenant SaaS, AI workflows and integration middleware.',
    points: [
      'Solo-built Staffena, a multi-tenant HR & payroll SaaS — 127 screens, 20+ modules, ~285k lines.',
      '2nd-highest contributor (~925 commits) to a multi-tenant CRM with WebRTC calling and AI transcripts.',
      'Top contributor to an AI project-management platform; lead developer of AI calling middleware.',
      'ML bank-statement classifier for 10 UK bank formats; delivered QuickCash Direct, All Day Loans and PingFree Admin.',
    ],
    stack: ['Next.js', 'Laravel', 'TypeScript', 'Supabase', 'Python', 'AWS'],
  },
  {
    role: 'Co-founder & AI Engineer',
    company: 'Dravyx AI',
    location: 'Dubai, UAE',
    dates: 'Apr 2026 — Present',
    current: true,
    summary: 'AI automation studio for service businesses.',
    points: ['Voice & WhatsApp AI agents, automation and BI for clients.', 'Delivered client sites including SRR Auto Parts.'],
    stack: ['React', 'Claude API', 'Supabase', 'Vercel'],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Decarbeon',
    location: 'Dubai, UAE',
    dates: 'Feb 2025 — Apr 2025',
    summary: 'Sustainability analytics for ESG reporting.',
    points: ['ESG and energy dashboards with Next.js, Chart.js and Power BI.', 'WordPress app for sustainability content.'],
    stack: ['Next.js', 'Tailwind', 'Chart.js', 'Power BI'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'New Relic',
    location: 'Hyderabad, India',
    dates: 'Feb 2023 — Mar 2024',
    summary: 'Front-end engineering on observability products.',
    points: [
      'React dashboard components — 25% faster load times.',
      'Landing page that lifted engagement 35%.',
      'Playwright & Jest automation — zero critical bugs; CI/CD config overhead cut 40%.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Playwright', 'Jest'],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    dates: 'Apr 2024 — Jan 2025',
    summary: 'AI e-commerce and client automation.',
    points: [
      'React, Node and MongoDB store with ML product recommendations and an AI support chatbot.',
      'Client sites with WhatsApp Business API + n8n lead capture — 50% less manual follow-up.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Python', 'n8n'],
  },
  {
    role: 'Junior Engineer',
    company: 'XRG Consulting',
    location: 'Hyderabad, India',
    dates: 'Sep 2021 — Jan 2023',
    summary: 'Backend services and developer tooling.',
    points: ['Java invitation service — 40% fewer manual follow-ups.', 'Swagger docs that cut onboarding by two weeks.'],
    stack: ['Java', 'React', 'TypeScript', 'Docker', 'Swagger'],
  },
]

export const skills = [
  { group: 'AI / ML', note: 'LLM products and classical ML', items: ['Claude & OpenAI APIs', 'Vercel AI SDK', 'MCP', 'RAG & pgvector', 'AI agents', 'LangChain', 'Whisper', 'ElevenLabs', 'PyTorch', 'TensorFlow / Keras', 'Transformers', 'scikit-learn', 'XGBoost', 'SHAP'] },
  { group: 'Frontend', note: 'Interfaces people enjoy', items: ['TypeScript', 'JavaScript', 'React 19', 'Next.js 15/16', 'Tailwind 4', 'shadcn/ui', 'TanStack', 'Inertia.js', 'React Flow', 'PWA'] },
  { group: 'Backend', note: 'APIs and services', items: ['Node.js', 'Express', 'Laravel / PHP', 'Python / FastAPI', 'Java', 'REST + OpenAPI', 'WebSockets', 'Queues'] },
  { group: 'Databases', note: 'Data with isolation built in', items: ['PostgreSQL + RLS', 'pgvector', 'Supabase', 'Neon', 'Drizzle', 'MongoDB', 'MySQL', 'Redis'] },
  { group: 'Integrations', note: 'Systems talking to systems', items: ['WebRTC & VoIP', 'Asterisk', 'WhatsApp Business API', 'SMS', 'Stripe', 'Webhooks', 'n8n', 'Slack & Notion'] },
  { group: 'Cloud & DevOps', note: 'Ship it safely', items: ['AWS (S3, SSM, EC2, OIDC)', 'Vercel + Cron', 'Docker', 'GitHub Actions', 'Linux / systemd', 'Turborepo', 'pnpm'] },
  { group: 'Quality & Security', note: 'Guards on production', items: ['Playwright', 'Vitest', 'Jest', 'Pest', 'RLS tests', 'RBAC', 'MFA / passkeys', 'GDPR tooling'] },
]

export const education = [
  {
    degree: 'MSc Artificial Intelligence',
    school: 'Heriot-Watt University',
    location: 'Dubai',
    dates: 'Jan 2025 — Dec 2026',
    note: 'ML, deep learning, NLP & text analytics, bio-inspired computation, intelligent agents, HCI',
  },
  {
    degree: 'B.Tech Computer Science & Engineering',
    school: 'Keshav Memorial Institute of Technology',
    location: 'Hyderabad',
    dates: 'Jun 2018 — Aug 2021',
  },
]

export const certifications = [
  {
    title: 'Prompt Engineering: How to Talk to the AIs',
    issuer: 'LinkedIn Learning',
    date: 'Oct 2025',
    url: 'https://www.linkedin.com/learning/certificates/60c8bc65295f6f27eadcb0317b3c62d940dfa72caebf12473390dba0fe66f882?u=2374954',
  },
  { title: 'Meta Front-End Developer', issuer: 'Meta · Coursera', date: 'Mar 2024', url: 'https://coursera.org/verify/professional-cert/D7QMN3WV9KEV' },
  { title: 'Programming for Everybody (Python)', issuer: 'University of Michigan · Coursera', date: 'Nov 2019', url: 'https://coursera.org/verify/YDHX5JHS4V9X' },
]
