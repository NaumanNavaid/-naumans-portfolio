import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLinkIcon, Code2Icon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import projects from '@/data/projects';

export const FeaturedProjects = () => {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 md:py-32" id="work">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <SectionHeader
          badge="PORTFOLIO"
          title="Selected Projects"
          description="A collection of products where AI meets engineering excellence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, idx) => (
            <div
              key={project.title}
              className="glass rounded-[40px] p-4 group transition-all duration-700 hover:shadow-spatial-lg border-accent/5 hover:border-accent/20"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[16/10] rounded-[30px] overflow-hidden mb-8 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] text-mono bg-accent text-white px-3 py-1 rounded-full uppercase font-bold tracking-widest shadow-lg shadow-accent/20">Featured</span>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold tracking-tighter group-hover:text-accent transition-colors">{project.title}</h3>
                  <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent/10 hover:text-accent transition-colors">
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-muted text-sm mb-8 leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] text-mono bg-accent/5 text-accent px-2 py-0.5 rounded-full border border-accent/5 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-minimal-primary flex-1 text-center py-2.5"
                  >
                    View Project
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      className="btn-minimal p-2.5 flex items-center justify-center"
                    >
                      <Code2Icon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/projects"
            className="text-mono border-b border-foreground/20 hover:border-foreground transition-colors pb-1"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
