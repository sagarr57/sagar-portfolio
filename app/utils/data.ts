// Hero Section Data
export const heroData = {
  name: 'Sagar Mamindla',
  title: 'AI Engineer & Full-Stack Developer',
  bio: [
    'Crafting Intelligent Solutions at the Intersection of AI and Software Engineering',
    'Transforming complex problems into elegant AI-powered applications. Specializing in machine learning integration, intelligent automation, and cutting-edge web technologies that drive innovation.',
  ],
  contactCards: [
    {
      icon: 'IoMailOutline',
      text: 'Email Me',
      subtext: 'sagar05.ms@gmail.com',
      description: 'Drop me a line anytime',
      link: 'mailto:sagar05.ms@gmail.com',
    },
    {
      icon: 'IoCallOutline',
      text: 'Call Me',
      subtext: '+971 553084546',
      description: 'Available for calls',
      link: 'tel:+971553084546',
    },
    {
      icon: 'IoLocationOutline',
      text: 'Location',
      subtext: 'Dubai, UAE',
      description: 'Open to remote work',
    },
  ],
  buttons: [
    {
      text: "Let's Build Something Intelligent",
      href: '#contact',
      type: 'primary' as const,
    },
    {
      text: 'Download Resume',
      href: '/resume/sagar-mamindla-resume.pdf',
      type: 'secondary' as const,
      download: true,
    },
  ],
  socialLinks: [
    { icon: 'TbBrandGithub', link: 'https://github.com/sagarr57', label: 'GitHub' },
    { icon: 'TbBrandLinkedin', link: 'https://linkedin.com/in/sagar-mamindla', label: 'LinkedIn' },
  ],
}

// About Section Data
export const aboutData = {
  title: 'About Me',
  subtitle: 'AI engineer and full-stack builder — shipping fintech products, automation, and data-backed UX from Dubai.',
  cards: [
    {
      title: 'Background & impact',
      content: [
        'I bring 4+ years across enterprise observability, sustainability analytics, and fintech, and now lead AI and product delivery at Louis Charles International in Dubai.',
      ],
      highlight: 'Louis Charles International',
    },
    {
      title: 'How I work',
      content: [
        'I build with Next.js, React, Node.js, Python, and FastAPI, with strong focus on automation, CRM workflows, and analytics that improve business outcomes.',
      ],
      highlight: 'Next.js',
    },
    {
      title: 'Education & direction',
      content: [
        'I am pursuing an MSc in Artificial Intelligence at Heriot-Watt University, building on a B.Tech in Computer Science and applying both to practical AI products.',
      ],
      highlight: 'MSc in Artificial Intelligence',
      highlightColor: '#60A5FA',
      special: true,
      wide: true,
    },
  ],
  values: [
    {
      icon: 'FaCode',
      title: 'Ship-quality code',
      description: 'Readable TypeScript/React, sensible architecture, and tests where they protect revenue and sleep.',
      color: '#00D9FF',
    },
    {
      icon: 'FaBrain',
      title: 'AI with guardrails',
      description: 'LLM features, automation, and analytics designed for real users — measurable, observable, and easy to iterate.',
      color: '#7B2CBF',
    },
    {
      icon: 'FaRocket',
      title: 'Speed that lasts',
      description: 'Performance budgets, Core Web Vitals awareness, and dashboards that stay fast as data grows.',
      color: '#FF006E',
    },
    {
      icon: 'FaNetworkWired',
      title: 'Systems thinking',
      description: 'Connecting frontends, APIs, CRMs, marketing tools, and lender panels into one coherent lead journey.',
      color: '#8338EC',
    },
  ],
}

