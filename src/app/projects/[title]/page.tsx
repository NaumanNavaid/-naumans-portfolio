import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  FolderIcon,
  ArrowLeftIcon
} from 'lucide-react';
import projects from '@/data/projects';

export async function generateMetadata({ params }: { params: Promise<{ title: string }> }): Promise<Metadata> {
  const { title } = await params;
  const project = projects.find(p => p.link === `/projects/${title}`);

  if (!project) return {};

  return {
    title: `${project.title} - Case Study | Nauman`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ title: string }> }) {
  const { title } = await params;
  const project = projects.find(p => p.link === `/projects/${title}`);

  if (!project) return notFound();

  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Case Studies
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
          <FolderIcon className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-accent tracking-wide">CASE STUDY</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {project.title}
        </h1>

        <p className="text-xl text-muted max-w-3xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto pb-16">
        <div className="relative rounded-2xl overflow-hidden border border-border">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Case Study Content */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Challenge */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10">
                  <BarChartIcon className="w-6 h-6 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">The Challenge</h2>
              </div>
              <p className="text-muted leading-relaxed">
                {project.challenge || "Building a scalable solution that addresses complex business requirements while maintaining excellent user experience and performance."}
              </p>
            </div>

            {/* Solution */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <CheckIcon className="w-6 h-6 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">The Solution</h2>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                I implemented a comprehensive solution using modern technologies and best practices.
                The approach focused on scalability, performance, and user experience while ensuring
                maintainable code and seamless integration.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-2">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Full-stack architecture</span>
                </div>
                <div className="flex gap-2">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Modern tech stack</span>
                </div>
                <div className="flex gap-2">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Responsive design</span>
                </div>
                <div className="flex gap-2">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Production-ready code</span>
                </div>
              </div>
            </div>

            {/* Outcome */}
            {project.outcome && (
              <div className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <CheckIcon className="w-6 h-6 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">The Outcome</h2>
                </div>
                <p className="text-muted leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}

            {/* Technical Details */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Code2Icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Technical Details</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted">Project Type</p>
                    <p className="font-medium text-foreground">Web Application</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Role</p>
                    <p className="font-medium text-foreground">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="card-premium sticky top-24">
              <h3 className="font-bold text-foreground mb-4">Project Actions</h3>
              <div className="space-y-3">
                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  View Live Site
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center"
                  >
                    <Code2Icon className="w-5 h-5" />
                    View Source
                  </a>
                )}
                <Link
                  href="/contact"
                  className="w-full block text-center py-3 bg-background border border-border rounded-xl hover:border-accent transition-colors font-medium"
                >
                  Start Similar Project
                </Link>
              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <div className="flex items-center gap-3 mb-4">
                  <ClockIcon className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted">Response Time</p>
                    <p className="font-medium text-foreground">&lt; 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-card-alt p-6 rounded-2xl border border-border text-center">
              <p className="text-sm text-muted mb-4">
                Need a similar solution for your business?
              </p>
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
              >
                Let's Talk
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto bg-card-alt -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-16 px-4 sm:px-6 lg:px-8 xl:px-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">More Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => p.title !== project.title).slice(0, 3).map((relatedProject) => (
            <Link
              key={relatedProject.title}
              href={relatedProject.link}
              className="card-premium p-0 overflow-hidden group"
            >
              <div className="aspect-video bg-card-alt overflow-hidden">
                <Image
                  src={relatedProject.image}
                  alt={relatedProject.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                  {relatedProject.title}
                </h3>
                <p className="text-sm text-muted mt-1 line-clamp-2">
                  {relatedProject.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
