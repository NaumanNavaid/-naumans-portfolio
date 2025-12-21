"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize theme on client side to prevent SSR mismatch
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      return savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to dark
    }
    return 'dark';
  });
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after first render (client-side only)
  useEffect(() => {
    setMounted(true);

    // Only load theme from localStorage if not already set
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme to body and save to localStorage
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      const body = document.body;
      const html = document.documentElement;

      // Force cleanup of any existing theme classes first
      body.classList.remove('dark-mode', 'light-mode');
      html.classList.remove('dark', 'light');

      // Apply new theme classes
      if (theme === 'dark') {
        body.classList.add('dark-mode');
        html.classList.add('dark');
      } else {
        // Ensure light mode has proper styling
        body.classList.add('light-mode');
        html.classList.add('light');
      }

      // Force a repaint to ensure styles are applied immediately
      body.style.display = 'none';
      body.offsetHeight; // Trigger reflow
      body.style.display = '';

      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}