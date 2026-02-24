"use client";

import React from 'react';
import { PrinterIcon } from 'lucide-react';

const CVPage = () => {
  const handlePrint = () => {
    window.print();
  };

  const projects = [
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
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        {/* Print Button */}
        <div className="no-print flex justify-end mb-6">
          <button onClick={handlePrint} className="btn-primary">
            <PrinterIcon className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* PAGE 1 */}
        <div className="cv-page bg-white text-black p-10 mb-0 print:pb-10">
          {/* Header */}
          <div className="border-b-2 border-blue-600 pb-4 mb-4">
            <h1 className="text-4xl font-bold mb-1">
              Syed Nauman <span className="text-blue-600">Navaid</span>
            </h1>
            <p className="text-lg text-blue-600 font-semibold mb-3">Full-Stack Developer</p>
            <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
              <span>naumannavad378@gmail.com</span>
              <span>+92 309 1273446</span>
              <span>naumans-portfolio-kappa.vercel.app</span>
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-5">
            <h2 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 ">
              Full-stack developer specializing in modern web applications with AI-assisted workflows.
              Experienced with Next.js, React, TypeScript, and FastAPI. Proficient in leveraging AI tools
              for rapid prototyping and prompt engineering. Seeking internship or junior developer role.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-5">
            <h2 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              Skills
            </h2>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <p className="font-semibold mb-1">Frontend</p>
                <p className="text-gray-600">Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Backend</p>
                <p className="text-gray-600">Node.js, Express, FastAPI, Python, REST APIs</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Databases/CMS</p>
                <p className="text-gray-600">PostgreSQL, MongoDB, Supabase, Sanity, Qdrant</p>
              </div>
              <div>
                <p className="font-semibold mb-1">AI & Workflow</p>
                <p className="text-gray-600">AI-assisted dev, Prompt Engineering, RAG, LLM Integration</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Tools</p>
                <p className="text-gray-600">Git/GitHub, Vercel, Postman, Docker</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Soft Skills</p>
                <p className="text-gray-600">Problem-solving, Communication, Time management</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <h2 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              Experience
            </h2>
            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Freelance Web Developer</span>
                <span className="text-gray-500">2023 - Present</span>
              </div>
              <p className="text-gray-500 mb-2">Karachi, Pakistan</p>
              <ul className="space-y-1 text-gray-700 ">
                <li>• Deliver responsive web applications and dashboards</li>
                <li>• Convert Figma designs into production-ready code</li>
                <li>• Build AI-integrated applications and CMS platforms</li>
                <li>• Manage full-stack development from backend to frontend</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              Education
            </h2>
            <div className="text-sm">
              <p className="font-semibold">A-Levels</p>
              <p className="text-gray-500">Karachi, Pakistan • Accounting, Mathematics, Urdu</p>
            </div>
          </div>
        </div>

        {/* PAGE 2 */}
        <div className="cv-page bg-white text-black p-10 print:border-0">
          {/* Projects */}
          <div className="mb-5">
            <h2 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <div key={idx} className="text-sm border-b border-gray-200 pb-3 last:border-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold">{project.title}</span>
                    <span className="text-xs text-gray-500">{project.tech}</span>
                  </div>
                  <p className="text-gray-600 mb-1">{project.description}</p>
                  <ul className="space-y-0.5 text-gray-700  text-xs">
                    {project.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Interests */}
          <div className="grid grid-cols-2 gap-4 text-sm pt-4 border-t border-gray-300">
            <div>
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-gray-600">English (Professional)</p>
              <p className="text-gray-600">Urdu (Native)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Interests</h3>
              <p className="text-gray-600">
                AI/ML, Open Source, Competitive Programming<br />
                PC Building, Technical Writing
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
            <p>References available upon request</p>
            <p>naumannavad378@gmail.com • naumans-portfolio-kappa.vercel.app</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CVPage;
