import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckIcon,
  MailIcon,
  CalendarIcon,
  Code2Icon,
  CpuIcon,
  BotIcon,
  ZapIcon,
  TargetIcon,
  LightbulbIcon,
  UsersIcon,
  AwardIcon,
  ExternalLinkIcon
} from 'lucide-react';

export const metadata = {
  title: "About Nauman - Product Architect & Technical Founder",
  description: "Learn how Nauman engineers complete digital solutions from AI-powered SaaS to complex operational systems.",
};

const About = () => {
  const values = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Business-First Approach",
      description: "Every technical decision serves a business objective. I build solutions that drive measurable results."
    },
    {
      icon: <Code2Icon className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Clean, scalable, maintainable code. I follow industry best practices and build systems that are easy to extend and evolve."
    },
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      title: "Continuous Innovation",
      description: "I stay at the forefront of technology—from AI/ML to modern frameworks—so you always get the best solution for your needs."
    }
  ];

  const capabilities = [
    {
      category: "AI & Automation",
      icon: <BotIcon className="w-5 h-5" />,
      items: ["RAG Systems", "Vector Databases (Qdrant)", "LLM Integrations", "LangChain", "AI Agents", "Smart Workflows"]
    },
    {
      category: "Full-Stack Development",
      icon: <Code2Icon className="w-5 h-5" />,
      items: ["Next.js", "React", "FastAPI", "TypeScript", "PostgreSQL", "REST APIs", "System Design"]
    },
    {
      category: "Product Engineering",
      icon: <ZapIcon className="w-5 h-5" />,
      items: ["SaaS Architecture", "MVP Development", "Scalable Systems", "Performance Optimization", "Cloud Infrastructure"]
    }
  ];

  const experience = [
    { metric: "10+", label: "Products Shipped" },
    { metric: "100%", label: "Client Satisfaction" },
    { metric: "2x", label: "Average Client ROI" },
    { metric: "24h", label: "Response Time" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent tracking-wide">ABOUT ME</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Engineering Products That<br />
            <span className="text-gradient-premium">Drive Real Business Value</span>
          </h1>

          <p className="text-xl text-muted leading-relaxed">
            I'm not just a developer—I'm a <strong className="text-foreground">Product Architect</strong> and <strong className="text-foreground">Technical Founder</strong> who bridges the gap between sophisticated web development and real-world business utility.
          </p>
        </div>
      </section>

      {/* Profile Card & Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <div className="card-elevated bg-card">
            <div className="aspect-square bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20 rounded-t-2xl overflow-hidden">
              <Image
                src="/nauman.jpg"
                alt="Nauman - Product Architect"
                width={500}
                height={500}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Nauman</h2>
                <p className="text-muted">Full-Stack Product Architect</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-accent">AI/ML</span>
                <span className="badge badge-accent">SaaS</span>
                <span className="badge badge-gold">Technical Founder</span>
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Location</span>
                  <span className="font-medium text-foreground">Global Remote</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Availability</span>
                  <span className="font-medium text-success">Open for Projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Response Time</span>
                  <span className="font-medium text-foreground">&lt; 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* My Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">My Journey</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  My path to product architecture wasn't traditional. It started with a realization—that great technology alone doesn't build successful businesses. Great <strong>products</strong> do.
                </p>
                <p>
                  This insight shaped my approach: I don't just write code. I engineer complete digital solutions that transform raw business needs into scalable, market-ready products.
                </p>
                <p>
                  From <strong className="text-foreground">AI-driven SaaS platforms like CV Crafter</strong> to <strong className="text-foreground">complex inventory and project monitoring systems</strong> for construction and art industries—I've built solutions that real businesses rely on every day.
                </p>
                <p>
                  My expertise spans the full stack: <span className="text-accent">Next.js</span> for lightning-fast frontends, <span className="text-accent">FastAPI</span> for robust backends, and <span className="text-accent">TypeScript</span> for type-safe code that scales. But what sets me apart is my deep understanding of how technology serves business goals.
                </p>
                <p>
                  By integrating advanced technologies like <strong className="text-foreground">RAG</strong> and <strong className="text-foreground">Vector Databases (Qdrant)</strong> with operational workflows, I create systems that don't just work—they transform how businesses operate.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {experience.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-card border border-border rounded-xl">
                  <div className="text-2xl font-bold text-accent">{stat.metric}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">How I Work</h2>
          <p className="text-muted max-w-2xl mx-auto">
            These principles guide every project I take on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={value.title} className="card-premium">
              <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-6 text-accent">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto bg-card-alt -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-16 px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical Expertise</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={cap.category} className="bg-card p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-accent">{cap.icon}</span>
                <h3 className="font-bold text-foreground">{cap.category}</h3>
              </div>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <CheckIcon className="w-4 h-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-4xl mx-auto">
        <div className="card-elevated bg-card text-center">
          <div className="inline-flex p-4 rounded-2xl bg-gold/10 mb-6">
            <AwardIcon className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Me?</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="flex gap-3">
              <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Full-Stack Capability</p>
                <p className="text-sm text-muted">I handle everything from database to frontend</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Business Understanding</p>
                <p className="text-sm text-muted">I focus on outcomes, not just features</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Clear Communication</p>
                <p className="text-sm text-muted">Regular updates, no surprises</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Production-Ready Code</p>
                <p className="text-sm text-muted">Tested, documented, scalable</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact" className="btn-premium">
              <MailIcon className="w-5 h-5" />
              Start a Conversation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <a
              href="https://calendly.com/nauman"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <CalendarIcon className="w-5 h-5" />
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
