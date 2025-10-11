import React from 'react';

import projects from '@/data/projects';
import Image from 'next/image';

// --- Reusable Components ---
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">{children}</h2>
    <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full"></div>
  </div>
);

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <div
    className="card-hover bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 group fade-in hover:border-primary/50"
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    <div className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <Image
        src={project.image}
        alt={`Screenshot of the ${project.title} project`}
        width={400}
        height={224}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.deploymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gradient w-full py-3 rounded-xl font-medium text-center block mt-6"
      >
        View Project →
      </a>
    </div>
  </div>
);

// --- Page Sections ---
const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between gap-16 py-20 md:py-32">
    <div className="flex-1 space-y-8">
      <div className="space-y-6 fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for opportunities
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Nauman
          </span>{' '}
          👋
        </h1>
        <p className="text-xl text-muted/90 max-w-2xl leading-relaxed">
          A passionate full-stack developer crafting beautiful digital experiences 
          with modern web technologies and creative solutions.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{ animationDelay: '0.2s' }}>
        <a
          href="/#projects"
          className="btn-gradient px-8 py-4 rounded-xl font-semibold text-center inline-flex items-center justify-center gap-2 group"
        >
          View My Work
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="/contact"
          className="px-8 py-4 bg-card/50 backdrop-blur-sm border-2 border-primary/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary transition-all text-center"
        >
          Get in Touch
        </a>
      </div>
    </div>
    
    <div className="relative fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full group">
        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
        <div className="relative rounded-full border-4 border-primary/30 backdrop-blur-sm overflow-hidden shadow-2xl">
          <img 
            src="https://placehold.co/320x320/8A42E5/ffffff?text=N" 
            alt="Profile picture of Nauman" 
            width={320} 
            height={320} 
            className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        <div className="absolute -inset-3 rounded-full border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 border-t border-border/50 fade-in" style={{ animationDelay: '0.3s' }}>
    <div className="max-w-4xl mx-auto space-y-12">
      <SectionTitle>About Me</SectionTitle>
      <div className="bg-card/30 backdrop-blur-md p-10 rounded-3xl border border-border/50 shadow-xl">
        <p className="text-muted/90 text-lg leading-loose text-center">
          With several months of experience in full-stack development, I'm constantly learning and evolving. 
          I've honed my skills in creating scalable web applications using technologies like{' '}
          <span className="text-primary font-medium">React</span>,{' '}
          <span className="text-primary font-medium">Next.js</span>,{' '}
          <span className="text-primary font-medium">Tailwind CSS</span>, and{' '}
          <span className="text-primary font-medium">Sanity</span>. 
          Currently an A-level student studying Maths, Accounting, and Urdu, 
          I'm passionate about solving complex problems and delivering user-centric solutions.
        </p>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = {
    "Frontend": ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Firebase", "Sanity.io"],
    "Tools & Other": ["Git & GitHub", "Vercel", "GraphQL", "REST APIs"]
  };

  return (
    <section id="skills" className="py-24 fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="max-w-5xl mx-auto space-y-12">
        <SectionTitle>My Tech Stack</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, list], idx) => (
            <div 
              key={category} 
              className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-border/50 text-center card-hover group"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-2xl border border-primary/20 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-6">{category}</h3>
              <ul className="space-y-3">
                {list.map(skill => (
                  <li key={skill} className="text-muted/80 text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section className="py-24 fade-in" id="projects" style={{ animationDelay: '0.5s' }}>
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-6">
        <SectionTitle>Featured Projects</SectionTitle>
        <p className="text-muted/90 text-lg max-w-2xl mx-auto">
          A showcase of my recent work demonstrating technical expertise and creative problem-solving.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/projects"
          className="btn-gradient px-10 py-4 rounded-xl font-semibold text-center inline-flex items-center gap-3 group"
        >
          View All Projects
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 fade-in" style={{ animationDelay: '0.6s' }}>
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <SectionTitle>Let's Work Together</SectionTitle>
      <p className="text-muted/90 max-w-2xl mx-auto text-lg leading-relaxed">
        I'm currently open to new opportunities and collaborations. 
        Feel free to reach out if you have a project in mind or just want to connect!
      </p>
      <a
        href="mailto:nauman@example.com"
        className="btn-gradient px-12 py-5 rounded-xl font-semibold text-center inline-flex items-center gap-3 text-lg group"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Say Hello
      </a>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}