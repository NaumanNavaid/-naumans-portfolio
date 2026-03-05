"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  Code2Icon,
  CpuIcon,
  DatabaseIcon,
  ZapIcon,
  BotIcon
} from 'lucide-react';
import { TechBadge } from './SectionHeader';

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "AI-Enthusiast Engineer",
    "Frontend Specialist",
    "Product Designer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:bg-accent/15">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent">Available for Projects</span>
              </div>

              <h1 className="text-display-lg font-extrabold mb-8 tracking-tightest leading-[0.9]">
                Syed Nauman
                <span className="block text-display-sm text-accent mt-2 font-medium">
                  {roles[activeIndex]}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-xl">
                I build digital products where <span className="text-foreground font-medium">high-performance code</span> meets
                <span className="text-foreground font-medium"> minimalist design</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Link
                href="/contact"
                className="btn-minimal-primary flex items-center justify-center gap-2 px-8 py-4 group"
              >
                Let's Talk
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="btn-minimal flex items-center justify-center gap-2 px-8 py-4"
              >
                View Case Studies
              </Link>
            </div>

            {/* Tech Stack Preview */}
            <div className="fade-in-up pt-4" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="Next.js" icon={<Code2Icon className="w-4 h-4" />} />
                <TechBadge name="FastAPI" icon={<ZapIcon className="w-4 h-4" />} />
                <TechBadge name="TypeScript" icon={<CpuIcon className="w-4 h-4" />} />
                <TechBadge name="Qdrant" icon={<DatabaseIcon className="w-4 h-4" />} />
              </div>
            </div>

            {/* Trust Metrics */}
            <div className="flex items-center gap-12 pt-12 border-t border-accent/10 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-1">
                <div className="text-display-sm font-bold text-accent/30">08</div>
                <div className="text-mono">Projects Built</div>
              </div>
              <div className="space-y-1">
                <div className="text-display-sm font-bold text-accent/30">02</div>
                <div className="text-mono">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Profile Card */}
          <div className="relative fade-in-up hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative glass rounded-[40px] p-6 shadow-spatial-lg overflow-hidden border-accent/10 transition-all duration-700 hover:shadow-2xl hover:border-accent/20">
                <div className="aspect-[4/5] rounded-[30px] overflow-hidden bg-accent/5 relative">
                  <img
                    src="/nauman.jpg"
                    alt="Syed Nauman Navaid"
                    className="w-full h-full object-cover object-top transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-mono text-white/80 mb-1">Status</div>
                    <div className="text-sm font-bold text-white tracking-tight bg-accent/80 backdrop-blur-md px-3 py-1 rounded-full">Shipping Quality</div>
                  </div>
                </div>

                <div className="pt-8 pb-4 px-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tighter">Syed Nauman</h3>
                      <p className="text-mono text-accent">Full-Stack Developer</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent hover:bg-accent/20 transition-colors cursor-pointer">
                      <BotIcon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-mono">
                      <span>Location</span>
                      <span className="text-foreground font-bold">Karachi, Pakistan</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-mono">
                      <span>Response</span>
                      <span className="text-accent font-bold">&lt; 24h</span>
                    </div>
                    <div className="w-full h-px bg-foreground/5" />
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['React', 'Next.js', 'FastAPI'].map(t => (
                        <span key={t} className="text-[10px] text-mono bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/10 font-bold hover:bg-accent/20 transition-colors cursor-default">{t}</span>
                      ))}
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
