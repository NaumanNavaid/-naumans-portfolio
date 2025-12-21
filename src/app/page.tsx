import React from 'react';
import { ArrowRightIcon, CheckIcon, ClockIcon, ExternalLink, MailIcon, PhoneIcon, CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';

// --- Reusable Components ---
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center">
    <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-foreground mb-4 tracking-tight">{children}</h2>
    <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full"></div>
  </div>
);

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <div
    className="card-hover bg-card/50 backdrop-blur-sm rounded-2xl xl:rounded-3xl overflow-hidden border border-border/50 transition-all duration-300 group fade-in hover:border-primary/50"
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    <div className="relative h-56 xl:h-64 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
          Live Project
        </span>
      </div>
      <Image
        src={project.image}
        alt={`Screenshot of the ${project.title} project`}
        width={400}
        height={224}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="p-6 xl:p-8 space-y-4 xl:space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm text-primary font-medium">Case Study</p>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
          <p className="text-muted text-sm">{project.challenge || "Building a scalable solution with modern technologies"}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
          <p className="text-muted text-sm">{project.description}</p>
        </div>

        {project.outcome && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
            <p className="text-muted text-sm">{project.outcome}</p>
          </div>
        )}
      </div>

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

      <div className="flex gap-3">
        <a
          href={project.deploymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient flex-1 py-3 rounded-xl font-medium text-center block"
        >
          View Live →
        </a>
        {project.link && (
          <a
            href={project.link}
            className="px-4 py-3 bg-card/50 border border-border rounded-xl hover:bg-card transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  </div>
);

// --- Page Sections ---
const Hero = () => (
  <section className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
    <div className="max-w-7xl md:max-w-7xl xl:max-w-none mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 py-16 md:py-32 xl:py-40">
      <div className="flex-1 space-y-6 md:space-y-8 xl:space-y-12">
      <div className="space-y-4 md:space-y-6 xl:space-y-8 fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new projects • Q2 2025
        </div>

        <div className="space-y-3 md:space-y-4 xl:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-8xl font-bold text-foreground tracking-tight leading-tight">
            Full-Stack Development
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              & AI-Powered Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl text-muted font-medium">
            Web Applications • RAG Systems • Smart Automation
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-muted/90 max-w-3xl md:max-w-4xl leading-relaxed">
          I build intelligent web applications that solve real business problems.
          From full-stack systems with AI integrations to RAG-powered knowledge bases,
          I deliver scalable solutions that drive efficiency and growth.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 xl:gap-6 fade-in" style={{ animationDelay: '0.2s' }}>
        <a
          href="#services"
          className="btn-gradient px-6 py-3 md:px-8 md:py-4 xl:px-10 xl:py-5 xl:text-lg rounded-xl font-semibold text-center inline-flex items-center justify-center gap-2 group shadow-2xl shadow-primary/20"
        >
          Start a Project
          <ArrowRightIcon className="w-4 h-4 md:w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#work"
          className="px-6 py-3 md:px-8 md:py-4 xl:px-10 xl:py-5 xl:text-lg bg-card/50 backdrop-blur-sm border-2 border-primary/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary transition-all text-center"
        >
          View Case Studies
        </a>
      </div>

      <div className="flex items-center gap-6 md:gap-8 xl:gap-12 pt-4 fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="text-center">
          <div className="text-xl md:text-2xl xl:text-3xl font-bold text-primary">2+</div>
          <div className="text-xs md:text-sm xl:text-base text-muted">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-xl md:text-2xl xl:text-3xl font-bold text-primary">10+</div>
          <div className="text-xs md:text-sm xl:text-base text-muted">Projects Delivered</div>
        </div>
        <div className="text-center">
          <div className="text-xl md:text-2xl xl:text-3xl font-bold text-primary">100%</div>
          <div className="text-xs md:text-sm xl:text-base text-muted">Client Satisfaction</div>
        </div>
      </div>
      </div>

      <div className="relative fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative rounded-full border-4 border-white/30 backdrop-blur-sm overflow-hidden">
            <img
              src="/nauman.jpg"
              alt="Nauman - Full-Stack Developer"
              width={384}
              height={384}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute -inset-2 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI-Powered Web Apps",
      description: "Intelligent applications with embedded AI capabilities and automation",
      features: ["RAG Bot Development", "LLM API Integrations", "Vector Search Systems", "Smart Workflow Automation"]
    },
    {
      icon: "🚀",
      title: "Full-Stack Development",
      description: "Scalable web applications built with modern technologies and best practices",
      features: ["React & Next.js", "Node.js APIs", "Database Design", "Cloud Infrastructure"]
    },
    {
      icon: "🔧",
      title: "Internal Tools & Dashboards",
      description: "Custom business solutions that improve team efficiency and decision-making",
      features: ["Real-time Analytics", "Process Automation", "Data Visualization", "Team Collaboration Tools"]
    }
  ];

  return (
    <section id="services" className="py-24 xl:py-32 fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-16 xl:mb-20 space-y-6">
          <SectionTitle>How I Can Help</SectionTitle>
          <p className="text-muted/90 text-lg xl:text-xl max-w-3xl mx-auto">
            End-to-end development services from concept to deployment.
            I transform your ideas into powerful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-card/30 backdrop-blur-md p-8 xl:p-10 rounded-3xl border border-border/50 text-center card-hover group"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="text-5xl xl:text-6xl mb-6 xl:mb-8 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl xl:text-3xl font-bold text-foreground mb-4 xl:mb-6">{service.title}</h3>
              <p className="text-muted/90 mb-6 xl:mb-8 leading-relaxed xl:text-lg">{service.description}</p>
              <ul className="space-y-2 xl:space-y-3 text-left">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-muted/80 text-sm xl:text-base">
                    <CheckIcon className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="btn-gradient px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
          >
            Get a Free Consultation
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 border-t border-border/50 fade-in" style={{ animationDelay: '0.3s' }}>
    <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-4xl md:max-w-5xl xl:max-w-none mx-auto">
      <div className="space-y-12">
        <SectionTitle>About Nauman</SectionTitle>
        <div className="bg-card/30 backdrop-blur-md p-8 md:p-10 xl:p-12 rounded-3xl border border-border/50 shadow-xl">
          <p className="text-muted/90 text-base md:text-lg xl:text-xl leading-loose text-center">
            As a full-stack developer specializing in AI-powered solutions, I help businesses leverage
            modern technology to solve complex challenges. With expertise in{' '}
            <span className="text-primary font-medium">React</span>,{' '}
            <span className="text-primary font-medium">Next.js</span>,{' '}
            <span className="text-primary font-medium">RAG Systems</span>, and{' '}
            <span className="text-primary font-medium">LLM Integrations</span>,
            I build intelligent applications that drive efficiency and growth.
          </p>
          <div className="mt-8 flex justify-center gap-6 md:gap-8 xl:gap-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-2">AI</div>
              <div className="text-xs md:text-sm xl:text-base text-muted">Integration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-2">Client</div>
              <div className="text-xs md:text-sm xl:text-base text-muted">Focused</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-2">Results</div>
              <div className="text-xs md:text-sm xl:text-base text-muted">Oriented</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your goals, target audience, and technical requirements",
      deliverables: ["Requirements Analysis", "User Stories", "Technical Specification"]
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes",
      deliverables: ["UI/UX Design", "Interactive Prototype", "Design System"]
    },
    {
      step: "03",
      title: "Development",
      description: "Building your application with clean, scalable code",
      deliverables: ["MVP Development", "Code Review", "Testing Suite"]
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying your application and providing ongoing support",
      deliverables: ["Production Deployment", "Documentation", "Maintenance Plan"]
    }
  ];

  return (
    <section className="py-24 xl:py-32 bg-card/20 border-y border-border/30 fade-in" style={{ animationDelay: '0.35s' }} id="process">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-16 xl:mb-20 space-y-6">
          <SectionTitle>My Process</SectionTitle>
          <p className="text-muted/90 text-lg xl:text-xl max-w-3xl mx-auto">
            A transparent, collaborative approach to ensure your project succeeds.
            From initial concept to final launch, I keep you involved every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 xl:top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="bg-card/50 backdrop-blur-md p-6 xl:p-8 rounded-2xl border border-border/50 card-hover h-full">
                <div className="text-3xl xl:text-4xl font-bold text-primary/20 mb-4 xl:mb-6">{step.step}</div>
                <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-3 xl:mb-4">{step.title}</h3>
                <p className="text-muted/90 text-sm xl:text-base mb-4 xl:mb-6">{step.description}</p>
                <ul className="space-y-1 xl:space-y-2">
                  {step.deliverables.map(item => (
                    <li key={item} className="text-xs xl:text-sm text-muted/70 flex items-center gap-1">
                      <span className="w-1 h-1 xl:w-1 xl:h-1 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full border border-emerald-500/20">
            <ClockIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">
              Average project timeline: 4-8 weeks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = {
    "AI & Automation": ["RAG Systems", "LLM API Integrations", "Vector Databases", "LangChain", "Workflow Automation"],
    "Frontend": ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST & GraphQL APIs"],
    "DevOps & Tools": ["Git & GitHub", "Vercel", "Docker", "CI/CD", "Cloud Platforms"]
  };

  return (
    <section id="skills" className="py-24 fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-5xl md:max-w-6xl xl:max-w-none mx-auto">
        <div className="space-y-12">
          <SectionTitle>Technologies I Use</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {Object.entries(skills).map(([category, list], idx) => (
              <div
                key={category}
                className="bg-card/30 backdrop-blur-md p-6 md:p-8 xl:p-10 rounded-3xl border border-border/50 text-center card-hover group"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="mb-5 md:mb-6 xl:mb-8 inline-block p-3 md:p-4 bg-primary/10 rounded-2xl border border-primary/20 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 bg-gradient-primary rounded-lg"></div>
                </div>
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-primary mb-4 md:mb-6 xl:mb-8">{category}</h3>
                <ul className="space-y-2 md:space-y-3 xl:space-y-4">
                  {list.map(skill => (
                    <li key={skill} className="text-muted/80 text-xs md:text-sm xl:text-base font-medium">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section className="py-24 xl:py-32 fade-in" id="work" style={{ animationDelay: '0.5s' }}>
    <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="text-center mb-16 xl:mb-20 space-y-6">
        <SectionTitle>Case Studies</SectionTitle>
        <p className="text-muted/90 text-lg xl:text-xl max-w-3xl mx-auto">
          Real projects demonstrating how I solve business challenges and deliver measurable results.
          Each case study shows the complete journey from problem to solution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="text-center mt-16 xl:mt-20">
        <a
          href="/projects"
          className="btn-gradient px-10 py-4 xl:px-12 xl:py-5 xl:text-lg rounded-xl font-semibold text-center inline-flex items-center gap-3 group"
        >
          View All Case Studies
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 fade-in" style={{ animationDelay: '0.6s' }}>
    <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-4xl md:max-w-5xl xl:max-w-none mx-auto text-center space-y-8">
      <SectionTitle>Ready to Start Your Project?</SectionTitle>
      <p className="text-muted/90 text-base md:text-lg xl:text-xl leading-relaxed max-w-3xl mx-auto">
        Let's discuss how I can help bring your vision to life.
        From startups to established businesses, I partner with clients to deliver exceptional digital experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 xl:gap-6 justify-center">
        <a
          href="/contact"
          className="btn-gradient px-6 py-3 md:px-8 md:py-4 xl:px-12 xl:py-5 xl:text-lg rounded-xl font-semibold text-center inline-flex items-center gap-2 md:gap-3 group shadow-2xl shadow-primary/20"
        >
          <MailIcon className="w-4 h-4 md:w-5 xl:w-6 h-4 md:h-5 xl:h-6" />
          Start a Project
          <ArrowRightIcon className="w-4 h-4 md:w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="https://calendly.com/nauman"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 md:px-8 md:py-4 xl:px-12 xl:py-5 xl:text-lg bg-card/50 backdrop-blur-sm border-2 border-primary/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary transition-all text-center inline-flex items-center gap-2 md:gap-3"
        >
          <CalendarIcon className="w-4 h-4 md:w-5 xl:w-6 h-4 md:h-5 xl:h-6" />
          Book a Call
        </a>
      </div>
      <div className="pt-4 text-xs md:text-sm xl:text-base text-muted/70">
        <p>Or email directly at: <a href="mailto:nauman@example.com" className="text-primary hover:underline">nauman@example.com</a></p>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}