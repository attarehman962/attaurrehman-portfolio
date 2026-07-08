export const projects = [
  {
    id: 'project-security-misconfiguration-scanner',
    title: 'Security Misconfiguration Scanner',
    subtitle: 'Flagship backend project',
    summary: 'FastAPI security automation platform',
    description:
      'A Python/FastAPI platform that automates security misconfiguration audits - detecting missing headers, weak CORS, exposed files, and SSL issues - with authenticated scans, PostgreSQL-backed history, and PDF reporting.',
    problem:
      'Manual header, CORS, SSL, and exposed-file checks are tedious, easy to skip, and hard to turn into repeatable audit history.',
    approach:
      'Built a JWT-auth FastAPI backend with background scan jobs, PostgreSQL scan history, severity scoring, CLI output, PDF reports, CSV export, Docker Compose, and CI checks.',
    result:
      'Turns manual misconfiguration review into a repeatable scanner with 10+ automated checks, API and CLI access, stored results, and actionable findings.',
    tech: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'JWT',
      'Docker Compose',
      'pytest',
      'Ruff',
      'mypy',
      'GitHub Actions'
    ],
    proof: [
      'JWT-authenticated scan workflows',
      'Background processing for longer audits',
      'PostgreSQL-backed scan history and severity scoring',
      'PDF reports, CSV export, and CLI table/JSON output'
    ],
    preview: ['POST /scans', 'queue background audit', 'run 10+ checks', 'store findings', 'export PDF / CSV'],
    github: 'https://github.com/attarehman962/security-misconfiguration-scanner',
    live: 'https://github.com/attarehman962/security-misconfiguration-scanner'
  },
  {
    title: 'Mini BEAMS360 Admissions CRM',
    subtitle: 'EdTech CRM backend',
    summary: 'Admissions workflow system',
    description:
      'A React/FastAPI/PostgreSQL CRM for admissions teams with JWT authentication, RBAC, dashboards, lead tracking, and database-backed workflows.',
    problem:
      'Admissions teams need a clear way to track leads, protect staff-only actions, and turn scattered follow-ups into a predictable workflow.',
    approach:
      'Designed protected CRM flows with FastAPI endpoints, PostgreSQL persistence, role-based access control, and React dashboards for daily operations.',
    result:
      'Provides a practical admissions dashboard with lead tracking, authenticated user flows, backend permission checks, and structured data management.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'JWT', 'RBAC', 'Tailwind CSS'],
    proof: [
      'JWT login and protected routes',
      'Role-based access for admin workflows',
      'Lead tracking and dashboard views',
      'PostgreSQL schema design with migration discipline'
    ],
    preview: ['POST /auth/login', 'GET /leads', 'PATCH /leads/:id', 'check role scope', 'update dashboard'],
    github: 'https://github.com/attarehman962/User_Management',
    live: 'https://user-management-p.netlify.app/'
  },
  {
    title: 'DocMate',
    subtitle: 'Document automation workspace',
    summary: 'PDF processing pipeline',
    description:
      'A PDF automation workspace for file operations, extraction, OCR fallback, translation, and summarization through a React frontend and FastAPI backend.',
    problem:
      'Document work often jumps between separate tools for merging, splitting, extracting, translating, and summarizing files.',
    approach:
      'Built a single FastAPI-backed workflow with secure upload validation, PDF transformations, text extraction, OCR fallback, and AI-assisted summarization.',
    result:
      'Combines 8+ file operations with a structured document pipeline so users can process, extract, and summarize PDFs in one place.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'SQLite / PostgreSQL', 'pypdf', 'ReportLab'],
    proof: [
      'Merge, split, compress, rotate, watermark, and conversion workflows',
      'Text extraction with OCR fallback for scanned documents',
      'Translation and summarization pipeline',
      'Server-side file validation and API structure'
    ],
    preview: ['validate upload', 'extract text', 'fallback OCR', 'summarize content', 'persist result'],
    github: 'https://github.com/attarehman962/DocMate',
    live: 'https://docmate-pagebuddy.netlify.app/'
  },
  {
    title: 'Digital Logics Studio',
    subtitle: 'Interactive learning product',
    summary: 'React education platform',
    description:
      'An API-driven React learning platform for digital logic education with route-based modules, simulations, and persistent authentication handling.',
    problem:
      'Digital logic students need more than static notes; they need interactive modules that make circuits, K-maps, and truth tables easier to practice.',
    approach:
      'Built route-based React modules, API-driven data flows, persistent sessions, and simulation-oriented UI patterns for learning workflows.',
    result:
      'Delivers a structured learning product with circuit tools, K-Map workflows, authentication, and reusable frontend architecture.',
    tech: ['React 18', 'React Router DOM', 'Axios', 'REST API', 'CSS'],
    proof: [
      'Circuit Forge simulation tools and K-Map workflows',
      'Topic pages for Boolean algebra, number systems, memory, and sequential logic',
      'Login, signup, logout, and persistent session restoration',
      'API-driven frontend with Axios and structured routing'
    ],
    preview: ['navigate /labs/kmap-studio', 'restore session', 'fetch templates', 'render truth table', 'sync state'],
    github: 'https://github.com/attarehman962/DigitalLogicsStudio/tree/main',
    live: 'https://circuits.quantumlogicslimited.com/'
  }
];
