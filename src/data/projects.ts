export interface Project {
  title: string;
  description: string;
  challenge: string;
  outcome: string;
  tags: string[];
  image: string;
  link: string;
  deploymentLink: string;
  linkedinLink?: string;
}

const projects: Project[] = [
  {
    title: 'FASCO E-Commerce Storefront',
    description: 'Premium fashion retail experience with seamless mobile responsiveness, complex state management for shopping cart, and dynamic product routing. Built from scratch in 7 days without heavy UI libraries.',
    challenge: 'Translate complex, high-fidelity Figma design into a blazing-fast Next.js application. Required implementing a mobile-optimized product gallery with thumbnail navigation, global cart state management using React Context, and dynamic [slug] routing for product pages.',
    outcome: 'Delivered high-performance, fully responsive Next.js frontend MVP in just 7 days. Built modular component architecture with pixel-perfect Tailwind CSS styling. Clean, maintainable codebase fully prepped for seamless backend integration (Shopify, Sanity, or custom Node.js).',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Context API', 'TypeScript', 'Responsive Design'],
    image: '/fasco-ecommerce.png',
    link: '/projects/fasco-ecommerce',
    deploymentLink: 'https://fasco-ecommerce-frontend.vercel.app/',
    linkedinLink: 'https://www.linkedin.com/in/nauman-navaid/',
  },
  {
    title: 'CV Crafter',
    description: 'Platform where users can get custom-made resumes from professionals. Interactive forms collect user data and connect users with expert CV writers for tailored, ATS-optimized resumes.',
    challenge: 'Job seekers struggle to create well-formatted, tailored resumes. Needed a platform connecting users with professional CV writers for personalized resume services.',
    outcome: 'Full-stack application with modular component architecture, responsive design, and real-time CV preview. Production-ready platform deployed at cvcrafterpk.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI'],
    image: '/cv crafter.png',
    link: '/projects/cv-crafter',
    deploymentLink: 'https://www.cvcrafterpk.com',
    linkedinLink: 'https://www.linkedin.com/in/nauman-navaid/',
  },
  {
    title: 'AI Book Chatbot (RAG System)',
    description: 'Retrieval-Augmented Generation chatbot for querying book content. Built with FastAPI, Qdrant vector database, and LLM APIs for intelligent, context-aware responses.',
    challenge: 'Traditional search fails to understand context when querying large documents. Needed a system that could retrieve relevant passages and generate accurate answers.',
    outcome: 'Implemented document embeddings, vector similarity search, and scalable API endpoints. Successfully delivers context-aware responses from book content.',
    tags: ['Python', 'FastAPI', 'Qdrant', 'Vector DB', 'OpenAI API', 'RAG'],
    image: '/Book with rag chatbot.png',
    link: '/projects/rag-chatbot',
    deploymentLink: 'https://naumannavaid.github.io/ai-native-textbook-docusaurus/',
    linkedinLink: 'https://www.linkedin.com/in/nauman-navaid/',
  },
  {
    title: 'Inventory Management Portal',
    description: 'Full-stack web application with authentication, real-time stock tracking, and comprehensive reporting. Handles CRUD operations for products, stock levels, and supplier records with full data validation.',
    challenge: 'Small businesses needed a centralized system to track inventory across multiple suppliers and locations with real-time updates and reporting.',
    outcome: 'Complete backend API with validation, error handling, and secure authentication. Responsive dashboard UI with real-time stock updates and exportable reports.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Supabase', 'Authentication'],
    image: '/inventory managemnt portal.png',
    link: '/projects/inventory-portal',
    deploymentLink: 'https://inventory-tracking-cyan.vercel.app/',
    linkedinLink: 'https://www.linkedin.com/in/nauman-navaid/',
  },
  {
    title: 'Art Gallery Platform with CMS',
    description: 'Dynamic gallery platform with custom admin CMS for managing artwork, artist metadata, and categories. Features responsive UI/UX and modular component architecture.',
    challenge: 'Art galleries needed an intuitive way to showcase collections online with easy content management without developer intervention.',
    outcome: 'Built custom CMS with Sanity/PostgreSQL integration. Fully responsive gallery with filtering, search, and artist profile pages. Optimized image handling for high-quality artwork display.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'PostgreSQL'],
    image: '/Art galllery.png',
    link: '/projects/art-gallery',
    deploymentLink: 'https://shameer-portfolio-delta.vercel.app/',
    linkedinLink: 'https://www.linkedin.com/in/nauman-navaid/',
  },
  {
    title: 'AI-Powered To-Do Application',
    description: 'Smart task management app enhanced with AI-generated task suggestions and breakdowns. Features user authentication, persistent storage, and an intuitive dashboard UI.',
    challenge: 'Users struggle with breaking down complex tasks. Needed an intelligent assistant that could suggest subtasks and help organize work effectively.',
    outcome: 'Integrated LLM API for smart task suggestions. Built complete authentication system and responsive dashboard with real-time task updates and category organization.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'LLM API', 'Supabase', 'Authentication'],
    image: '/Ai powered Todo app.png',
    link: '/projects/ai-todo',
    deploymentLink: 'https://todo-app-phase-2-and-3.vercel.app/',
    linkedinLink: 'https://www.linkedin.com/in/nauman-navaid/',
  },
  {
    title: 'Construction Company Website',
    description: 'Professional corporate website with SEO optimization, reusable layout components, and dynamic routing. Focused on performance and accessibility.',
    challenge: 'Construction company needed a modern online presence to showcase services, projects, and contact information with strong SEO performance.',
    outcome: 'Delivered responsive website with optimized Lighthouse scores, clean component architecture, and full SEO meta tags for improved search visibility.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO', 'Responsive Design'],
    image: '/Construction Company website.png',
    link: '/projects/construction-website',
    deploymentLink: 'https://asna-construction.vercel.app/',
    linkedinLink: 'https://www.linkedin.com/in/nauman-navaid/',
  },
  {
    title: 'Responsive Landing Page',
    description: 'High-conversion landing page demonstrating modular component architecture with focus on SEO, accessibility, and cross-device compatibility.',
    challenge: 'Creating a landing page that performs well across all devices while maintaining fast load times and strong SEO fundamentals.',
    outcome: 'Optimized responsive page with modular components, accessibility compliance (WCAG), and strong Core Web Vitals scores.',
    tags: ['Next.js', 'Tailwind CSS', 'SEO', 'Accessibility', 'Responsive Design'],
    image: '/Landing page.png',
    link: '/projects/landing-page',
    deploymentLink: 'https://assignment-6-one-gamma.vercel.app/',
    linkedinLink: 'https://www.linkedin.com/in/nauman-navaid/',
  }
];

export default projects;
