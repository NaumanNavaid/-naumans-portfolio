import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';

export const metadata = {
  title: "Projects - Nauman's Portfolio",
  description: "Explore my featured projects and development work",
};

export default function Projects() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-muted/90 text-xl max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing my skills in web development, 
            design, and problem-solving across various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="card-hover bg-card/30 backdrop-blur-md rounded-3xl overflow-hidden border border-border/50 shadow-xl transition-all duration-300 group hover:border-primary/50 fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Image
                  src={project.image}
                  alt={`Project ${project.title}`}
                  width={400}
                  height={224}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted/80 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient w-full py-3 rounded-xl font-semibold text-center block mt-6 group-hover:scale-[1.02] transition-transform"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted/80 mb-6">
            More projects coming soon! Check back later for updates.
          </p>
          <Link
            href="/"
            className="px-8 py-4 bg-card/50 backdrop-blur-sm border-2 border-primary/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary transition-all inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}