// Experience Data
export const experienceData = {
  title: 'Experience & Expertise',
  subtitle: 'A blend of corporate excellence and AI-powered innovation',
  professional: [
    {
      id: 1,
      title: 'AI Solution Engineer',
      company: 'Louis Charles International LLC FZ',
      location: 'Dubai, UAE',
      duration: 'Jul 2025 - Present',
      type: 'Professional',
      description: [
        'Developing and owning the official public website for Louis Charles International LLC FZ, ensuring a high-conversion landing experience and clean information architecture.',
        'Designed, developed, and launched the official QuickCash Direct website to support IVA (Individual Voluntary Arrangement) services with a clear, trust-focused user journey.',
        'Building a SaaS-based CRM to manage IVA leads end-to-end, from first touchpoint to conversion, with automation across the full lead lifecycle.',
        'Implementing core CRM features including calendar scheduling, in-built WhatsApp chat with leads, and automated status updates to keep stakeholders aligned.',
        'Designing an AI-driven internal voice calling system trained on business data to improve agent productivity, call quality, and overall operational efficiency.',
      ],
      tools: [
        { icon: 'TbBrandNextjs', label: 'Next.js' },
        { icon: 'TbBrandReact', label: 'React JS' },
        { icon: 'TbBrandNodejs', label: 'Node.js' },
        { icon: 'TbBrandMongodb', label: 'MongoDB' },
        { icon: 'TbBrandGit', label: 'Git & CI/CD' },
        { icon: 'TbBrandPython', label: 'Python AI' },
        { icon: 'FaBrain', label: 'AI & LLMs' },
      ],
    },
    {
      id: 2,
      title: 'Full Stack Developer Intern',
      company: 'Decarbeon',
      location: 'Dubai, UAE',
      duration: 'Feb 2025 - Apr 2025',
      type: 'Professional',
      description: [
        'Contributed to Decarbeon, a sustainability analytics dashboard with interactive visualizations built using Next.js, Tailwind CSS, and Power BI integrations.',
        'Developed dashboards for sustainability metrics and ESG KPIs using Next.js and Chart.js to help stakeholders track performance in real time.',
        'Built a short-term WordPress-based web app to rapidly deliver marketing content and sustainability insights for stakeholders.',
        'Collaborated with the team on data visualizations for energy consumption and carbon footprint, improving clarity and storytelling for decision-makers.',
        'Applied AI understanding to support insights and reporting modules, helping surface data-driven recommendations on sustainability performance.',
      ],
      tools: [
        { icon: 'TbBrandNextjs', label: 'Next.js' },
        { icon: 'TbBrandReact', label: 'React JS' },
        { icon: 'SiHtml5', label: 'Tailwind & HTML' },
        { icon: 'SiCss3', label: 'CSS' },
        { icon: 'TbBrandMysql', label: 'Data Integrations' },
        { icon: 'TbBrandGit', label: 'Git & Version Control' },
      ],
    },
    {
      id: 3,
      title: 'Associate Software Engineer',
      company: 'New Relic',
      location: 'Hyderabad, India',
      duration: 'Feb 2023 - Mar 2024',
      type: 'Professional',
      description: [
        'Architected and built reusable React components for performance monitoring dashboards, resulting in 25% faster load times and improved user experience.',
        'Designed and developed a domain validation landing page that increased user engagement by 35% through intuitive UX and seamless interactions.',
        'Led QA automation initiatives using Playwright and Jest, achieving zero critical bugs in production releases.',
        'Optimized CI/CD pipelines and deployment workflows, reducing configuration overhead by 40% and improving team productivity.',
      ],
      tools: [
        { icon: 'TbBrandReact', label: 'React JS' },
        { icon: 'TbBrandNextjs', label: 'Next.js' },
        { icon: 'TbBrandNodejs', label: 'Node.js' },
        { icon: 'TbBrandMongodb', label: 'MongoDB' }, 
        { icon: 'BiTestTube', label: 'Playwright' },
        { icon: 'SiJest', label: 'Jest' },
        { icon: 'SiGooglecloud', label: 'Google Cloud' },
      ],
    },
    {
      id: 4,
      title: 'Junior Level Engineer',
      company: 'XRG Consulting',
      location: 'Hyderabad, India',
      duration: 'Sept 2021 - Jan 2023',
      type: 'Professional',
      description: [
        'Developed a robust Java-based backend service for automated user invitation system, eliminating 40% of manual follow-up tasks.',
        'Created an interactive React JS modal component for team invitations, significantly enhancing user engagement and workflow efficiency.',
        'Comprehensive API documentation using Swagger, reducing new developer onboarding time by two weeks.',
      ],
      tools: [
        { icon: 'TbBrandJavascript', label: 'JavaScript' },
        { icon: 'TbBrandTypescript', label: 'TypeScript' },
        { icon: 'TbBrandPython', label: 'Python' },
        { icon: 'TbBrandDocker', label: 'Docker' },
        { icon: 'SiSwagger', label: 'Swagger' },
      ],
    },
  ],
  freelance: [
    {
      id: 3,
      title: 'AI-Powered E-Commerce Platform',
      company: 'Freelance Project',
      location: 'Remote',
      duration: '2024',
      type: 'Freelance',
      description: [
        'Built a complete e-commerce solution with React, Node.js, and MongoDB, featuring AI-powered product recommendations and intelligent inventory management.',
        'Implemented machine learning algorithms for personalized shopping experiences, increasing conversion rates by 45%.',
        'Delivered a responsive, mobile-first design with AI chatbot integration for enhanced customer support.',
      ],
      tools: [
        { icon: 'TbBrandReact', label: 'React JS' },
        { icon: 'TbBrandNodejs', label: 'Node.js' },
        { icon: 'TbBrandMongodb', label: 'MongoDB' },
        { icon: 'TbBrandPython', label: 'Python AI' },
        { icon: 'FaBrain', label: 'ML Models' },
      ],
    },
  ],
}

