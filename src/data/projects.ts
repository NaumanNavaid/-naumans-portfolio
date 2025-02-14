export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  deploymentLink: string;
}

const projects: Project[] = [
  {
    title: 'Ecommerce with user authentication and payment gateway',
    description: 'A ecommerce website with user authentication and an payment gateway with stripe built with Next.js and Tailwind CSS',
    tags: ['React', 'Next.js', 'Tailwind'],
    image: '/portfolio 1.png',
    link: '/projects/ecommerce-with-user-authentication',
    deploymentLink: 'https://ecommerce-website-assignment-milestone-3.vercel.app/',
  },
  {
    title: 'Sofa Store',
    description: 'An e-commerce platform with Next.js and Tailwind CSS that has a category filter and an search bar on the shop page',
    tags: ['Next.js', 'Tailwind', 'Sanity'],
    image: '/portfolio 2.png',
    link: '/projects/sofa-store',
    deploymentLink: 'https://hackathon-gamma-pied.vercel.app/',
  },
  {
    title: 'Blog Website',
    description: 'An Blog Website in which i am currently working on to in clude user authentication and a comments section for each blog post',
    tags: ['React', 'Next.js', 'Tailwind', 'Sanity'],
    image: '/portfolio 3.png',
    link: '/projects/blog-website',
    deploymentLink: 'https://blog-milestone-3-phi.vercel.app/',
          },
  {
    title: 'Educational Website UI',
    description: 'Educational Website Landing Page that is responsive and has an fuctioning testimonials carousel',
    tags: ['Next.js', 'Tailwind', 'React', 'Shadcn'],
    image: '/portfolio 4.png',
    link: '/projects/educational-website-ui',
    deploymentLink: 'https://assignment6-eight-eta.vercel.app/',
  }
];

export default projects; 