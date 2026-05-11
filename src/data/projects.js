export const projects = [
  {
    title: 'DocMate',
    subtitle: 'Full Stack PDF Workspace',
    summary:
      'A document workflow platform for processing, transforming, extracting, and summarizing PDFs through a React frontend and FastAPI backend.',
    description:
      'DocMate is a full-stack PDF processing platform supporting merge, split, compress, rotate, watermark, file conversion, text extraction, OCR fallback for scanned documents, multilanguage translation, and AI-based document summarization workflow.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'SQLite / PostgreSQL', 'pypdf', 'ReportLab'],
    features: [
      'PDF merge, split, compress, rotate, watermark, and conversion',
      'Text extraction plus OCR fallback for scanned documents',
      'Multilanguage translation and AI-based summarization workflow',
      'Secure backend file validation and structured API handling'
    ],
    engineering: [
      'Clear separation between React client and FastAPI services',
      'Secure document processing pipeline with server-side validation',
      'Database-driven architecture for workflow management'
    ],
    preview: [
      '$ docmate process invoice-batch/',
      '> validating uploads',
      '> extracting text and OCR fallback',
      '> translation job queued',
      '> summary generated and persisted'
    ],
    github: 'https://github.com/attarehman962/DocMate',
    live: 'https://docmate-pagebuddy.netlify.app/'
  },
  {
    title: 'User Management System',
    subtitle: 'Secure Full Stack Admin Dashboard',
    summary:
      'A role-based admin system designed around protected CRUD operations, backend permission enforcement, and maintainable database workflows.',
    description:
      'A secure role-based user management system with protected CRUD operations, backend-enforced permissions, JWT authentication, PostgreSQL migrations, and tested backend functionality.',
    tech: ['FastAPI', 'React', 'Vite', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Alembic'],
    features: [
      'Role-based admin dashboard with protected CRUD operations',
      'Backend permission checks and HS256 JWT authentication',
      'PBKDF2-SHA256 password hashing and migration workflows',
      'Unit testing against SQLite for backend logic validation'
    ],
    engineering: [
      'API-level authentication and authorization boundaries',
      'Maintainable PostgreSQL schema migrations with Alembic',
      'Practical admin dashboard architecture for real user workflows'
    ],
    preview: [
      'POST /auth/login',
      '{ "role": "admin", "permissions": ["create", "update", "delete"] }',
      'GET /users?status=active',
      'PATCH /users/:id',
      '403 responses enforced server-side when scope is missing'
    ],
    github: 'https://github.com/attarehman962/User_Management',
    live: 'https://user-management-p.netlify.app/'
  },
  {
    title: 'Digital Logics Studio',
    subtitle: 'Interactive Learning Platform',
    summary:
      'An API-driven React learning platform for digital logic education with route-based modules, simulations, and persistent authentication handling.',
    description:
      'A React-based interactive learning platform for digital logic concepts, including Circuit Forge, K-Map Studio, Boolean algebra, number systems, arithmetic circuits, memory, and sequential logic concepts.',
    tech: ['React 18', 'React Router DOM', 'Axios', 'CSS', 'REST API'],
    features: [
      'Circuit Forge simulation tools and K-Map Studio workflows',
      'Topic pages for Boolean algebra, number systems, memory, and sequential logic',
      'Login, signup, logout, and persistent session restoration',
      'API-driven frontend with Axios and structured client routing'
    ],
    engineering: [
      'Interactive frontend modules with route-based educational structure',
      'Persistent authentication handling across the React client',
      'Simulation-oriented UX for learning complex logic concepts'
    ],
    preview: [
      'router.navigate("/labs/kmap-studio")',
      'session.restore() -> authenticated',
      'axios.get("/api/circuits/templates")',
      'render(<TruthTable />)',
      'state synchronized across learning modules'
    ],
    github: 'https://github.com/attarehman962/DigitalLogicsStudio/tree/main',
    live: 'https://circuits.quantumlogicslimited.com/'
  }
];
