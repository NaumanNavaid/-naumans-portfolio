"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[40px] p-12 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm transition-transform group-hover:rotate-12">
                  N
                </div>
                <span className="text-sm font-bold tracking-tighter uppercase">
                  Nauman Navaid
                </span>
              </Link>
              <p className="text-muted text-sm leading-relaxed max-w-sm">
                Engineering sophisticated digital products where performance meets purpose. 
                Specialized in AI-integrated full-stack development.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-mono mb-6">Explore</h3>
              <ul className="space-y-4">
                {[
                  { name: "Work", href: "/#work" },
                  { name: "About", href: "/about" },
                  { name: "Process", href: "/#process" },
                  { name: "CV", href: "/cv" }
                ].map(l => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-mono mb-6">Connect</h3>
              <ul className="space-y-4">
                {[
                  { name: "LinkedIn", href: "https://linkedin.com/in/nauman" },
                  { name: "GitHub", href: "https://github.com/nauman" },
                  { name: "Email", href: "mailto:naumannavad378@gmail.com" }
                ].map(l => (
                  <li key={l.name}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
          <p className="text-mono text-[10px]">
            &copy; {currentYear} Nauman Navaid. Crafted with Purpose.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-mono text-[10px] opacity-40 hover:opacity-100">
              Privacy
            </Link>
            <Link href="/terms" className="text-mono text-[10px] opacity-40 hover:opacity-100">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
