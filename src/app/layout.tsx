import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Nauman Navaid | Full-Stack Developer",
  description: "Full-stack developer specializing in modern web applications with AI-assisted workflows. Next.js, React, TypeScript, FastAPI, Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30`}
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const isDark = theme !== 'light';

                  // Apply theme immediately to prevent flash
                  document.documentElement.style.backgroundColor = isDark ? '#020617' : '#F8FAFC';
                  document.documentElement.style.color = isDark ? '#F8FAFC' : '#0F172A';

                  // Then set up the classes
                  const root = document.documentElement;
                  const body = document.body;

                  root.classList.remove('light', 'dark');
                  body.classList.remove('light-mode', 'dark-mode');

                  if (isDark) {
                    root.classList.add('dark');
                    body.classList.add('dark-mode');
                  } else {
                    root.classList.add('light');
                    body.classList.add('light-mode');
                  }

                  // Remove inline styles after a brief delay to allow CSS to take over
                  setTimeout(() => {
                    document.documentElement.style.backgroundColor = '';
                    document.documentElement.style.color = '';
                  }, 50);
                } catch (e) {
                  console.error('Theme init error:', e);
                }
              })();
            `,
          }}
        />
        <ThemeProvider>
          <div className="noise" />
          <div className="mesh-gradient" />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
