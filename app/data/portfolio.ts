// Single source of truth for the portfolio content.

export const profile = {
  name: 'Sagar Mamindla',
  location: 'Dubai, UAE',
  availability: 'Open to AI engineering roles · relocation-ready',
  typer: ['voice AI for live calls.', 'ML pipelines.', 'multi-tenant SaaS.', 'LLM-powered workflows.', 'fintech platforms.'],
  lede: 'AI & full-stack engineer. I design, build and ship web products — this site included.',
  email: 'sagar05.ms@gmail.com',
  phone: '+971 55 308 4546',
  phoneHref: 'tel:+971553084546',
  github: 'https://github.com/sagarr57',
  linkedin: 'https://linkedin.com/in/sagar-mamindla',
  resume: '/resume/sagar-mamindla-resume.pdf',
  contactLine: 'Open to AI & full-stack roles. I reply within a day.',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Years in production' },
  { value: 25, suffix: '', label: 'Projects shipped' },
  { value: 10, suffix: '+', label: 'Live products' },
  { value: 6, suffix: '', label: 'ML datasets in my dissertation' },
]

export const marquee = [
  'Python', 'PyTorch', 'Transformers', 'XGBoost', 'Claude API', 'FastAPI', 'Next.js', 'React', 'TypeScript',
  'Laravel', 'PostgreSQL', 'Redis', 'Twilio', 'AWS', 'Supabase', 'SHAP', 'Playwright',
]

export const about = {
  statement:
    'I build *AI-powered *web *products — from the pixel on screen to the model behind it.',
  pillars: [
    { title: 'Build', text: 'Full-stack from schema to UI: Laravel, Node and FastAPI backends with React and Next.js front ends.' },
    { title: 'Apply AI', text: 'LLM workflows, voice AI, NLP and classical ML — with evaluation, explainability and guardrails.' },
    { title: 'Research', text: 'Dissertation on explainable ML for mental-health signals across six datasets and 17k records.' },
    { title: 'Ship', text: 'Tests, CI gates and observability. Most of what is listed here runs in production today.' },
  ],
}

