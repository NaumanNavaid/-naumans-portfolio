import React from 'react';
import { BotIcon, Code2Icon, BarChartIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const Expertise = () => {
  const areas = [
    {
      icon: <BotIcon className="w-5 h-5" />,
      title: "AI-Powered Platforms",
      description: "Engineering SaaS products with embedded AI capabilities, specialized in LLM integrations and RAG systems.",
      deliverables: ["RAG Systems", "Vector Search", "LLM Pipelines"],
    },
    {
      icon: <Code2Icon className="w-5 h-5" />,
      title: "Full-Stack Product",
      description: "Building scalable web applications with Next.js and high-performance backends using FastAPI.",
      deliverables: ["Next.js Apps", "FastAPI", "System Design"],
    },
    {
      icon: <BarChartIcon className="w-5 h-5" />,
      title: "Operational Systems",
      description: "Custom dashboards and workflow solutions designed for industrial efficiency and monitoring.",
      deliverables: ["Dashboards", "Automation", "Integrations"],
    }
  ];

  return (
    <section id="services" className="py-32 md:py-48">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <SectionHeader
          badge="EXPERTISE"
          title="Bridging Code & Intelligence"
          description="I specialize in building complete digital ecosystems that leverage modern stacks and AI."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <div
              key={area.title}
              className="glass rounded-[32px] p-8 group hover:translate-y-[-8px] transition-all duration-500 shadow-spatial-sm hover:shadow-spatial-md border-accent/5 hover:border-accent/20"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-inner">
                {area.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">{area.title}</h3>
              <p className="text-muted mb-8 leading-relaxed text-sm">{area.description}</p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-accent/5">
                {area.deliverables.map((item) => (
                  <span key={item} className="text-[10px] text-mono bg-accent/5 text-accent px-2 py-0.5 rounded-full border border-accent/5 font-bold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
