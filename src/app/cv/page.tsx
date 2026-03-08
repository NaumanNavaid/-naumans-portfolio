"use client";

import React from 'react';
import { PrinterIcon } from 'lucide-react';

const CVPage = () => {
  const handlePrint = () => {
    window.print();
  };

  const projects = [
    {
      title: "FASCO E-Commerce Storefront",
      tech: "Next.js, React, Tailwind CSS",
      description: "Premium fashion retail experience built in 7 days with mobile-optimized product gallery and Context API cart state.",
      highlights: [
        "Pixel-perfect Figma translation with modular architecture",
        "Dynamic [slug] routing with simulated database mapping"
      ]
    },
    {
      title: "CV Crafter",
      tech: "Next.js, TypeScript, FastAPI",
      description: "Platform where users can get custom-made resumes from professionals.",
      highlights: [
        "Built full-stack platform with modular architecture",
        "Real-time CV preview with professional CV writer services"
      ]
    },
    {
      title: "AI Book Chatbot (RAG)",
      tech: "FastAPI, Python, Qdrant, OpenAI",
      description: "RAG chatbot for querying book content with context-aware responses.",
      highlights: [
        "Document embeddings with vector similarity search",
        "Scalable REST API with LLM reasoning"
      ]
    },
    {
      title: "Inventory Portal",
      tech: "Next.js, FastAPI, PostgreSQL",
      description: "Web app with authentication and real-time stock tracking.",
      highlights: [
        "CRUD operations with data validation",
        "Responsive dashboard with exportable reports"
      ]
    },
    {
      title: "Art Gallery Platform",
      tech: "Next.js, Sanity CMS, PostgreSQL",
      description: "Dynamic gallery with custom admin CMS.",
      highlights: [
        "CMS integration with filtering and search",
        "Optimized image handling for high-quality display"
      ]
    },
    {
      title: "AI To-Do App",
      tech: "Next.js, FastAPI, LLM API",
      description: "Task management with AI-generated suggestions.",
      highlights: [
        "LLM API integration for smart suggestions",
        "Authentication with persistent storage"
      ]
    },
    {
      title: "Construction Website",
      tech: "Next.js, TypeScript, Tailwind CSS",
      description: "Corporate website with SEO optimization.",
      highlights: [
        "Dynamic routing with optimized performance",
        "Accessibility-focused responsive design"
      ]
    }
  ];

  return (
    <main className="min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section for Web */}
        <div className="no-print mb-16 max-w-2xl">
          <span className="text-mono mb-6 block">CURRICULUM VITAE</span>
          <h1 className="text-display-sm font-extrabold mb-8 tracking-tightest leading-[1.1]">
            Professional <span className="text-foreground/40">Background</span>
          </h1>
          <button onClick={handlePrint} className="btn-minimal-primary px-8 py-3 flex items-center gap-2">
            <PrinterIcon className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* CV DOCUMENT START */}
        <div className="shadow-spatial-lg">
          {/* PAGE 1 */}
          <div className="cv-page bg-white text-black p-12 mb-0 print:pb-12 print:shadow-none">
            {/* Header */}
            <div className="border-b-2 border-black pb-8 mb-8">
              <h1 className="text-5xl font-extrabold mb-2 tracking-tighter text-black">
                Syed Nauman <span className="text-blue-600">Navaid</span>
              </h1>
              <p className="text-xl font-bold tracking-tight text-gray-500 mb-6">Full-Stack Developer</p>
              <div className="grid grid-cols-2 gap-2 text-[13px] font-medium text-gray-400 uppercase tracking-wider">
                <span className="text-black">naumannavad378@gmail.com</span>
                <span className="text-black">+92 309 1273446</span>
                <span className="text-black">nauman.navaid (LinkedIn)</span>
                <span className="text-black">Karachi, Pakistan</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                Summary
              </h2>
              <p className="text-sm leading-relaxed text-black font-medium opacity-80">
                Full-stack developer specializing in modern web applications with AI-assisted workflows.
                Experienced with Next.js, React, TypeScript, and FastAPI. Proficient in leveraging AI tools
                for rapid prototyping and prompt engineering. Seeking internship or junior developer role.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                Experience
              </h2>
              <div className="text-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-lg tracking-tight text-black">Freelance Web Developer</span>
                  <span className="text-gray-400 font-mono text-xs">2023 - PRESENT</span>
                </div>
                <ul className="space-y-2 text-black font-medium opacity-70">
                  <li>• Deliver responsive web applications and dashboards</li>
                  <li>• Convert Figma designs into production-ready code</li>
                  <li>• Build AI-integrated applications and CMS platforms</li>
                  <li>• Manage full-stack development from backend to frontend</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                Technical Stack
              </h2>
              <div className="grid grid-cols-2 gap-6 text-[13px]">
                <div>
                  <p className="font-bold mb-2 uppercase tracking-tight">Languages & Frontend</p>
                  <p className="text-black opacity-60 font-medium">Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3</p>
                </div>
                <div>
                  <p className="font-bold mb-2 uppercase tracking-tight">Backend & AI</p>
                  <p className="text-black opacity-60 font-medium">Node.js, FastAPI, Python, REST APIs, RAG, Prompt Engineering</p>
                </div>
              </div>
            </div>
          </div>

          {/* PAGE 2 */}
          <div className="cv-page bg-white text-black p-12 pt-0 print:pt-12 print:shadow-none">
            {/* Projects */}
            <div className="mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
                Selected Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project, idx) => (
                  <div key={idx} className="text-sm">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-bold text-base tracking-tight text-black">{project.title}</span>
                      <span className="text-[10px] font-mono text-gray-400 uppercase">{project.tech}</span>
                    </div>
                    <p className="text-black opacity-60 mb-3 font-medium">{project.description}</p>
                    <ul className="space-y-1 text-black opacity-70 text-xs">
                      {project.highlights.map((h, i) => (
                        <li key={i}>• {h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Education</h3>
                <p className="text-sm font-bold tracking-tight text-black">A-Levels</p>
                <p className="text-xs text-gray-500">Accounting, Mathematics, Urdu</p>
              </div>
              <div className="text-right">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Status</h3>
                <p className="text-sm font-bold tracking-tight text-black">Open to Work</p>
                <p className="text-xs text-blue-600 font-mono">Internships / Junior Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CVPage;