// Projects Data
export const projectsData = {
  title: 'Featured Projects',
  subtitle: 'Where AI innovation meets execution—showcasing intelligent solutions that drive business value',
  projects: [
    {
      id: 1,
      title: 'AI-Powered Performance Monitoring Platform',
      category: 'Professional',
      description: [
        'React-based performance monitoring solution with AI-driven analytics for tracking web performance metrics.',
        'Delivered 25% reduction in page load times and 35% increase in user engagement through intelligent data visualization.',
      ],
      link: 'https://one.newrelic.com/website-grader',
      type: 'live',
    },
    {
      id: 2,
      title: 'Intelligent Observability Landing Page',
      category: 'Professional',
      description: [
        'High-converting landing page built with React and Next.js featuring AI-powered personalization.',
        'Improved conversion rates by 40% through strategic UX optimization and responsive design.',
      ],
      link: 'https://newrelic.com/instant-observability',
      type: 'live',
    },
    {
      id: 3,
      title: 'MediConnect360 – AI-Powered Healthcare Platform',
      category: 'Freelance',
      description: [
        'Built a comprehensive hospital management system from ground up using Node.js, Express.js, and MongoDB, with AI-powered patient care workflows and intelligent scheduling.',
        'Integrated advanced AI chatbot using NLP for automated patient inquiries and appointment scheduling, reducing administrative overhead by 50% and improving patient satisfaction.',
        'Established robust CI/CD pipelines with Docker and Jenkins, implementing ML models for predictive healthcare analytics and maintaining 99.9% uptime.',
      ],
      link: 'https://github.com/sagarr57/MediConnect-360',
      type: 'github',
    },
    {
      id: 4,
      title: 'Louis Charles International – Official Business Website',
      category: 'Professional',
      description: [
        'Official website for Louis Charles International with conversion-focused design for IVA services.',
        'SEO-friendly Next.js frontend with responsive layouts supporting lead generation and brand positioning.',
      ],
      link: 'https://louis-charles.com',
      type: 'live',
    },
    {
      id: 5,
      title: 'QuickCash Direct – Financial Services Platform',
      category: 'Professional',
      description: [
        'US-based instant loan application website offering loans from $250 to $3000 with quick approval.',
        '3-step application process connecting borrowers with trusted lenders in the network.',
      ],
      link: 'https://www.quickcashdirect.com/',
      type: 'live',
    },
  ],
}

