export const profile = {
  name: 'Atta Ur Rehman',
  role: 'Python Backend Developer',
  headline: 'Python Backend Developer — Automation & Security Tooling.',
  stack: 'FastAPI · PostgreSQL · Docker · CI/CD',
  education: "FAST-NUCES '26",
  email: 'attaurrehman.builds@gmail.com',
  github: 'https://github.com/attarehman962',
  linkedin: 'https://www.linkedin.com/in/attaurrehman962/',
  portfolio: 'https://attaurrehman-portfolio-p.netlify.app/',
  flagshipRepo: 'https://github.com/attarehman962/security-misconfiguration-scanner',
  summary:
    'I build backend systems that replace manual work with automated, tested tools — including a security misconfiguration scanner with JWT-authenticated FastAPI APIs, PostgreSQL-backed scan history, and full CI/CD.',
  about: [
    'BSCS student at FAST-NUCES focused on Python backend development, automation, and security tooling.',
    'Currently interning as a Software Developer at QuantumLogicsLabs, building FastAPI/Flask APIs and React-integrated features.',
    'Most interested in systems that turn manual, error-prone processes into reliable automated tools.'
  ],
  highlights: [
    {
      label: 'Positioning',
      value: 'Automation & security tooling'
    },
    {
      label: 'Backend Strength',
      value: 'FastAPI, auth, databases'
    },
    {
      label: 'Availability',
      value: 'Full-time and junior roles'
    }
  ],
  heroFacts: [
    'Python',
    'FastAPI',
    'PostgreSQL',
    'Docker',
    'Automation'
  ],
  quickStats: [
    {
      value: '4',
      label: 'Proof areas'
    },
    {
      value: 'FastAPI',
      label: 'Primary backend stack'
    },
    {
      value: 'Open',
      label: 'Internships and junior roles'
    }
  ]
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const socialLinks = [
  {
    label: 'View Flagship Project',
    href: profile.flagshipRepo
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    download: true
  },
  {
    label: 'Contact Me',
    href: `mailto:${profile.email}`
  }
];

export const focusObject = {
  backend: 'FastAPI APIs, validation, auth, protected routes',
  automation: 'Security checks, scraping workflows, scheduled jobs',
  database: 'PostgreSQL, SQLAlchemy, Alembic migrations',
  security: 'JWT, password hashing, CORS, headers, severity scoring',
  delivery: 'Docker Compose, pytest, GitHub Actions',
  growth: 'Backend, automation, and security tooling roles'
};

export const proofCards = [
  {
    title: 'FastAPI Backends',
    copy: 'Validated APIs, JWT auth, background work, and clean endpoint structure.',
    href: profile.flagshipRepo
  },
  {
    title: 'PostgreSQL + SQLAlchemy',
    copy: 'Relational schemas, migrations, scan history, and persistent product workflows.',
    href: 'https://github.com/attarehman962/User_Management'
  },
  {
    title: 'Security Automation',
    copy: 'Automated checks for missing headers, weak CORS, exposed files, and SSL issues.',
    href: profile.flagshipRepo
  },
  {
    title: 'Scraping + Reports',
    copy: 'Python automation that turns raw checks into scannable findings and reports.',
    href: profile.flagshipRepo
  }
];
