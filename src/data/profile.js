export const profile = {
  name: 'Atta Ur Rehman',
  role: 'Full Stack Developer',
  stack: 'React · FastAPI · PostgreSQL',
  education: "FAST-NUCES '26",
  email: 'attaurrehman.builds@gmail.com',
  github: 'https://github.com/attarehman962',
  linkedin: 'https://www.linkedin.com/in/attaurrehman962/',
  summary:
    'I build secure, database-driven full-stack applications with React frontends, FastAPI backends, REST APIs, authentication systems, relational databases, and clean project architecture.',
  about: [
    'Atta Ur Rehman is a Full Stack Developer and BS Computer Science student at FAST-NUCES, focused on building secure, database-driven web applications that balance product usability with maintainable architecture.',
    'His work spans React frontends, FastAPI and Flask backends, API design, authentication systems, protected routes, role-based access control, CRUD dashboards, and relational database design with PostgreSQL, MySQL, and SQLite.',
    'The emphasis is practical engineering: clear separation between frontend and backend layers, validated APIs, reliable database workflows, and systems that are ready for internships, recruiter review, and client-facing delivery.'
  ],
  highlights: [
    {
      label: 'Primary Focus',
      value: 'Full-stack systems'
    },
    {
      label: 'Backend Strength',
      value: 'Auth, APIs, databases'
    },
    {
      label: 'Availability',
      value: 'Internships and freelance'
    }
  ],
  heroFacts: [
    'React interfaces with reusable component architecture',
    'FastAPI services with validation, JWT auth, and clean endpoints',
    'Relational database design using PostgreSQL, MySQL, and SQLite'
  ],
  quickStats: [
    {
      value: '3',
      label: 'Featured projects'
    },
    {
      value: 'JWT',
      label: 'Authentication workflows'
    },
    {
      value: 'RBAC',
      label: 'Protected admin systems'
    }
  ]
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const socialLinks = [
  {
    label: 'GitHub',
    href: profile.github
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin
  },
  {
    label: 'Email Me',
    href: `mailto:${profile.email}`
  },
  {
    label: 'Download Resume',
    href: '/resume.pdf',
    download: true
  }
];

export const focusObject = {
  full_stack: 'React + FastAPI applications',
  backend: 'REST APIs, authentication flows, protected routes',
  database: 'PostgreSQL, SQLAlchemy, migrations',
  security: 'JWT, password hashing, RBAC',
  frontend: 'Reusable UI, routing, responsive layouts',
  growth: 'Internship-ready and freelance-ready engineering'
};
