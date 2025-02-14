import { notFound } from 'next/navigation';
import projects from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';


interface ProjectPageProps {
  params: {
    title: string;
  };
  searchParams?: Promise<URLSearchParams>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => 
    p.link === `/projects/${params.title}`
  );
  
  if (!project) return notFound();

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-8">
        <Link
          href="/#projects"
          className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{project.title}</h1>
        
        <div className="relative rounded-xl overflow-hidden border border-gray-200">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Demo</h3>
              <a
                href={project.deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
