"use client";

import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/app/providers/ThemeProvider';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // Safely get theme context with fallback
  const themeContext = (() => {
    try {
      return useTheme();
    } catch (error) {
      return { theme: 'dark' as const, toggleTheme: () => {} };
    }
  })();

  const { theme, toggleTheme } = themeContext;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative inline-flex items-center justify-center rounded-md p-2">
        <div className="h-5 w-5" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        {/* Sun icon for light mode */}
        <SunIcon
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />

        {/* Moon icon for dark mode */}
        <MoonIcon
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>

      {/* Subtle glow effect */}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}