// Pinned, scroll-scrubbed "How I work" section
export const doctrine = [
  {
    title: 'Research ',
    accent: 'the data.',
    body: 'Every system starts with what the data can honestly support — leakage, imbalance and bias get found before a model is trusted.',
    proof: '> 6 datasets · 17k records · SHAP-explained',
  },
  {
    title: 'Engineer ',
    accent: 'the core.',
    body: 'Schemas, queues, tenancy and APIs designed for the load and the audit trail — not just the demo.',
    proof: '> Laravel · FastAPI · Postgres · Redis',
  },
  {
    title: 'Make it ',
    accent: 'smart.',
    body: 'LLMs, voice AI and ML placed where they remove real work — streamed, observable and with a human in the loop.',
    proof: '> LLMs · voice AI · NLP · ML',
  },
  {
    title: 'Ship & ',
    accent: 'prove it.',
    body: 'CI gates, end-to-end tests and measured outcomes. If it is not in production, it is not done.',
    proof: '> 991 tests green → production',
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
  featured?: boolean
  color?: string
  code?: string[]
}

export const projects: Project[] = [
  // ── Professional ──
  {
    slug: 'iva-platform',
    title: 'IVA Sales & Compliance Platform',
    tagline: 'Multi-tenant SaaS with browser calling, live AI extraction and a visual workflow engine',
    category: 'Professional',
    year: '2026',
    featured: true,
    summary:
      'A multi-tenant platform for UK debt-advice firms: advisors work leads, run compliant calls in the browser, capture income & expenditure, and push eligible cases to insolvency practitioners. Core engineer on a team of five.',
    points: [
      'Live-call workspace where an AI extraction stream fills the income & expenditure table in real time over WebSockets, with confidence scores and supersede handling.',
      'Event-driven workflow engine with a visual DAG editor (8 control-flow nodes, versioning, dry-run simulator) — plus “describe it in English” generation via the Claude API streamed to the canvas.',
      'Twilio WebRTC telephony: hunt groups, encrypted recordings, AI transcription & compliance scoring, server-enforced regulatory ring times.',
      'SLA rule engine with a 5-level cascade and live breach broadcasting; Gmail/Outlook OAuth sync, Stripe billing, Meilisearch.',
      'Storybook design system with Figma tokens; Pest + Playwright suites gated in CI.',
    ],
    stack: ['Laravel', 'React 19', 'TypeScript', 'Inertia', 'PostgreSQL', 'Redis', 'Reverb', 'ReactFlow', 'Twilio', 'Claude API', 'Deepgram', 'AWS'],
    metric: { value: '991', label: 'automated tests passing' },
    code: [
      '<span class="k">on</span> call.utterance <span class="k">→</span> extract()',
      '  income.employment  <span class="s">£2,140</span>  <span class="k">0.92</span>',
      '  housing.rent       <span class="s">£  850</span>  <span class="k">0.88</span>',
      '  utilities.energy   <span class="s">£  120</span>  <span class="k">0.71</span>',
      '<span class="k">emit</span> ie.updated <span class="k">→</span> reverb://advisor',
    ],
  },
  {
    slug: 'bank-statements',
    title: 'UK Bank Statement Extractor — ML Transaction Classifier',
    tagline: 'Parses statements from 10 UK banks and classifies every transaction',
    category: 'Professional',
    year: '2025',
    featured: true,
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
    link: { href: 'https://nc-middleware.louis-charles.com/bank-statements', label: 'Live tool' },
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
    slug: 'dialler-spike',
    title: 'Open-Source Dialler Evaluation',
    tagline: 'Two-day VICIdial/Asterisk spike — and a live security incident handled',
    category: 'Professional',
    year: '2026',
    summary:
      'Evaluated whether VICIdial could power the platform’s telephony. Proved API-only provisioning, mapped multi-tenancy and real-time-audio gaps, and re-estimated the integration effort.',
    points: [
      'Outbound and API-provisioning proofs of concept passed; recommended instance-per-tenant isolation.',
      'When the test box was compromised via a default-credential manager interface, I cleaned and hardened it (default-deny egress, fail2ban, key-only SSH) and turned it into production requirements.',
    ],
    stack: ['VICIdial', 'Asterisk', 'Linux', 'Security hardening'],
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
    featured: true,
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
    link: { href: 'https://github.com/sagarr57/msc_dissertation', label: 'Code' },
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
    link: { href: 'https://github.com/sagarr57/F21AA_CW2_PG_Group4', label: 'GitHub' },
  },
  {
    slug: 'crop',
    title: 'Crop Recommendation & Disease Detection — ML Platform',
    tagline: 'F21DL · tabular ML for 22 crops + a CNN for 38 leaf diseases',
    category: 'MSc Coursework',
    year: '2025',
    summary: 'Soil and climate data recommend a crop; leaf photos diagnose disease. I built the MLP and the model-comparison framework.',
    points: [
      'Random Forest reached 99.32% test accuracy (MCC 0.993) across 22 crop classes; MLP 95.2%.',
      'Custom 1.3M-parameter CNN with AdamW and label smoothing: 86.7% test accuracy on 38 classes.',
    ],
    stack: ['TensorFlow', 'Keras', 'scikit-learn', 'CNN', 'Plotly'],
    metric: { value: '99.3%', label: 'crop accuracy' },
    link: { href: 'https://github.com/sagarr57/PG-Group-3', label: 'GitHub' },
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
    link: { href: 'https://github.com/sagarr57/F21BC_PG09', label: 'GitHub' },
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
    link: { href: 'https://github.com/sagarr57/F29AI_Group-17', label: 'GitHub' },
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
    link: { href: 'https://github.com/sagarr57/F29AI_Group-17', label: 'GitHub' },
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
    link: { href: 'https://github.com/sagarr57/MediConnect-360', label: 'GitHub' },
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
    link: { href: 'https://github.com/SMariamD/F21AA--Work-place-Culture-Analysis--Group-4-PG', label: 'GitHub' },
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
    link: { href: 'https://github.com/sagarr57/vibeinn-backend', label: 'GitHub' },
  },
]

export const experience = [
  {
    role: 'AI Solution Engineer',
    company: 'Louis Charles International',
    location: 'Dubai, UAE',
    dates: 'Jul 2025 — Present',
    current: true,
    summary: 'AI and full-stack delivery across fintech and debt-advice products.',
    points: [
      'Core engineer on a multi-tenant IVA SaaS — workflow engine, Twilio calling, live AI extraction.',
      'ML bank-statement classifier for 10 UK bank formats.',
      'Shipped QuickCash Direct, All Day Loans and the PingFree dashboard.',
    ],
    stack: ['Laravel', 'React', 'Python', 'FastAPI', 'Twilio', 'Claude API'],
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
      'Playwright & Jest automation — zero critical bugs shipped.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Playwright', 'Jest'],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    dates: '2024',
    summary: 'AI-powered e-commerce platform.',
    points: ['React, Node and MongoDB store with ML product recommendations and an AI support chatbot.'],
    stack: ['React', 'Node.js', 'MongoDB', 'Python'],
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
  { group: 'Machine Learning', note: 'Modelling, evaluation, explainability', items: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'Pandas'] },
  { group: 'NLP & LLMs', note: 'Text, transformers and LLM products', items: ['HuggingFace', 'DistilBERT / RoBERTa', 'Claude API', 'OpenAI', 'Prompt engineering', 'SSE streaming'] },
  { group: 'Voice AI', note: 'Calls, transcription, real time', items: ['Twilio WebRTC', 'Deepgram', 'WebSockets', 'Reverb'] },
  { group: 'Backend', note: 'APIs and services', items: ['FastAPI', 'Laravel', 'Node.js', 'Express', 'REST'] },
  { group: 'Frontend', note: 'Interfaces people enjoy', items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind', 'ReactFlow', 'Storybook'] },
  { group: 'Data & Cloud', note: 'Storage, infra and deployment', items: ['PostgreSQL', 'Redis', 'MongoDB', 'Supabase', 'Prisma', 'Meilisearch', 'AWS', 'Vercel', 'Docker', 'GitHub Actions'] },
  { group: 'Quality', note: 'Tests that guard production', items: ['Playwright', 'Pest', 'Jest', 'PHPStan', 'Chromatic'] },
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
