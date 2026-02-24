"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRightIcon,
  CheckIcon,
  ExternalLinkIcon,
  MailIcon,
  CalendarIcon,
  ChevronRightIcon,
  Code2Icon,
  CpuIcon,
  DatabaseIcon,
  ZapIcon,
  BarChartIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersIcon,
  ClockIcon,
  BotIcon
} from 'lucide-react';
import projects from '@/data/projects';

// ============================================
// SECTION COMPONENTS
// ============================================

const SectionHeader = ({
  badge,
  title,
  description,
  align = 'center'
}: {
  badge?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}) => (
  <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
    {badge && (
      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        <span className="text-sm font-semibold text-accent tracking-wide">{badge}</span>
      </div>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
      {title}
    </h2>
    <p className={`text-muted text-lg md:text-xl max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {description}
    </p>
    <div className={`h-1 w-20 bg-gradient-premium rounded-full mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

const TechBadge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors">
    <span className="text-accent">{icon}</span>
    <span className="text-sm font-medium text-foreground">{name}</span>
  </div>
);

// ============================================
// HERO SECTION
// ============================================

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "AI-Enthusiast Engineer",
    "Frontend Specialist",
    "React Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="text-sm font-semibold text-success">Available for New Projects</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Nauman
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gradient-premium mt-2">
                  {roles[activeIndex]}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mt-6">
                Full-stack developer specializing in modern web applications with AI-assisted workflows.
                <span className="block mt-3 text-foreground font-medium">
                  Building responsive websites, dashboards, and AI-integrated applications.
                </span>
              </p>
            </div>

            {/* Tech Stack Preview */}
            <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-sm font-medium text-muted mb-3">Powering solutions with:</p>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="Next.js" icon={<Code2Icon className="w-4 h-4" />} />
                <TechBadge name="FastAPI" icon={<ZapIcon className="w-4 h-4" />} />
                <TechBadge name="TypeScript" icon={<CpuIcon className="w-4 h-4" />} />
                <TechBadge name="Qdrant" icon={<DatabaseIcon className="w-4 h-4" />} />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/contact"
                className="btn-premium"
              >
                <MailIcon className="w-5 h-5" />
                Get In Touch
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary"
              >
                View My Work
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="flex items-center gap-8 pt-4 border-t border-border fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div>
                <div className="text-3xl font-bold text-foreground">8+</div>
                <div className="text-sm text-muted">Projects Built</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">AI</div>
                <div className="text-sm text-muted">Enhanced Workflow</div>
              </div>
            </div>
          </div>

          {/* Right - Profile Card */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-premium rounded-3xl opacity-20 blur-2xl" />
              <div className="absolute -inset-1 border border-accent/20 rounded-3xl" />

              {/* Main card */}
              <div className="relative card-elevated bg-card overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20 rounded-t-2xl overflow-hidden">
                  <img
                    src="/nauman.jpg"
                    alt="Syed Nauman Navaid - Full-Stack Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Info overlay */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Syed Nauman Navaid</h3>
                    <p className="text-muted">Full-Stack Developer</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-accent">Next.js</span>
                    <span className="badge badge-accent">TypeScript</span>
                    <span className="badge badge-gold">AI/ML</span>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Location</span>
                      <span className="font-medium text-foreground">Karachi, Pakistan</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Open to</span>
                      <span className="font-medium text-success">Internships & Jobs</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Response</span>
                      <span className="font-medium text-success">&lt; 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// EXPERTISE SECTION
// ============================================

const Expertise = () => {
  const areas = [
    {
      icon: <BotIcon className="w-6 h-6" />,
      title: "AI-Powered SaaS Platforms",
      description: "Complete SaaS products with embedded AI capabilities—from LLM integrations to RAG-powered knowledge bases.",
      deliverables: ["RAG Systems", "Vector Search", "LLM Pipelines", "AI Agents"],
      color: "accent"
    },
    {
      icon: <Code2Icon className="w-6 h-6" />,
      title: "Full-Stack Product Engineering",
      description: "Scalable web applications built with modern architectures. I engineer solutions, not just features.",
      deliverables: ["Next.js Apps", "FastAPI Backends", "System Design", "Architecture"],
      color: "primary"
    },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: "Operational Business Systems",
      description: "Complex inventory, monitoring, and workflow solutions for construction, art, and other industries.",
      deliverables: ["Dashboards", "Analytics", "Automation", "Integrations"],
      color: "gold"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-card-alt">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <SectionHeader
          badge="CORE EXPERTISE"
          title="Engineering Complete Solutions"
          description="From concept to deployed product. I handle the full technical journey so you can focus on your business."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, idx) => (
            <div
              key={area.title}
              className="card-premium fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${area.color === 'accent' ? 'bg-accent/10' : area.color === 'gold' ? 'bg-gold/10' : 'bg-primary/10'} mb-6`}>
                <span className={area.color === 'accent' ? 'text-accent' : area.color === 'gold' ? 'text-gold' : 'text-foreground'}>
                  {area.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted mb-6 leading-relaxed">{area.description}</p>

              <div className="pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">Key Capabilities:</p>
                <div className="flex flex-wrap gap-2">
                  {area.deliverables.map((item) => (
                    <span key={item} className="text-sm text-muted bg-background px-3 py-1 rounded-lg border border-border">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TECH STACK SECTION
// ============================================

const TechStack = () => {
  const categories = [
    {
      name: "Frontend",
      icon: <Code2Icon className="w-5 h-5" />,
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"]
    },
    {
      name: "Backend",
      icon: <CpuIcon className="w-5 h-5" />,
      tech: ["FastAPI", "Node.js", "Python", "PostgreSQL", "REST APIs"]
    },
    {
      name: "AI & Data",
      icon: <DatabaseIcon className="w-5 h-5" />,
      tech: ["Qdrant", "LangChain", "OpenAI", "Vector DBs", "RAG"]
    },
    {
      name: "Infrastructure",
      icon: <ShieldIcon className="w-5 h-5" />,
      tech: ["Vercel", "Docker", "CI/CD", "Git", "Cloud"]
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <SectionHeader
          badge="TECHNOLOGY STACK"
          title="Tools I Use to Ship Products"
          description="A carefully curated stack optimized for performance, scalability, and developer experience."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="card-premium text-center fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4 text-accent">
                {cat.icon}
              </div>
              <h3 className="font-bold text-foreground mb-4">{cat.name}</h3>
              <ul className="space-y-2">
                {cat.tech.map((t) => (
                  <li key={t} className="text-sm text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-muted text-sm">
            I continuously evaluate and adopt new technologies. What matters most is
            <span className="text-foreground font-medium"> solving your problem effectively</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROCESS SECTION
// ============================================

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep dive into your business requirements, user needs, and technical constraints.",
      duration: "3-5 days",
      output: "Technical spec & architecture"
    },
    {
      number: "02",
      title: "Design",
      description: "Wireframes, user flows, and interactive prototypes aligned with your goals.",
      duration: "1-2 weeks",
      output: "Design system & UI"
    },
    {
      number: "03",
      title: "Build",
      description: "Agile development with regular demos. Clean code, comprehensive testing.",
      duration: "2-6 weeks",
      output: "Production-ready MVP"
    },
    {
      number: "04",
      title: "Deploy & Scale",
      description: "Launch to production with monitoring, documentation, and ongoing support.",
      duration: "1 week",
      output: "Live product + handoff"
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-card-alt">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <SectionHeader
          badge="MY PROCESS"
          title="From Idea to Production"
          description="A structured approach to product development. No surprises, just consistent progress toward your goals."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              <div className="card-premium h-full">
                <div className="text-4xl font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">{step.description}</p>
                <div className="pt-4 border-t border-border space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted">Timeline:</span>
                    <span className="font-medium text-foreground">{step.duration}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted">Deliverable:</span>
                    <span className="font-medium text-foreground">{step.output}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-success/10 border border-success/20 rounded-xl">
            <ClockIcon className="w-5 h-5 text-success" />
            <span className="text-success font-medium">
              Typical MVP Timeline: 4-8 weeks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FEATURED PROJECTS
// ============================================

const FeaturedProjects = () => {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 md:py-32" id="work">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <SectionHeader
          badge="CASE STUDIES"
          title="Products I've Built"
          description="Real solutions for real business challenges. Each project represents a complete product journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, idx) => (
            <div
              key={project.title}
              className="card-premium p-0 overflow-hidden group fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-card-alt">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute top-3 right-3 z-20">
                  <span className="badge badge-success">Live</span>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLinkIcon className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>

                {project.outcome && (
                  <div className="mb-4 p-3 bg-success/10 rounded-lg">
                    <p className="text-xs text-success font-medium">
                      ✓ {project.outcome}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-background px-2 py-1 rounded-md text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4 flex-1 text-center"
                  >
                    View Live
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      className="btn-secondary text-sm py-2 px-4"
                    >
                      <Code2Icon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All Case Studies
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CTA SECTION
// ============================================

const CTA = () => {
  const benefits = [
    { icon: <ZapIcon className="w-5 h-5" />, text: "Rapid prototyping & MVP delivery" },
    { icon: <ShieldIcon className="w-5 h-5" />, text: "Production-ready, scalable code" },
    { icon: <UsersIcon className="w-5 h-5" />, text: "Clear communication & transparency" },
    { icon: <TrendingUpIcon className="w-5 h-5" />, text: "Focus on business outcomes" }
  ];

  return (
    <section className="py-24 md:py-32 bg-card-alt" id="contact">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="badge badge-accent mb-6">Let's Build Something Great</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Idea Into Reality?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Whether you need a complete SaaS platform, an AI-powered feature, or a custom operational system—
            I have the expertise to deliver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 p-4 bg-card rounded-xl border border-border">
              <span className="text-accent">{benefit.icon}</span>
              <span className="font-medium text-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-premium">
            <MailIcon className="w-5 h-5" />
            Start Your Project
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <a
            href="https://calendly.com/nauman"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <CalendarIcon className="w-5 h-5" />
            Schedule Strategy Call
            <ChevronRightIcon className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-8 text-sm text-muted">
          Or email me directly at{' '}
          <a href="mailto:nauman@example.com" className="text-accent hover:underline">
            nauman@example.com
          </a>
        </p>
      </div>
    </section>
  );
};

// ============================================
// MAIN PAGE
// ============================================

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Expertise />
      <TechStack />
      <Process />
      <FeaturedProjects />
      <CTA />
    </main>
  );
}
