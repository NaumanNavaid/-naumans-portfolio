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
  ArrowLeftIcon,
  Linkedin
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
    <main className="pb-32">
      {/* Header */}
      <section className="pt-48 pb-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <Link
          href="/projects"
          className="text-mono border-b border-foreground/20 hover:border-foreground transition-colors pb-1 mb-12 inline-block"
        >
          &larr; Back to Case Studies
        </Link>

        <div className="max-w-4xl mt-12">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-mono">CASE STUDY</span>
          </div>

          <h1 className="text-display-md lg:text-display-lg font-extrabold mb-12 tracking-tightest leading-[0.9]">
            {project.title}
          </h1>

          <p className="text-2xl text-muted leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-mono bg-accent/10 text-accent px-3 py-1 rounded-full font-bold border border-accent/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto pb-24">
        <div className="relative rounded-[48px] overflow-hidden glass p-4 shadow-spatial-lg border-accent/10">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-[36px] transition-all duration-1000"
            unoptimized
          />
        </div>
      </section>

      {/* Case Study Content */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto pb-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <div className="glass rounded-[40px] p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground/40">
                  <BarChartIcon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">The Challenge</h2>
              </div>
              <p className="text-xl text-muted leading-relaxed">
                {project.challenge || "Engineering a solution that balances technical complexity with intuitive user experience, ensuring high performance and business utility."}
              </p>
            </div>

            {/* Solution */}
            <div className="glass rounded-[40px] p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground/40">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">The Solution</h2>
              </div>
              <p className="text-muted text-lg leading-relaxed mb-10">
                A modular full-stack architecture built for speed and scalability. By leveraging Next.js for the frontend and FastAPI for the core logic, I delivered a product that is both robust and flexible.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-foreground/5">
                {[
                  "Atomic component design",
                  "FastAPI high-performance core",
                  "TypeScript end-to-end safety",
                  "Cloud-native deployment"
                ].map(item => (
                  <div key={item} className="flex gap-3 text-mono text-[11px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            {project.outcome && (
              <div className="glass rounded-[40px] p-10 border-blue-500/10 border">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">The Outcome</h2>
                </div>
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass rounded-[40px] p-8 sticky top-32 shadow-spatial-md">
              <h3 className="text-mono mb-8">Project Hub</h3>
              <div className="space-y-3">
                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-minimal-primary w-full text-center py-4 flex items-center justify-center gap-2"
                >
                  Live Deployment
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-minimal w-full text-center py-4 flex items-center justify-center gap-2"
                  >
                    View Source
                    <Code2Icon className="w-4 h-4" />
                  </a>
                )}
                {project.linkedinLink && (
                  <a
                    href={project.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-minimal w-full text-center py-4 flex items-center justify-center gap-2 border-[#0077b5]/20 text-[#0077b5]"
                  >
                    LinkedIn Story
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="pt-8 mt-8 border-t border-foreground/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/40">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-mono uppercase tracking-widest opacity-40">Response</p>
                    <p className="font-bold tracking-tight">&lt; 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-5xl mx-auto">
        <div className="glass rounded-[60px] p-12 md:p-24 text-center shadow-spatial-lg relative overflow-hidden">
          <h2 className="text-display-sm font-bold tracking-tightest leading-[1.1] mb-12">
            Ready to scale your next <span className="text-foreground/40">technical venture?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-minimal-primary px-12 py-5 text-lg">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
