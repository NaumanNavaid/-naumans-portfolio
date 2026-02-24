"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Case Studies", href: "/projects" },
        { name: "CV", href: "/cv" },
        { name: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/#services" },
        { name: "Full-Stack Dev", href: "/#services" },
        { name: "SaaS Products", href: "/#services" },
        { name: "Consulting", href: "/contact" },
      ]
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", href: "https://github.com/nauman", external: true },
        { name: "LinkedIn", href: "https://linkedin.com/in/nauman", external: true },
        { name: "Twitter", href: "https://twitter.com/nauman", external: true },
        { name: "Email", href: "mailto:naumannavad378@gmail.com" },
      ]
    }
  ];

  return (
    <footer className="border-t border-border bg-card-alt">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-foreground">
                  Nauman
                  <span className="text-accent">.</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Full-stack developer specializing in modern web applications with AI-assisted workflows. Building responsive websites, dashboards, and AI-integrated applications.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/nauman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/nauman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/nauman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:naumannavad378@gmail.com"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            {navSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.name}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.name}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 py-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} Nauman. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