// Skills Data
export const skillsData = {
  title: 'Technical Expertise',
  subtitle: 'A comprehensive toolkit for building modern, AI-powered applications',
  categories: {
    'AI & Machine Learning': [
      { icon: 'TbBrandPython', name: 'Python', color: '#3776AB' },
      { icon: 'SiTensorflow', name: 'TensorFlow', color: '#FF6F00' },
      { icon: 'SiPytorch', name: 'PyTorch', color: '#EE4C2C' },
      { icon: 'FaBrain', name: 'Machine Learning', color: '#7B2CBF' },
      { icon: 'SiJupyter', name: 'Jupyter Notebooks', color: '#F37626' },
      { icon: 'SiZapier', name: 'Zapier Automation', color: '#FF4A00' },
    ],
    'Programming & Development': [
      { icon: 'TbBrandJavascript', name: 'JavaScript', color: '#F7DF1E' },
      { icon: 'TbBrandTypescript', name: 'TypeScript', color: '#3178C6' },
      { icon: 'TbBrandNodejs', name: 'Node.js', color: '#339933' },
    ],
    'Front-End Technologies': [
      { icon: 'TbBrandReact', name: 'React JS', color: '#61DAFB' },
      { icon: 'TbBrandNextjs', name: 'Next JS', color: '#000000' },
      { icon: 'SiMaterialdesign', name: 'Material UI', color: '#0081CB' },
      { icon: 'SiBootstrap', name: 'Bootstrap', color: '#7952B3' },
      { icon: 'SiRedux', name: 'Redux', color: '#764ABC' },
      { icon: 'SiHtml5', name: 'HTML', color: '#E34F26' },
      { icon: 'SiCss3', name: 'CSS', color: '#1572B6' },
    ],
    'Back-End & Databases': [
      { icon: 'SiExpress', name: 'Express.js', color: '#000000' },
      { icon: 'TbBrandMongodb', name: 'MongoDB', color: '#47A248' },
      { icon: 'TbBrandMysql', name: 'MySQL', color: '#4479A1' },
    ],
    'DevOps & Cloud': [
      { icon: 'TbBrandDocker', name: 'Docker', color: '#2496ED' },
      { icon: 'SiJira', name: 'Jenkins', color: '#D24939' },
      { icon: 'TbBrandGit', name: 'GitHub Actions', color: '#2088FF' },
      { icon: 'SiGooglecloud', name: 'Google Cloud', color: '#4285F4' },
    ],
    'Testing & Automation': [
      { icon: 'SiJest', name: 'Jest', color: '#C21325' },
      { icon: 'SiMocha', name: 'Mocha', color: '#8D6748' },
      { icon: 'BiTestTube', name: 'Playwright', color: '#61DAFB' },
      { icon: 'SiPostman', name: 'Postman', color: '#FF6C37' },
    ],
    'Project Management & Tools': [
      { icon: 'SiJira', name: 'Agile', color: '#2D70AD' },
      { icon: 'SiFigma', name: 'Figma', color: '#F04E37' },
      { icon: 'SiSlack', name: 'Slack', color: '#4A154B' },
      { icon: 'TbBrandGit', name: 'Git', color: '#0079BF' },
    ],
  },
}

// Contact Data
export const contactData = {
  title: "Let's Build Something Intelligent",
  subtitle: "Whether you're looking for an AI engineer or a full-stack developer, I'm here to bring your intelligent vision to life. Let's discuss your next project.",
  contactCards: [
    {
      icon: 'IoMailOutline',
      title: 'Email Me',
      text: 'sagar05.ms@gmail.com',
      description: 'Drop me a line anytime',
      link: 'mailto:sagar05.ms@gmail.com',
    },
    {
      icon: 'IoCallOutline',
      title: 'Call Me',
      text: '+971 553084546',
      description: 'Available for calls',
      link: 'tel:+971553084546',
    },
    {
      icon: 'IoLocationOutline',
      title: 'Location',
      text: 'Dubai, UAE',
      description: 'Open to remote work',
    },
  ],
}

