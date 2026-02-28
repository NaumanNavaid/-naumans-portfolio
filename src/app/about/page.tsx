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
      icon: <TargetIcon className="w-5 h-5" />,
      title: "Business-First",
      description: "Every technical decision serves a business objective. I build solutions that drive measurable results."
    },
    {
      icon: <Code2Icon className="w-5 h-5" />,
      title: "Technical Excellence",
      description: "Clean, scalable, maintainable code. I follow industry best practices and build for the long term."
    },
    {
      icon: <LightbulbIcon className="w-5 h-5" />,
      title: "Innovation",
      description: "I stay at the forefront of technology—from AI/ML to modern frameworks—to deliver the best results."
    }
  ];

  return (
    <main className="pb-32">
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-mono">ABOUT</span>
          </div>

          <h1 className="text-display-md lg:text-display-lg font-extrabold mb-12 tracking-tightest leading-[0.9]">
            Product <span className="text-accent">Architect</span>
          </h1>

          <p className="text-2xl text-muted leading-relaxed max-w-2xl">
            I bridge the gap between <span className="text-foreground">sophisticated engineering</span> and <span className="text-foreground">real-world utility</span>.
          </p>
        </div>
      </section>

      {/* Profile & Story */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Card */}
          <div className="glass rounded-[48px] p-6 shadow-spatial-lg">
            <div className="aspect-[4/5] rounded-[36px] overflow-hidden bg-foreground/5 mb-8">
              <Image
                src="/nauman.jpg"
                alt="Nauman"
                width={500}
                height={625}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="px-4 pb-4 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">Nauman</h2>
                  <p className="text-mono">Full-Stack Architect</p>
                </div>
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-foreground/40">
                  <CpuIcon className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-foreground/5">
                <div className="flex items-center justify-between text-mono text-[11px]">
                  <span>Status</span>
                  <span className="text-foreground">Available for Projects</span>
                </div>
                <div className="flex items-center justify-between text-mono text-[11px]">
                  <span>Focus</span>
                  <span className="text-foreground">AI & SaaS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-12 py-8">
            <div className="space-y-6 text-xl text-muted leading-relaxed font-medium">
              <p>
                My path to product architecture is driven by a simple realization—that <span className="text-foreground">great code</span> must serve <span className="text-foreground">great products</span>.
              </p>
              <p>
                From AI-driven SaaS platforms like <span className="text-foreground">CV Crafter</span> to complex industrial monitoring systems, I've built solutions that businesses rely on every day.
              </p>
              <p>
                I specialize in the <span className="text-foreground">Next.js + FastAPI</span> stack, integrating advanced technologies like RAG and Vector Databases to create intelligent, scalable systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Products Shipped", value: "10+" },
                { label: "Years Experience", value: "02" },
                { label: "Tech Stack", value: "Modern" },
                { label: "Focus", value: "AI/SaaS" }
              ].map(s => (
                <div key={s.label} className="glass rounded-3xl p-6 text-center">
                  <div className="text-display-sm font-bold opacity-20 mb-1">{s.value}</div>
                  <div className="text-mono text-[10px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-[32px] p-8">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-8">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-5xl mx-auto">
        <div className="glass rounded-[60px] p-12 md:p-24 text-center shadow-spatial-lg border-accent/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
          <h2 className="text-display-sm font-bold tracking-tightest leading-[1.1] mb-12">
            Let's build your next <span className="text-accent">technical legacy.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-minimal-primary px-12 py-5 text-lg">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
