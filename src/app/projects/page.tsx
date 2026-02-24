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
    <main>
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <FolderIcon className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent tracking-wide">CASE STUDIES</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Products I've Built
          </h1>

          <p className="text-xl text-muted leading-relaxed">
            Real solutions for real business challenges. Each case study represents a complete product journey—from problem discovery through design, development, and deployment.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="group"
            >
              {/* Project Card */}
              <div className="card-premium p-0 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-card-alt">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="badge badge-success">Deployed</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  {/* Title & Link */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLinkIcon className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Challenge/Solution/Outcome */}
                  <div className="space-y-4 mb-6">
                    {project.challenge && (
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                          <BarChartIcon className="w-4 h-4 text-amber-500" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted mb-1">CHALLENGE</p>
                          <p className="text-sm text-foreground">{project.challenge}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted mb-1">SOLUTION</p>
                        <p className="text-sm text-foreground">
                          Full-stack implementation with modern architecture and best practices.
                        </p>
                      </div>
                    </div>

                    {project.outcome && (
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                          <CheckIcon className="w-4 h-4 text-success" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted mb-1">OUTCOME</p>
                          <p className="text-sm text-foreground">{project.outcome}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted mb-3">TECHNOLOGY</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-background px-3 py-1.5 rounded-lg text-muted border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.deploymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 text-center justify-center"
                    >
                      View Live Site
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        aria-label="View source code"
                      >
                        <Code2Icon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-4xl mx-auto">
        <div className="card-elevated bg-card text-center">
          <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6">
            <CalendarIcon className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
            Let's discuss how I can help bring your vision to life. From AI-powered features to complete SaaS platforms, I have the expertise to deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-premium"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="btn-secondary"
            >
              <ArrowRightIcon className="w-5 h-5 rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
