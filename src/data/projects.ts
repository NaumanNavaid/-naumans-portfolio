export interface Project {
  title: string;
  description: string;
  challenge: string;
  outcome: string;
  tags: string[];
  image: string;
  link: string;
  deploymentLink: string;
}

const projects: Project[] = [
  {
    title: 'Secure E-Commerce Platform',
    description: 'Built a complete e-commerce solution with integrated payment processing and secure user authentication.',
    challenge: 'Client needed a secure online store that could handle payments securely while providing a seamless shopping experience.',
    outcome: 'Successfully deployed a fully functional e-commerce platform with Stripe integration, reducing cart abandonment by 35%.',
    tags: ['Next.js', 'Stripe API', 'Tailwind CSS', 'NextAuth'],
    image: '/portfolio-1.png',
    link: '/projects/ecommerce-with-user-authentication',
    deploymentLink: 'https://ecommerce-website-assignment-milestone-3.vercel.app/',
  },
  {
    title: 'Dynamic E-Commerce with CMS',
    description: 'Developed a scalable online store with headless CMS integration for easy product management.',
    challenge: 'Retail client required a content-managed e-commerce solution that could be updated without developer intervention.',
    outcome: 'Implemented Sanity CMS allowing 70% faster content updates and improved team collaboration.',
    tags: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'React Query'],
    image: '/portfolio-2.png',
    link: '/projects/sofa-store',
    deploymentLink: 'https://hackathon-gamma-pied.vercel.app/',
  },
  {
    title: 'Content Management Blog Platform',
    description: 'Created a feature-rich blog platform with user authentication and interactive comment system.',
    challenge: 'Media company needed a scalable blog solution with user engagement features and content management.',
    outcome: 'Delivered a platform supporting 10K+ daily visitors with real-time comment updates and content scheduling.',
    tags: ['Next.js', 'Sanity CMS', 'PostgreSQL', 'Authentication'],
    image: '/portfolio-3.png',
    link: '/projects/blog-website',
    deploymentLink: 'https://blog-milestone-3-phi.vercel.app/',
  },
  {
    title: 'Educational Platform UI',
    description: 'Designed and developed a responsive educational platform with interactive elements.',
    challenge: 'EdTech startup required an engaging landing page that could convert visitors into course sign-ups.',
    outcome: 'Achieved 45% increase in course inquiries with improved user engagement and mobile experience.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    image: '/portfolio-4.png',
    link: '/projects/educational-website-ui',
    deploymentLink: 'https://assignment6-eight-eta.vercel.app/',
  }
];

export default projects; 