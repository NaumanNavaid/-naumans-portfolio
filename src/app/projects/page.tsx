// ============================================
// FILE: src/app/projects/page.tsx
// ============================================

import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';

export const metadata = {
  title: "Projects - Nauman's Portfolio",
  description: "Explore my featured projects and development work",
};

export default function Projects() {
  return (
    <section className="min-h-screen pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4 md:mb-6 tracking-tight">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Case Studies</span>
        </h1>
        <div className="w-16 md:w-20 lg:w-24 h-1 md:h-1.5 bg-gradient-primary mx-auto rounded-full mb-6 md:mb-8"></div>
        <p className="text-muted/90 text-sm md:text-base lg:text-lg xl:text-xl max-w-xl md:max-w-2xl mx-auto leading-relaxed">
          Discover how I've helped businesses transform their digital presence with
          custom web solutions and AI-powered applications.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-card/30 backdrop-blur-md rounded-3xl overflow-hidden border border-border/50 shadow-xl transition-all duration-300 hover:border-primary/50 fade-in"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Image
                  src={project.image}
                  alt={`Project ${project.title}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
              </div>
              <div className="p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted/80 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 text-emerald-500">Challenge</h4>
                    <p className="text-muted/80 text-xs md:text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 text-blue-500">Solution</h4>
                    <p className="text-muted/80 text-xs md:text-sm leading-relaxed">
                      Implemented a comprehensive solution using modern technologies and best practices.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 text-amber-500">Outcome</h4>
                    <p className="text-muted/80 text-xs md:text-sm leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-2 pt-3 md:pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 md:px-3 py-1 md:py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 md:gap-4 pt-3 md:pt-4">
                  <Link
                    href={project.link}
                    className="btn-gradient px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold text-center flex-1 text-sm md:text-base group-hover:scale-[1.02] transition-transform"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 md:px-6 py-2.5 md:py-3 bg-card/50 backdrop-blur-sm border-2 border-primary/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 md:mt-16 fade-in" style={{ animationDelay: '0.4s' }}>
        <p className="text-muted/80 mb-4 md:mb-6 text-sm md:text-base">
          More projects coming soon! Check back later for updates.
        </p>
        <Link
          href="/"
          className="px-6 md:px-8 py-3 md:py-4 bg-card/50 backdrop-blur-sm border-2 border-primary/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary transition-all inline-flex items-center gap-2 text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
