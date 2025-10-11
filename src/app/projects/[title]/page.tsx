import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import projects from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { title: string } }): Promise<Metadata> {
  const project = projects.find(p => 
    p.link === `/projects/${params.title}`
  );
  
  if (!project) return {};

  return {
    title: `${project.title} - Nauman's Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { title: string } }) {
  const project = projects.find(p => 
    p.link === `/projects/${params.title}`
  );
  
  if (!project) return notFound();

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 fade-in">
      <div className="mb-12">
        <Link
          href="/#projects"
          className="text-primary hover:text-accent font-semibold flex items-center group w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-xl border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10">
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
              <p className="text-muted/90 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Project Type</h4>
                  <p className="text-muted/80">Web Application</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Role</h4>
                  <p className="text-muted/80">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-border/50 sticky top-24">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient w-full py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Live Demo
                </a>
                <Link
                  href="/#projects"
                  className="w-full block text-center py-4 bg-card/50 border-2 border-border/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  ← All Projects
                </Link>
                <Link
                  href="/contact"
                  className="w-full block text-center py-4 bg-card/50 border-2 border-border/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}