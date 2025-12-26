import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import projects from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ title: string }> }): Promise<Metadata> {
  const { title } = await params;
  const project = projects.find(p =>
    p.link === `/projects/${title}`
  );

  if (!project) return {};

  return {
    title: `${project.title} - Nauman's Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ title: string }> }) {
  const { title } = await params;
  const project = projects.find(p =>
    p.link === `/projects/${title}`
  );

  if (!project) return notFound();

  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 fade-in">
      <div className="mb-8 md:mb-12">
        <Link
          href="/#projects"
          className="text-primary hover:text-accent font-semibold flex items-center group w-fit text-sm md:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground tracking-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-primary/10 text-primary rounded-xl border border-primary/20"
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
            unoptimized
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="md:col-span-2 space-y-6 md:space-y-8 lg:space-y-10">
            <div className="bg-card/30 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-border/50">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">Project Overview</h2>
              <p className="text-muted/90 text-sm md:text-base lg:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-border/50">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">Case Study</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold text-emerald-500 mb-2 md:mb-3">Challenge</h4>
                  <p className="text-muted/80 text-sm md:text-base leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold text-blue-500 mb-2 md:mb-3">Solution</h4>
                  <p className="text-muted/80 text-sm md:text-base leading-relaxed">
                    Implemented a comprehensive solution using modern technologies and best practices.
                    The approach focused on scalability, performance, and user experience while ensuring
                    maintainable code and seamless integration with existing systems.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold text-amber-500 mb-2 md:mb-3">Outcome</h4>
                  <p className="text-muted/80 text-sm md:text-base leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-border/50">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Technical Details</h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground text-base md:text-lg mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 md:px-3 py-1 md:py-1.5 text-xs md:text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base md:text-lg mb-2">Project Type</h4>
                  <p className="text-muted/80 text-sm md:text-base">Web Application</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base md:text-lg mb-2">Role</h4>
                  <p className="text-muted/80 text-sm md:text-base">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-card/30 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-border/50 sticky top-20 md:top-24">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Quick Links</h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient w-full py-3 md:py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2 group text-sm md:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Live Demo
                </a>
                <Link
                  href="/#projects"
                  className="w-full block text-center py-3 md:py-4 bg-card/50 border-2 border-border/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all text-sm md:text-base"
                >
                  ← All Projects
                </Link>
                <Link
                  href="/contact"
                  className="w-full block text-center py-3 md:py-4 bg-card/50 border-2 border-border/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all text-sm md:text-base"
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
