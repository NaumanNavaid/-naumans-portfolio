import React from 'react';
import { SectionHeader } from './SectionHeader';

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep dive into your business requirements and technical constraints.",
      duration: "3-5 days"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Wireframes and interactive prototypes aligned with your business goals.",
      duration: "1-2 weeks"
    },
    {
      number: "03",
      title: "Execution",
      description: "Agile development with regular demos and comprehensive testing.",
      duration: "2-6 weeks"
    },
    {
      number: "04",
      title: "Ship",
      description: "Launch to production with monitoring and documentation.",
      duration: "1 week"
    }
  ];

  return (
    <section id="process" className="py-32 md:py-48">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <SectionHeader
          badge="WORKFLOW"
          title="Predictable Delivery"
          description="A structured approach to product development that ensures quality and speed."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={step.title} className="glass rounded-[32px] p-8 flex flex-col justify-between min-h-[280px] border-accent/5">
              <div>
                <div className="text-display-sm font-bold text-accent/20 mb-6">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{step.description}</p>
              </div>
              <div className="pt-4 border-t border-foreground/5">
                <div className="flex justify-between items-center">
                  <span className="text-mono">Duration</span>
                  <span className="text-[12px] font-medium">{step.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
