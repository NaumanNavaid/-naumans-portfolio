import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  Code2Icon,
  CheckIcon,
  CalendarIcon,
  BarChartIcon,
  ClockIcon,
  UserIcon,
  FolderIcon
} from 'lucide-react';
import projects from '@/data/projects';

export const metadata = {
  title: "Case Studies - Nauman's Portfolio",
  description: "Explore how Nauman engineers complete digital solutions from AI-powered SaaS to complex operational systems.",
};

export default function ProjectsPage() {
  return (
    <main className="pb-32">
      {/* Header */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-mono">PORTFOLIO</span>
          </div>

          <h1 className="text-display-md lg:text-display-lg font-extrabold mb-12 tracking-tightest leading-[0.9]">
            Case <span className="text-accent">Studies</span>
          </h1>

          <p className="text-2xl text-muted leading-relaxed max-w-2xl">
            A selection of products where engineering meets purpose. Each project is a journey from <span className="text-foreground">discovery</span> to <span className="text-foreground">deployment</span>.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="group"
            >
              <div className="glass rounded-[48px] p-6 h-full flex flex-col transition-all duration-700 hover:shadow-spatial-lg">
                <div className="aspect-[16/10] rounded-[36px] overflow-hidden mb-10 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] text-mono bg-accent text-white px-4 py-1.5 rounded-full uppercase font-bold tracking-widest shadow-lg shadow-accent/20">Deployed</span>
                  </div>
                </div>

                <div className="px-4 pb-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold tracking-tighter">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                       {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-foreground/5 transition-colors">
                          <Code2Icon className="w-5 h-5 opacity-40 hover:opacity-100" />
                        </a>
                      )}
                      <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-foreground/5 transition-colors">
                        <ExternalLinkIcon className="w-5 h-5 opacity-40 hover:opacity-100" />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted text-lg mb-10 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-mono bg-foreground/5 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-minimal-primary w-full text-center py-4 text-lg"
                  >
                    Explore Project
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-5xl mx-auto">
        <div className="glass rounded-[60px] p-12 md:p-24 text-center shadow-spatial-lg relative overflow-hidden border-accent/10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-sm font-bold tracking-tightest leading-[1.1] mb-8">
              Ready to build your next <span className="text-accent">success story?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn-minimal-primary px-10 py-4">
                Start a Project
              </Link>
              <Link href="/" className="btn-minimal px-10 py-4">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
