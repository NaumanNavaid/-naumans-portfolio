"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon, MailIcon } from 'lucide-react';
import ThemeToggle from './theme-toggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'CV', href: '/cv' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) return false;
    return pathname === href;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 lg:p-6 pointer-events-none">
      <nav
        className={`w-full max-w-6xl pointer-events-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? 'glass rounded-full px-6 py-3 shadow-spatial-md'
            : 'bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:rotate-12 shadow-lg shadow-accent/20">
              N
            </div>
            <span className="text-sm font-bold tracking-tighter uppercase hidden sm:block">
              Nauman Navaid
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-[13px] font-medium transition-all rounded-full ${
                  isActive(link.href)
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 btn-minimal-primary !py-2 !px-4"
            >
              <MailIcon className="w-3.5 h-3.5" />
              <span className="text-[13px]">Contact</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full text-foreground hover:bg-foreground/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-3xl p-6 shadow-spatial-lg animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-bold tracking-tight ${
                    isActive(link.href) ? 'text-blue-600' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-foreground/5 my-2" />
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-minimal-primary w-full text-center flex items-center justify-center gap-2"
              >
                <MailIcon className="w-4 h-4" />
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
