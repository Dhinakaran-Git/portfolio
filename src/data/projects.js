export const projects = [
  {
    id: 'protean-migration',
    title: 'Protean Forms Migration',
    company: 'Aithent Technologies',
    category: 'Enterprise Modernization',
    technologies: [
      'Spring Boot 3',
      'Angular 18',
      'Microservices',
      'Oracle DB',
      'Redis',
      'REST APIs',
      'Docker'
    ],
    description:
      'Migration of a mission-critical legacy monolithic Protean Forms application into a modern, decoupled microservices-based architecture.',
    problem:
      'The legacy monolithic application suffered from high coupling, complex release cycles, slow form rendering, and database bottlenecks during peak enterprise usage.',
    solution:
      'Engineered an architectural migration path decomposing monolithic domains into modular Spring Boot 3 microservices with an Angular 18 reactive frontend and distributed Redis caching.',
    highlights: [
      'Decomposed monolithic business modules into domain-driven Spring Boot 3 microservices.',
      'Constructed standardized RESTful API contracts with comprehensive DTO validation.',
      'Redesigned Oracle database access patterns and query structures for high throughput.',
      'Integrated Redis caching layer, dramatically reducing repeated database query latency.',
      'Modularized dynamic form-related services to boost cross-application code reusability.',
      'Improved overall response latency and system reliability across client workloads.'
    ],
    architecture: {
      type: 'flow',
      nodes: [
        { label: 'Angular 18 UI', type: 'frontend' },
        { label: 'API Gateway', type: 'gateway' },
        { label: 'Spring Boot Services', type: 'backend' },
        { label: 'Oracle Database', type: 'database' },
        { label: 'Redis Cache', type: 'cache' }
      ],
      flowDescription: 'Angular 18 → API Gateway → Spring Boot Services → Oracle Database ↕ Redis Cache'
    }
  },
  {
    id: 'protean-forms',
    title: 'Protean Forms',
    company: 'Aithent Technologies',
    category: 'Enterprise Application',
    technologies: [
      'Java',
      'Struts',
      'Angular.js',
      'Oracle DB',
      'Dynamic Workflows',
      'PDF Generation'
    ],
    description:
      'Dynamic form generation system for Maryland Judiciary Court, supporting yearly case filing and configurable business logic.',
    problem:
      'Judiciary filings require strict adherence to evolving state legal regulations, complex conditional field visibilities, dynamic validations, and automated PDF dossier generation.',
    solution:
      'Developed a flexible enterprise form engine that dynamically renders case forms, evaluates real-time business rules on user events, and integrates with external court systems.',
    highlights: [
      'Engineered dynamic form generation for Maryland Judiciary Court yearly case filings.',
      'Implemented real-time dynamic field visibility driven by user input events.',
      'Constructed configurable workflow logic tailored for Landmark and Axos Bank integrations.',
      'Automated high-fidelity dynamic PDF generation from complex case submission data.',
      'Integrated enterprise data pipelines to synchronize filing statuses with external court records.'
    ],
    architecture: {
      type: 'flow',
      nodes: [
        { label: 'Dynamic Court Portal', type: 'frontend' },
        { label: 'Form Engine (Java/Struts)', type: 'backend' },
        { label: 'Workflow & Rule Evaluator', type: 'backend' },
        { label: 'PDF Generation Engine', type: 'service' },
        { label: 'Oracle / External Court DB', type: 'database' }
      ],
      flowDescription: 'Court Portal → Form Engine & Rule Evaluator → PDF Generation → External Court Systems & DB'
    }
  },
  {
    id: 'aithent-common',
    title: 'Aithent Common Component',
    company: 'Aithent Technologies',
    category: 'Reusable Backend Platform',
    technologies: [
      'Java',
      'Spring Boot',
      'Apache Kafka',
      'AspectJ',
      'Spring AOP',
      'REST APIs'
    ],
    description:
      'Centralized enterprise backend shared library encapsulating cross-cutting concerns, distributed logging, and standardized response envelopes.',
    problem:
      'Multiple microservices were duplicating logging, error handling, pagination logic, and messaging integration, creating inconsistency and maintenance overhead.',
    solution:
      'Designed and published a pluggable Java library utilizing AspectJ / Spring AOP to transparently intercept method executions, publish audit events to Kafka, and enforce uniform REST responses.',
    highlights: [
      'Implemented centralized method execution and performance logging via AspectJ / Spring AOP.',
      'Integrated Apache Kafka producers for asynchronous audit event streaming without blocking user threads.',
      'Constructed a global Controller Advice exception handler for standardized, secure error payloads.',
      'Built reusable pagination and sorting utilities adopted across all microservices.',
      'Streamlined developer onboarding by abstracting boilerplate enterprise concerns.'
    ],
    architecture: {
      type: 'flow',
      nodes: [
        { label: 'Microservice App', type: 'backend' },
        { label: 'AspectJ / AOP Interceptor', type: 'service' },
        { label: 'Centralized Logging & Controller Advice', type: 'service' },
        { label: 'Apache Kafka Topic', type: 'messaging' },
        { label: 'Log & Audit Consumers', type: 'database' }
      ],
      flowDescription: 'Application → AspectJ / AOP → Centralized Logging → Kafka → Log Consumers'
    }
  },
  {
    id: 'raeen-betting',
    title: 'Raeen – Betting Application',
    company: 'BAssure Solutions',
    category: 'Microservices',
    technologies: [
      'Java',
      'Microservices',
      'Redis',
      'Redis Pub/Sub',
      'REST APIs',
      'Concurrency'
    ],
    description:
      'Real-time distributed betting platform handling concurrent bet calculations, customer transactions, and instant live odds updates.',
    problem:
      'High volumes of simultaneous bet placements caused race conditions, database contention, and delayed real-time balance calculations during live sporting events.',
    solution:
      'Architected a 3-microservice ecosystem backed by Redis in-memory queues and Redis Pub/Sub channels to buffer requests and calculate transactions with ultra-low latency.',
    highlights: [
      'Constructed three specialized microservices (Account, Betting Engine, Calculation Engine).',
      'Implemented Redis-based queuing to safely ingest and order concurrent bet requests.',
      'Engineered rigorous transaction and payout calculation business logic.',
      'Utilized Redis Pub/Sub channels for instantaneous real-time event broadcasting to clients.',
      'Safeguarded wallet balance transactions with thread-safe atomic operations.'
    ],
    architecture: {
      type: 'flow',
      nodes: [
        { label: 'Customer Clients', type: 'frontend' },
        { label: 'API Gateway', type: 'gateway' },
        { label: 'Microservices (3 Nodes)', type: 'backend' },
        { label: 'Redis Queue', type: 'cache' },
        { label: 'Transaction / Calculation Logic', type: 'backend' },
        { label: 'Redis Pub/Sub', type: 'messaging' }
      ],
      flowDescription: 'Customer → API → Microservices → Redis Queue → Transaction / Betting Logic → Redis Pub/Sub'
    }
  },
  {
    id: 'flash-card',
    title: 'Flash Card – Quiz Application',
    company: 'BAssure Solutions',
    category: 'Frontend / E-Learning',
    technologies: [
      'React JS',
      'JavaScript (ES6+)',
      'REST API Integration',
      'CSS3 Animations',
      'Agile Scrum'
    ],
    description:
      'Interactive digital learning application featuring animated quiz cards, progressive score calculation, and dynamic question bank integration.',
    problem:
      'Learners needed a fast, engaging, and responsive interface capable of smoothly flipping through question banks with instant evaluation and progress persistence.',
    solution:
      'Developed a modern React single-page application with smooth card flip micro-interactions, stateful quiz sessions, and asynchronous REST API integration.',
    highlights: [
      'Engineered reactive e-learning UI components with smooth 3D flip card animations.',
      'Integrated REST APIs for dynamic quiz topic retrieval and score telemetry.',
      'Implemented intuitive client-side state management for question sequencing and timer tracking.',
      'Participated in end-to-end Agile development cycles: sprint planning, daily stand-ups, and code reviews.',
      'Achieved 100% responsive compatibility across desktop, tablet, and mobile screens.'
    ],
    architecture: {
      type: 'flow',
      nodes: [
        { label: 'Learner Browser', type: 'frontend' },
        { label: 'React FlashCard Components', type: 'frontend' },
        { label: 'REST API Client', type: 'service' },
        { label: 'Quiz Question Bank Service', type: 'backend' }
      ],
      flowDescription: 'Learner UI → React State & Flip Engine → REST API → Backend Question Bank'
    }
  }
];
